#!/usr/bin/env python3
"""86DASH: serves the 86SIM cockpit (web/) and streams the car's live CAN and GNSS to it.

Everything the browser needs is in web/, built on the Mac (see README), so nothing here touches the network.

/        the cockpit (web/index.html; open /?oem&live)
/live    Server-Sent Events: batches of {"t": now, "c": [[t, id, "hex"], ...], "g": [[t, "$GP..."], ...]}
         with times in µs on this machine's monotonic clock
/state   a small JSON status (also the session number and the last GNSS position the cockpit uses), for checking from a shell

CAN is read from SocketCAN directly (several readers are fine), and GNSS by following the logger's newest
sessions/NNNN/gnss.log, because the logger owns the serial port. A display failure can never stop recording.
"""

import argparse
from collections import deque
import heapq
import json
import mimetypes
import os
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
WEB = ROOT / "web"
SESSIONS = ROOT.parent / "sessions"
TYPES = {".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".html": "text/html",
         ".json": "application/json", ".glb": "model/gltf-binary", ".bin": "application/octet-stream",
         ".gz": "application/gzip", ".png": "image/png", ".svg": "image/svg+xml", ".wasm": "application/wasm"}


def now_us():
    return int(time.monotonic() * 1e6)


class Feed:
    """Everything read from the car, in arrival order, for every connected browser to catch up on."""

    def __init__(self, keep=20000):
        self.cond = threading.Condition()
        self.events = deque(maxlen=keep)  # (seq, "c" or "g", payload)
        self.seq = 0
        self.status = {"can_frames": 0, "can_error_frames": 0, "gnss_lines": 0,
                       "last_can": None, "last_gnss": None, "error": None}

    def add(self, kind, payload):
        with self.cond:
            self.seq += 1
            self.events.append((self.seq, kind, payload))
            key = "can_frames" if kind == "c" else "gnss_lines"
            self.status[key] += 1
            self.status["last_can" if kind == "c" else "last_gnss"] = time.monotonic()
            self.cond.notify_all()

    def after(self, seq, timeout):
        """Events newer than `seq` (waits up to `timeout` for some) and the newest seq."""
        with self.cond:
            if self.seq <= seq:
                self.cond.wait(timeout)
            if self.seq <= seq:
                return seq, []
            oldest = self.events[0][0] if self.events else self.seq + 1
            start = max(0, seq + 1 - oldest)
            return self.seq, [self.events[i] for i in range(start, len(self.events))]

    def snapshot(self):
        with self.cond:
            s = dict(self.status)
        now = time.monotonic()
        s["can_connected"] = s.pop("last_can") is not None and now - self.status["last_can"] < 2
        s["gnss_connected"] = s.pop("last_gnss") is not None and now - self.status["last_gnss"] < 3
        return s


FEED = Feed()


def can_loop(interface):
    while True:
        try:
            import can
            with can.interface.Bus(channel=interface, interface="socketcan") as bus:
                FEED.status["error"] = None
                while True:
                    message = bus.recv(timeout=1.0)
                    if message is None:
                        continue
                    if message.is_error_frame:
                        FEED.status["can_error_frames"] += 1
                        continue
                    FEED.add("c", [now_us(), message.arbitration_id, bytes(message.data[:message.dlc]).hex()])
        except Exception as error:
            FEED.status["error"] = f"can: {error}"
            time.sleep(2)


def nmea_of(line):
    """The NMEA sentence in a gnss.log line: `<time> $GP...` (86LOG) or {"raw": "$GP..."} (older loggers)."""
    line = line.strip()
    if line.startswith("{"):
        try:
            return json.loads(line).get("raw") or None
        except ValueError:
            return None
    _, _, raw = line.partition(" ")
    return raw if raw.startswith("$") else None


def newest_session(sessions):
    numbered = [p for p in sessions.iterdir() if p.is_dir() and p.name.isdigit()]
    return max(numbered, key=lambda p: int(p.name)) if numbered else None


def position_of(sentence):
    """(lat, lon) from a valid GGA or RMC sentence, else None."""
    parts = sentence.split("*", 1)[0].split(",")
    kind = parts[0][3:] if parts and len(parts[0]) >= 6 else ""
    try:
        if kind == "GGA" and len(parts) > 6 and parts[6] not in ("", "0"):
            lat, ns, lon, ew = parts[2:6]
        elif kind == "RMC" and len(parts) > 6 and parts[2] == "A":
            lat, ns, lon, ew = parts[3:7]
        else:
            return None
        la = int(lat[:2]) + float(lat[2:]) / 60
        lo = int(lon[:3]) + float(lon[3:]) / 60
    except (ValueError, IndexError):
        return None
    return (-la if ns == "S" else la, -lo if ew == "W" else lo)


