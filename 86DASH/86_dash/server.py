#!/usr/bin/env python3
"""Small live GR86 dashboard using the existing 86LOG CAN/GNSS readers."""

import argparse
from collections import defaultdict, deque
import json
import math
import os
import sys
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
LOGGER_ROOT = ROOT.parents[1] / "86LOG"
TANK_GALLONS = 13.2
CAN_BITRATE = int(os.environ.get("GR86_CAN_BITRATE", "500000"))
SESSIONS_DIR = Path(os.environ.get("GR86_SESSIONS_DIR", "/var/lib/gr86p/sessions"))
DECODED_CAN_IDS = {0x040, 0x138, 0x139, 0x13A, 0x13B, 0x228, 0x241,
                   0x328, 0x345, 0x390, 0x393, 0x3AC, 0x6E2, 0x808, 0x940}

STATE = {
    "speed": None, "rpm": None, "gear": None, "neutral": None, "reverse": None,
    "throttle": None, "brake": None, "brake_lights": None, "clutch": None,
    "steering": None, "yaw": None, "lat_g": None, "long_g": None,
    "oil": None, "coolant": None, "air": None, "fuel": None, "voltage": None,
    "wheel_fl": None, "wheel_fr": None, "wheel_rl": None, "wheel_rr": None,
    "tpms_fl": None, "tpms_fr": None, "tpms_rl": None, "tpms_rr": None,
    "tpms_light": None, "tpms_low": [False, False, False, False],
    "side_lights": None, "headlights": None, "high_beam": None,
    "handbrake": None, "race_mode": None,
    "lat": None, "lon": None, "course": None, "gnss_speed": None,
    "altitude": None, "sats": None, "hdop": None, "fix_quality": None,
    "fuel_rate_gph": None, "instant_mpg": None, "drive_mpg": None,
    "drive_miles": 0.0, "fuel_used_gal": None,
}
LOCK = threading.Lock()
SESSION = {
    "started": time.monotonic(), "last": time.monotonic(), "miles": 0.0,
    "flow_gallons": 0.0, "start_fuel": None, "instant_smoothed": None,
    "last_can": None, "last_gnss_line": None, "last_fix": None,
}
DIAG = {
    "recent_can": deque(maxlen=7), "frame_times": deque(), "bit_times": deque(),
    "id_times": defaultdict(deque), "top_ids": [], "bus_history": deque(maxlen=24),
    "rx_rate": 0, "bus_util": 0.0, "can_errors": 0, "last_sample": 0.0,
}
MONITOR = {"last": 0.0, "system": {}, "logger": {}}


def record_can_frame(can_id, data, now):
    """Keep only a one-second rate window and seven display frames."""
    wall = time.time()
    stamp = time.strftime("%H:%M:%S", time.localtime(wall)) + f".{int(wall % 1 * 1000):03d}"
    DIAG["recent_can"].append({
        "time": stamp, "id": f"0x{can_id:03X}",
        "data": " ".join(f"{byte:02X}" for byte in data[:8]),
    })
    DIAG["frame_times"].append(now)
    DIAG["bit_times"].append((now, 47 + len(data) * 10))
    if can_id in DECODED_CAN_IDS:
        DIAG["id_times"][can_id].append(now)
    if now - DIAG["last_sample"] < 0.25:
        return
    cutoff = now - 1.0
    while DIAG["frame_times"] and DIAG["frame_times"][0] < cutoff:
        DIAG["frame_times"].popleft()
    while DIAG["bit_times"] and DIAG["bit_times"][0][0] < cutoff:
        DIAG["bit_times"].popleft()
    for key, values in list(DIAG["id_times"].items()):
        while values and values[0] < cutoff:
            values.popleft()
        if not values:
            del DIAG["id_times"][key]
    DIAG["rx_rate"] = len(DIAG["frame_times"])
    DIAG["bus_util"] = min(100.0, sum(bits for _, bits in DIAG["bit_times"]) / CAN_BITRATE * 100)
    DIAG["top_ids"] = [
        {"id": f"0x{key:03X}", "rate": len(values)}
        for key, values in sorted(DIAG["id_times"].items(), key=lambda item: len(item[1]), reverse=True)[:5]
    ]
    DIAG["bus_history"].append(round(DIAG["bus_util"], 2))
    DIAG["last_sample"] = now


