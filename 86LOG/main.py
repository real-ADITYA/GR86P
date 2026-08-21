#!/usr/bin/env python3
"""Record one numbered GR86 CAN/GNSS session."""

import glob
import json
import os
import threading
import time
from dataclasses import dataclass
from pathlib import Path

import can
import serial


PROJECT_ROOT = Path(__file__).resolve().parent.parent
SESSIONS_DIR = Path(os.environ.get("GR86_SESSIONS_DIR", PROJECT_ROOT / "sessions"))
CAN_INTERFACE = os.environ.get("GR86_CAN_INTERFACE", "can0")
CAN_LOG_NAME = "raw_can.log"
CAN_FLUSH_EVERY = 50
CAN_FSYNC_EVERY = 200
GNSS_ENABLED = os.environ.get("GR86_GNSS_ENABLED", "1").lower() not in {"0", "false", "no"}
GNSS_PORT = os.environ.get("GR86_GNSS_PORT") or None
GNSS_BAUDRATE = int(os.environ.get("GR86_GNSS_BAUDRATE", "9600"))
GNSS_RETRY_SECONDS = float(os.environ.get("GR86_GNSS_RETRY_SECONDS", "2"))
GNSS_LOG_NAME = "gnss.log"
GNSS_FLUSH_EVERY = 1
GNSS_FSYNC_EVERY = 20


@dataclass
class CanFrame:
    monotonic_time: float
    arb_id: int
    dlc: int
    data: bytes
    is_error_frame: bool = False


class CanReader:
    def __init__(self, channel):
        self.bus = can.interface.Bus(channel=channel, interface="socketcan")

    def recv(self, timeout=1.0):
        message = self.bus.recv(timeout=timeout)
        if message is None:
            return None
        return CanFrame(
            monotonic_time=time.monotonic(),
            arb_id=message.arbitration_id,
            dlc=message.dlc,
            data=bytes(message.data),
            is_error_frame=bool(getattr(message, "is_error_frame", False)),
        )

    def close(self):
        self.bus.shutdown()


@dataclass
class GnssLine:
    monotonic_time: float
    raw: str


def find_gnss_port():
    ports = sorted(glob.glob("/dev/ttyACM*") + glob.glob("/dev/ttyUSB*"))
    return ports[0] if ports else None


class GnssReader:
    def __init__(self, port=None, baudrate=9600):
        self.port = port or find_gnss_port()
        if self.port is None:
            raise RuntimeError("No GNSS device found")
        self.ser = serial.Serial(self.port, baudrate=baudrate, timeout=1)

    def recv(self):
        raw = self.ser.readline()
        if not raw:
            return None
        line = raw.decode("ascii", errors="ignore").strip()
        return GnssLine(time.monotonic(), line) if line else None

    def close(self):
        self.ser.close()