LAST_FIX = {"at": 0.0, "fix": None}


def last_fix(sessions=None, newest=5, only=None):
    """The car's last GNSS position from the newest sessions' gnss.log tails (this drive's, or the last one's
    before the first fix), so the cockpit can open the map the car is in. Cached for 5 s."""
    if time.monotonic() - LAST_FIX["at"] < 5:
        return LAST_FIX["fix"]
    found = None
    try:
        folders = [only] if only else sorted((p for p in (sessions or SESSIONS).iterdir() if p.is_dir() and p.name.isdigit()),
                                             key=lambda p: int(p.name), reverse=True)[:newest]
    except OSError:
        folders = []
    for folder in folders:
        try:
            with (folder / "gnss.log").open("rb") as stream:
                stream.seek(0, os.SEEK_END)
                stream.seek(max(0, stream.tell() - 65536))
                lines = stream.read().decode("ascii", "ignore").splitlines()
        except OSError:
            continue
        for line in reversed(lines):
            sentence = nmea_of(line)
            found = position_of(sentence) if sentence else None
            if found:
                break
        if found:
            break
    LAST_FIX.update(at=time.monotonic(), fix=found)
    return found


def session_name():
    """The logger's current session number (its newest sessions/NNNN), or None."""
    try:
        latest = newest_session(SESSIONS)
    except OSError:
        return None
    return latest.name if latest else None


# With --replay, the replayed folder's name instead, and its folder.
SESSION_NAME = None
REPLAY_DIR = None


def gnss_follow_loop(sessions):
    """Follows the newest session's gnss.log from its end, switching when the logger starts a new session."""
    path = stream = None
    while True:
        try:
            latest = newest_session(sessions)
            latest = latest / "gnss.log" if latest else None
            if latest != path and latest is not None and latest.exists():
                if stream:
                    stream.close()
                stream = latest.open("r", encoding="ascii", errors="ignore")
                stream.seek(0, os.SEEK_END)
                path = latest
            line = stream.readline() if stream else ""
            if line.endswith("\n"):
                sentence = nmea_of(line)
                if sentence:
                    FEED.add("g", [now_us(), sentence])
            else:
                if line and stream:
                    stream.seek(stream.tell() - len(line))  # a half-written line: read it again when complete
                time.sleep(0.05)
        except OSError:
            if stream:
                stream.close()
            path = stream = None
            time.sleep(1)


def replay_loop(session, start_s):
    """Mac testing: plays a recorded session folder in real time, as if it were the car, then loops."""
    def records(path, kind):
        if not path.exists():
            return
        with path.open("r", encoding="ascii", errors="ignore") as stream:
            for line in stream:
                if kind == "c":
                    parts = line.split()
                    if len(parts) >= 3 and parts[1] not in ("00C", "004"):
                        try:
                            yield float(parts[0]), kind, [int(parts[1], 16), "".join(parts[3:3 + int(parts[2])])]
                        except ValueError:
                            continue
                else:
                    sentence = nmea_of(line)
                    if not sentence:
                        continue
                    if line.lstrip().startswith("{"):
                        stamp = json.loads(line).get("wall_time")
                    else:
                        stamp = line.split(" ", 1)[0]
                    try:
                        yield float(stamp), kind, sentence
                    except (TypeError, ValueError):
                        continue

    while True:
        merged = heapq.merge(records(session / "raw_can.log", "c"), records(session / "gnss.log", "g"),
                             key=lambda r: r[0])
        first = wall0 = None
        for stamp, kind, payload in merged:
            if first is None:
                first = stamp
            if stamp - first < start_s:
                continue
            if wall0 is None:
                wall0 = time.monotonic() - (stamp - first - start_s)
            delay = wall0 + (stamp - first - start_s) - time.monotonic()
            if delay > 0:
                time.sleep(delay)
            FEED.add(kind, [now_us(), *payload] if kind == "c" else [now_us(), payload])