def read_number(path, divisor=1.0):
    try:
        return float(Path(path).read_text(encoding="utf-8").strip()) / divisor
    except (OSError, ValueError):
        return None


def monitoring_snapshot(now):
    if now - MONITOR["last"] < 1.0:
        return MONITOR["system"], MONITOR["logger"]
    cpu_temp = read_number("/sys/class/thermal/thermal_zone0/temp", 1000)
    cpu_load = None
    try:
        cpu_load = os.getloadavg()[0] / max(1, os.cpu_count() or 1) * 100
    except OSError:
        pass
    memory = None
    try:
        values = {}
        for line in Path("/proc/meminfo").read_text(encoding="utf-8").splitlines():
            key, value = line.split(":", 1)
            values[key] = float(value.split()[0])
        memory = (1 - values["MemAvailable"] / values["MemTotal"]) * 100
    except (OSError, ValueError, KeyError):
        pass
    uptime = None
    try:
        uptime = float(Path("/proc/uptime").read_text(encoding="utf-8").split()[0])
    except (OSError, ValueError, IndexError):
        pass
    MONITOR["system"] = {
        "cpu_temp_c": cpu_temp, "cpu_load_pct": cpu_load,
        "memory_pct": memory, "uptime_seconds": uptime,
    }

    logger = {"session": None, "recording": None, "started": None, "filename": None,
              "file_size": None, "flush": None, "fsync": None}
    try:
        sessions = sorted((p for p in SESSIONS_DIR.iterdir() if p.is_dir() and p.name.isdigit()),
                          key=lambda p: int(p.name))
        if sessions:
            latest = sessions[-1]
            logfile = latest / "raw_can.log"
            stat = logfile.stat()
            logger.update(session=latest.name, recording=time.time() - stat.st_mtime < 3,
                          started=time.strftime("%H:%M:%S", time.localtime(stat.st_ctime)),
                          filename=logfile.name, file_size=stat.st_size)
    except OSError:
        pass
    MONITOR["logger"] = logger
    MONITOR["last"] = now
    return MONITOR["system"], MONITOR["logger"]


def bits(data, start, length):
    return (int.from_bytes(data, "little") >> start) & ((1 << length) - 1)


def signed16(data, start):
    return int.from_bytes(data[start:start + 2], "little", signed=True)


def decode_can(can_id, data):
    """The known GR86 decodes recovered from the project's prior dashboard."""
    if can_id == 0x040 and len(data) >= 5:
        return {"rpm": bits(data, 16, 14), "neutral": bool(data[3] & 0x80),
                "throttle": data[4] / 2.55}
    if can_id == 0x138 and len(data) >= 6:
        return {"steering": signed16(data, 2) * -0.1,
                "yaw": signed16(data, 4) * -0.2725}
    if can_id == 0x139 and len(data) >= 6:
        return {"speed": bits(data, 16, 13) * 0.015694 * 2.23694,
                "brake_lights": bool(data[4] & 0x04),
                "brake": min(data[5] / 0.7, 100.0)}
    if can_id == 0x13A and len(data) >= 8:
        scale = 0.015694 * 2.23694
        return {"wheel_fl": bits(data, 12, 13) * scale,
                "wheel_fr": bits(data, 25, 13) * scale,
                "wheel_rl": bits(data, 38, 13) * scale,
                "wheel_rr": bits(data, 51, 13) * scale}
    if can_id == 0x13B and len(data) >= 8:
        lat_raw = data[6] - 256 if data[6] >= 128 else data[6]
        long_raw = data[7] - 256 if data[7] >= 128 else data[7]
        return {"lat_g": lat_raw * 0.2, "long_g": long_raw * -0.1}
    if can_id == 0x228 and len(data) >= 3:
        return {"reverse": bool(data[2] & 1)}
    if can_id == 0x241 and len(data) >= 6:
        return {"clutch": 100 if data[5] & 0x80 else 0, "gear": bits(data, 35, 3)}
    if can_id in (0x328, 0x808) and len(data) >= 5:
        mask = 0x02 if can_id == 0x328 else 0x40
        return {"race_mode": bool(data[4] & mask)}
    if can_id == 0x345 and len(data) >= 5:
        return {"oil": data[3] - 40, "coolant": data[4] - 40}
    if can_id == 0x390 and len(data) >= 5:
        return {"air": data[4] / 2 - 40}
    if can_id == 0x393 and len(data) >= 6:
        return {"fuel": max(0.0, min(100.0, 100 - bits(data, 32, 10) / 10.23))}
    if can_id in (0x3AC, 0x940) and len(data) >= 2:
        if can_id == 0x3AC:
            return {"side_lights": bool(data[0] & 0x80), "headlights": bool(data[0] & 0x40),
                    "high_beam": bool(data[0] & 0x20), "handbrake": bool(data[1] & 0x04)}
        return {"side_lights": bool(data[0] & 0x01), "headlights": bool(data[0] & 0x02),
                "high_beam": bool(data[0] & 0x04), "handbrake": bool(data[1] & 0x20)}
    if can_id == 0x6E2 and len(data) >= 7:
        psi = lambda value: None if value == 0xFE else value >> 1
        return {"tpms_light": bool(data[2] & 0x20),
                "tpms_low": [bool(data[i] & 1) for i in range(3, 7)],
                "tpms_fl": psi(data[3]), "tpms_fr": psi(data[4]),
                "tpms_rl": psi(data[5]), "tpms_rr": psi(data[6])}
    return {}