class SessionFiles:
    def __init__(self, base_dir=SESSIONS_DIR):
        self.started_monotonic = time.monotonic()
        self.started_unix = time.time()
        self.closed = False
        self.session_dir = self.create_session_dir(Path(base_dir))
        self.metadata_path = self.session_dir / "session.json"
        self.can_log = (self.session_dir / CAN_LOG_NAME).open("a", encoding="utf-8")
        self.gnss_log = (self.session_dir / GNSS_LOG_NAME).open("a", encoding="utf-8")
        self.write_metadata(closed_cleanly=False)

    @staticmethod
    def create_session_dir(base_dir):
        base_dir.mkdir(parents=True, exist_ok=True)
        highest = max(
            (int(path.name) for path in base_dir.iterdir()
             if path.is_dir() and path.name.isdigit()),
            default=0,
        )
        session_dir = base_dir / f"{highest + 1:04d}"
        session_dir.mkdir()
        return session_dir

    def write_metadata(self, closed_cleanly, ended_unix=None):
        metadata = {
            "session": self.session_dir.name,
            "started_unix": self.started_unix,
            "closed_cleanly": closed_cleanly,
        }
        if ended_unix is not None:
            metadata["ended_unix"] = ended_unix
            metadata["duration_seconds"] = max(
                0.0, time.monotonic() - self.started_monotonic
            )

        temporary = self.metadata_path.with_suffix(".json.tmp")
        with temporary.open("w", encoding="utf-8") as stream:
            json.dump(metadata, stream, separators=(",", ":"))
            stream.write("\n")
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(temporary, self.metadata_path)

        directory_fd = os.open(self.session_dir, os.O_RDONLY)
        try:
            os.fsync(directory_fd)
        finally:
            os.close(directory_fd)

    def append_can(self, frame):
        data = " ".join(f"{byte:02X}" for byte in frame.data)
        elapsed = frame.monotonic_time - self.started_monotonic
        self.can_log.write(f"{elapsed:.6f} {frame.arb_id:03X} {frame.dlc} {data}\n")

    def append_gnss(self, line):
        elapsed = line.monotonic_time - self.started_monotonic
        self.gnss_log.write(f"{elapsed:.6f} {line.raw}\n")

    def flush_can(self, fsync=False):
        self.can_log.flush()
        if fsync:
            os.fsync(self.can_log.fileno())

    def flush_gnss(self, fsync=False):
        self.gnss_log.flush()
        if fsync:
            os.fsync(self.gnss_log.fileno())

    def close(self):
        if self.closed:
            return
        self.flush_can(fsync=True)
        self.flush_gnss(fsync=True)
        self.can_log.close()
        self.gnss_log.close()
        self.write_metadata(closed_cleanly=True, ended_unix=time.time())
        self.closed = True


def sync_if_needed(count, flush_every, fsync_every, flush_function):
    if count % fsync_every == 0:
        flush_function(fsync=True)
    elif count % flush_every == 0:
        flush_function(fsync=False)


def gnss_loop(session, stop_event, reader_factory=None):
    """Read GNSS continuously, reconnecting when USB appears or disconnects."""
    reader_factory = reader_factory or GnssReader
    count = 0
    last_error_report = 0.0
    while not stop_event.is_set():
        reader = None
        try:
            reader = reader_factory(port=GNSS_PORT, baudrate=GNSS_BAUDRATE)
            print(f"86LOG GNSS connected: {reader.port}", flush=True)
            last_error_report = 0.0
            while not stop_event.is_set():
                line = reader.recv()
                if line is None:
                    continue
                session.append_gnss(line)
                count += 1
                sync_if_needed(
                    count, GNSS_FLUSH_EVERY, GNSS_FSYNC_EVERY, session.flush_gnss
                )
        except Exception as error:
            now = time.monotonic()
            if not last_error_report or now - last_error_report >= 30:
                print(f"86LOG GNSS unavailable: {error}; retrying", flush=True)
                last_error_report = now
            stop_event.wait(GNSS_RETRY_SECONDS)
        finally:
            if reader is not None:
                try:
                    reader.close()
                except Exception:
                    pass


def main():
    can_reader = CanReader(CAN_INTERFACE)
    stop_event = threading.Event()
    gnss_thread = None
    session = SessionFiles()
    print(f"86LOG session {session.session_dir.name}", flush=True)

    if GNSS_ENABLED:
        gnss_thread = threading.Thread(
            target=gnss_loop, args=(session, stop_event), name="gnss-reader"
        )
        gnss_thread.start()

    count = 0
    can_error_count = 0
    last_can_error_report = 0.0
    try:
        while True:
            frame = can_reader.recv(timeout=1.0)
            if frame is None:
                continue
            if frame.is_error_frame:
                can_error_count += 1
                now = time.monotonic()
                if not last_can_error_report or now - last_can_error_report >= 30:
                    print(
                        f"86LOG CAN error frames: {can_error_count}; "
                        "check bitrate, CAN-H/CAN-L, ground, and termination",
                        flush=True,
                    )
                    last_can_error_report = now
                continue
            session.append_can(frame)
            count += 1
            sync_if_needed(
                count, CAN_FLUSH_EVERY, CAN_FSYNC_EVERY, session.flush_can
            )
    finally:
        stop_event.set()
        can_reader.close()
        if gnss_thread is not None:
            gnss_thread.join()
        session.close()


if __name__ == "__main__":
    main()