def byte_range(header, size):
    """(start, end) inclusive for a single "bytes=a-b" Range header, or None when absent or unusable."""
    if not header or not header.startswith("bytes=") or "," in header:
        return None
    first, _, last = header[6:].strip().partition("-")
    try:
        if first == "":
            start, end = max(0, size - int(last)), size - 1
        else:
            start, end = int(first), min(size - 1, int(last)) if last else size - 1
    except ValueError:
        return None
    return (start, end) if 0 <= start <= end < size else None


def web_file(url_path):
    """The file under web/ for a URL path, or None (never anything outside web/)."""
    rel = url_path.split("?", 1)[0].lstrip("/") or "index.html"
    path = (WEB / rel).resolve()
    if path != WEB.resolve() and WEB.resolve() not in path.parents:
        return None
    return path if path.is_file() else None


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if self.path == "/":  # the bare address opens the live cockpit
            self.send_response(302)
            self.send_header("Location", "/?oem&live")
            self.send_header("Content-Length", "0")
            return self.end_headers()
        if path == "/live":
            return self.stream_live()
        if path == "/state":
            state = FEED.snapshot()
            state["session"] = SESSION_NAME or session_name()
            fix = last_fix(only=REPLAY_DIR)
            state["fix"] = {"lat": round(fix[0], 6), "lon": round(fix[1], 6)} if fix else None
            return self.send_body(json.dumps(state).encode(), "application/json")
        file = web_file(self.path)
        if file is None:
            return self.send_error(404)
        size = file.stat().st_size
        part = byte_range(self.headers.get("Range"), size)
        start, end = part or (0, size - 1)
        kind = TYPES.get(file.suffix) or mimetypes.guess_type(file.name)[0] or "application/octet-stream"
        self.send_response(206 if part else 200)
        self.send_header("Content-Type", kind)
        self.send_header("Accept-Ranges", "bytes")
        if part:
            self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        with file.open("rb") as stream:
            stream.seek(start)
            left = end - start + 1
            while left > 0:
                chunk = stream.read(min(left, 1 << 16))
                if not chunk:
                    break
                self.wfile.write(chunk)
                left -= len(chunk)

    def send_body(self, body, kind):
        self.send_response(200)
        self.send_header("Content-Type", kind)
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def stream_live(self):
        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        seq, _ = FEED.after(FEED.seq, 0)  # start from now, not the backlog
        last_sent = 0.0
        try:
            while True:
                seq, events = FEED.after(seq, 0.05)
                if not events and time.monotonic() - last_sent < 1:
                    continue
                batch = {"t": now_us(), "c": [e[2] for e in events if e[1] == "c"],
                         "g": [e[2] for e in events if e[1] == "g"]}
                self.wfile.write(b"data: " + json.dumps(batch, separators=(",", ":")).encode() + b"\n\n")
                self.wfile.flush()
                last_sent = time.monotonic()
                time.sleep(0.05)  # about 20 batches a second
        except (BrokenPipeError, ConnectionResetError):
            pass

    def log_message(self, *_):
        pass


class Server(ThreadingHTTPServer):
    daemon_threads = True

    def handle_error(self, request, client_address):
        pass  # a browser closing a connection mid-request (a reload) is not worth a traceback


def main():
    parser = argparse.ArgumentParser(description="86DASH: the 86SIM cockpit and its live CAN/GNSS stream")
    parser.add_argument("--interface", default=os.environ.get("GR86_CAN_INTERFACE", "can0"))
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8086)
    parser.add_argument("--replay", type=Path, metavar="SESSION_DIR",
                        help="play a recorded session folder as if it were the car (testing without the car)")
    parser.add_argument("--from", dest="start", type=float, default=0, metavar="SECONDS",
                        help="with --replay: start this many seconds into the session")
    args = parser.parse_args()
    if not (WEB / "index.html").exists():
        raise SystemExit(f"{WEB}/index.html is missing: build the cockpit into 86DASH/web first (see README)")
    if args.replay:
        global SESSION_NAME, REPLAY_DIR
        SESSION_NAME = args.replay.name
        REPLAY_DIR = args.replay
        threading.Thread(target=replay_loop, args=(args.replay, args.start), daemon=True).start()
    else:
        threading.Thread(target=can_loop, args=(args.interface,), daemon=True).start()
        threading.Thread(target=gnss_follow_loop, args=(SESSIONS,), daemon=True).start()
    print(f"86DASH -> http://{args.host}:{args.port}/?oem&live", flush=True)
    Server((args.host, args.port), Handler).serve_forever()


if __name__ == "__main__":
    main()