def nmea_coord(value, side):
    if not value or not side:
        return None
    raw = float(value)
    degrees = int(raw / 100)
    decimal = degrees + (raw - degrees * 100) / 60
    return -decimal if side in "SW" else decimal


def decode_nmea(raw):
    parts = raw.split("*", 1)[0].split(",")
    if not parts or not parts[0].startswith("$"):
        return {}, False
    try:
        if parts[0].endswith("RMC") and len(parts) >= 10:
            valid = parts[2] == "A"
            if not valid:
                return {}, False
            return {"lat": nmea_coord(parts[3], parts[4]),
                    "lon": nmea_coord(parts[5], parts[6]),
                    "gnss_speed": float(parts[7] or 0) * 1.15078,
                    "course": float(parts[8]) if parts[8] else None}, True
        if parts[0].endswith("GGA") and len(parts) >= 10:
            quality = int(parts[6] or 0)
            if quality == 0:
                return {"fix_quality": 0}, False
            return {"lat": nmea_coord(parts[2], parts[3]),
                    "lon": nmea_coord(parts[4], parts[5]),
                    "fix_quality": quality, "sats": int(parts[7] or 0),
                    "hdop": float(parts[8]) if parts[8] else None,
                    "altitude": float(parts[9]) if parts[9] else None}, True
    except (ValueError, IndexError):
        return {}, False
    return {}, False


def update_drive_metrics(now):
    dt = max(0.0, min(now - SESSION["last"], 0.5))
    SESSION["last"] = now
    speed = STATE["speed"] or STATE["gnss_speed"] or 0.0
    SESSION["miles"] += max(0.0, speed) * dt / 3600

    fuel_rate = STATE["fuel_rate_gph"]
    if fuel_rate is not None and fuel_rate >= 0:
        SESSION["flow_gallons"] += fuel_rate * dt / 3600
        fuel_used = SESSION["flow_gallons"]
        raw_instant = min(99.0, speed / fuel_rate) if speed > 1 and fuel_rate > 0 else None
        if raw_instant is not None:
            old = SESSION["instant_smoothed"]
            SESSION["instant_smoothed"] = raw_instant if old is None else old + 0.18 * (raw_instant - old)
    else:
        fuel = STATE["fuel"]
        if fuel is not None and SESSION["start_fuel"] is None:
            SESSION["start_fuel"] = fuel
        drop = max(0.0, (SESSION["start_fuel"] or fuel or 0) - (fuel or 0))
        fuel_used = drop / 100 * TANK_GALLONS if SESSION["start_fuel"] is not None else None
        SESSION["instant_smoothed"] = None

    STATE["drive_miles"] = SESSION["miles"]
    STATE["fuel_used_gal"] = fuel_used
    STATE["instant_mpg"] = SESSION["instant_smoothed"]
    STATE["drive_mpg"] = (SESSION["miles"] / fuel_used
                          if fuel_used is not None and fuel_used >= 0.01 else None)


