import threading
import time
import config as cfg
from can_reader import CanReader
from gnss_reader import GnssReader
from session_files import SessionFiles

# function to sync logs to disk
def sync_if_needed(count, flush_every, fsync_every, flush_function):
    if count % fsync_every == 0:
        flush_function(fsync=True)
    elif count % flush_every == 0:
        flush_function(fsync=False)

# function to read gnss data in another thread
def gnss_loop(session, stop_event, reader_factory=None):
    """Read GNSS continuously, reconnecting when USB appears or disconnects."""
    reader_factory = reader_factory or GnssReader
    count = 0
    last_error_report = 0.0
    while not stop_event.is_set():
        reader = None
        try:
            reader = reader_factory(port=cfg.GNSS_PORT, baudrate=cfg.GNSS_BAUDRATE)
            print(f"86LOG GNSS connected: {reader.port}", flush=True)
            last_error_report = 0.0
            while not stop_event.is_set():
                line = reader.recv()
                if line is None:
                    continue
                session.append_gnss(line)
                count += 1
                sync_if_needed(
                    count,
                    cfg.GNSS_FLUSH_EVERY,
                    cfg.GNSS_FSYNC_EVERY,
                    session.flush_gnss,
                )
        except Exception as error:
            now = time.monotonic()
            if not last_error_report or now - last_error_report >= 30:
                print(f"86LOG GNSS unavailable: {error}; retrying", flush=True)
                last_error_report = now
            stop_event.wait(cfg.GNSS_RETRY_SECONDS)
        finally:
            if reader is not None:
                try:
                    reader.close()
                except Exception:
                    pass

# main juice
def main():
    can_reader = CanReader(cfg.CAN_INTERFACE)
    stop_event = threading.Event()
    gnss_thread = None

    # create session files
    session = SessionFiles(cfg)
    print(f"86LOG session {session.session_dir.name}", flush=True)

    # start gnss
    if cfg.GNSS_ENABLED:
        gnss_thread = threading.Thread(
            target=gnss_loop,
            args=(session, stop_event),
            name="gnss-reader",
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
            sync_if_needed(count, cfg.CAN_FLUSH_EVERY, cfg.CAN_FSYNC_EVERY, session.flush_can)
    finally:
        stop_event.set()
        can_reader.close()
        if gnss_thread is not None:
            gnss_thread.join()
        session.close()

# call the main func
if __name__ == "__main__":
    main()