def can_loop(interface):
    sys.path.insert(0, str(LOGGER_ROOT))
    while True:
        reader = None
        try:
            from can_reader import CanReader
            reader = CanReader(interface)
            while True:
                frame = reader.recv(timeout=1.0)
                if frame is None:
                    continue
                if frame.is_error_frame:
                    with LOCK:
                        DIAG["can_errors"] += 1
                    continue
                update = decode_can(frame.arb_id & 0x1FFFFFFF, frame.data[:frame.dlc])
                now = time.monotonic()
                with LOCK:
                    record_can_frame(frame.arb_id & 0x1FFFFFFF, frame.data[:frame.dlc], now)
                    STATE.update(update)
                    SESSION["last_can"] = now
                    update_drive_metrics(now)
        except Exception:
            with LOCK:
                DIAG["can_errors"] += 1
            time.sleep(2)
        finally:
            if reader:
                try:
                    reader.close()
                except Exception:
                    pass


def gnss_loop(port, baud):
    sys.path.insert(0, str(LOGGER_ROOT))
    while True:
        reader = None
        try:
            from gnss_reader import GnssReader
            reader = GnssReader(port=port, baudrate=baud)
            while True:
                line = reader.recv()
                if line is None:
                    continue
                update, fixed = decode_nmea(line.raw)
                now = time.monotonic()
                with LOCK:
                    STATE.update(update)
                    SESSION["last_gnss_line"] = now
                    if fixed:
                        SESSION["last_fix"] = now
        except Exception:
            time.sleep(2)
        finally:
            if reader:
                try:
                    reader.close()
                except Exception:
                    pass


def gnss_log_loop(sessions_dir):
    """Follow the logger's newest GNSS file so only 86LOG owns the serial port."""
    current_path = None
    stream = None
    while True:
        try:
            sessions = sorted(
                (path for path in sessions_dir.iterdir()
                 if path.is_dir() and path.name.isdigit()),
                key=lambda path: int(path.name),
            )
            latest_path = sessions[-1] / "gnss.log" if sessions else None
            if latest_path != current_path and latest_path and latest_path.exists():
                if stream:
                    stream.close()
                stream = latest_path.open("r", encoding="utf-8", errors="ignore")
                stream.seek(0, os.SEEK_END)
                current_path = latest_path

            line = stream.readline() if stream else ""
            if line:
                _, separator, raw = line.strip().partition(" ")
                update, fixed = decode_nmea(raw if separator else line.strip())
                now = time.monotonic()
                with LOCK:
                    STATE.update(update)
                    SESSION["last_gnss_line"] = now
                    if fixed:
                        SESSION["last_fix"] = now
            else:
                time.sleep(0.1)
        except OSError:
            if stream:
                stream.close()
            stream = None
            current_path = None
            time.sleep(1)


def demo_loop():
    started = time.monotonic()
    last_gear = 3
    frame_index = 0
    while True:
        now = time.monotonic()
        t = now - started
        phase = t % 18
        spirited = 6 < phase < 13
        braking = 13 < phase < 15
        gear = 3 if phase < 10 else 4
        if gear != last_gear:
            last_gear = gear
        speed = (0 if phase < 2 else
                 max(0, 47 + 16 * math.sin(t / 5) + (18 if spirited else 0) - (24 if braking else 0)))
        rpm = 2650 + 520 * math.sin(t * 1.1) + (2500 if spirited and gear == 3 else 1250 if spirited else 0)
        throttle = 78 + 12 * math.sin(t) if spirited else 24 + 10 * math.sin(t / 2)
        brake = 55 if braking else 0
        lat_g = (0.58 if spirited else 0.16) * math.sin(t / 2.1)
        long_g = -0.52 if braking else (0.43 if spirited else 0.04)
        fuel_rate = 3.3 if spirited else (0.22 if speed > 5 else 0.35)
        with LOCK:
            STATE.update(speed=speed, rpm=max(800, rpm), gear=gear, neutral=False, reverse=False,
                         throttle=max(0, min(100, throttle)), brake=brake,
                         brake_lights=braking, clutch=100 if 9.7 < phase < 10.1 else 0,
                         steering=34 * math.sin(t / 2.1), yaw=8 * math.sin(t / 2.1),
                         lat_g=lat_g, long_g=long_g, oil=101, coolant=91, air=26, voltage=13.8,
                         fuel=67.8, wheel_fl=speed - .2, wheel_fr=speed + .3,
                         wheel_rl=speed - .1, wheel_rr=speed + .1,
                         tpms_fl=35, tpms_fr=35, tpms_rl=34, tpms_rr=34,
                         tpms_light=False, tpms_low=[False] * 4, side_lights=True,
                         headlights=True, high_beam=phase < 4, handbrake=False,
                         race_mode=spirited, lat=35.595 + math.sin(t / 35) * .004,
                         lon=-82.551 + math.cos(t / 35) * .004,
                         course=(t * 10) % 360, gnss_speed=speed, altitude=651,
                         sats=12, hdop=.8, fix_quality=1, fuel_rate_gph=fuel_rate)
            demo_frames = (
                (0x040, bytes((frame_index & 0xFF, 0x72, int(rpm) & 0xFF, int(rpm) >> 8 & 0x3F,
                               int(max(0, min(255, throttle * 2.55))), 0, 0, 0))),
                (0x139, bytes((0x81, 0x22, int(speed) & 0xFF, int(speed * 2) & 0x1F,
                               0x04 if braking else 0, int(brake * .7), 0, 0))),
                (0x13A, bytes(((frame_index * 3) & 0xFF, 0xAE, 0, 0x39, 0x91, 0x14, 0, 0x20))),
            )
            for can_id, data in demo_frames:
                record_can_frame(can_id, data, now)
            if frame_index % 2 == 0:
                record_can_frame(0x138, bytes((0x11, 0x0B, 0x0F, 0x10, 0, 0x64, 0, 0)), now)
            if frame_index % 4 == 0:
                record_can_frame(0x345, bytes((0x32, 0, 0, 141, 131, 0, 0, 0)), now)
            frame_index += 1
            SESSION["last_can"] = now
            SESSION["last_gnss_line"] = now
            SESSION["last_fix"] = now
            update_drive_metrics(now)
        time.sleep(0.05)


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.split("?", 1)[0] == "/state":
            now = time.monotonic()
            with LOCK:
                system, logger = monitoring_snapshot(now)
                payload = dict(STATE)
                payload.update(
                    can_connected=SESSION["last_can"] is not None and now - SESSION["last_can"] < 2,
                    gnss_connected=SESSION["last_gnss_line"] is not None and now - SESSION["last_gnss_line"] < 3,
                    gnss_fix=SESSION["last_fix"] is not None and now - SESSION["last_fix"] < 3,
                    drive_seconds=now - SESSION["started"],
                    recent_can=list(DIAG["recent_can"]), top_can_ids=list(DIAG["top_ids"]),
                    can_rx_rate=DIAG["rx_rate"], can_errors=DIAG["can_errors"],
                    bus_utilization=DIAG["bus_util"], bus_history=list(DIAG["bus_history"]),
                    system=system, logger=logger,
                )
            body, kind = json.dumps(payload, separators=(",", ":")).encode(), "application/json"
        else:
            body, kind = (ROOT / "index.html").read_bytes(), "text/html; charset=utf-8"
        self.send_response(200)
        self.send_header("Content-Type", kind)
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *_):
        pass


def main():
    parser = argparse.ArgumentParser(description="Live 1280x400 GR86 telemetry dashboard")
    parser.add_argument("--interface", default=os.environ.get("GR86_CAN_INTERFACE", "can0"))
    parser.add_argument("--gnss-port")
    parser.add_argument("--gnss-baud", type=int, default=9600)
    parser.add_argument("--gnss-log-dir", type=Path,
                        help="follow 86LOG GNSS output instead of opening the serial port")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8086)
    parser.add_argument("--demo", action="store_true", help="exercise the real UI state path without hardware")
    args = parser.parse_args()
    if args.demo:
        threading.Thread(target=demo_loop, daemon=True).start()
    else:
        threading.Thread(target=can_loop, args=(args.interface,), daemon=True).start()
        gnss_target = gnss_log_loop if args.gnss_log_dir else gnss_loop
        gnss_args = ((args.gnss_log_dir,) if args.gnss_log_dir
                     else (args.gnss_port, args.gnss_baud))
        threading.Thread(target=gnss_target, args=gnss_args, daemon=True).start()
    print(f"86DASH -> http://{args.host}:{args.port} (1280x400)")
    ThreadingHTTPServer((args.host, args.port), Handler).serve_forever()


if __name__ == "__main__":
    main()
