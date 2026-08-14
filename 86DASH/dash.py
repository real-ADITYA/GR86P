#!/usr/bin/env python3
"""Tiny live GR86 dash: SocketCAN + GNSS + one local web page."""

import argparse
import glob
import json
import math
import socket
import struct
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


STATE = {
    "speed": 0, "rpm": 0, "gear": 0, "neutral": True, "reverse": False,
    "throttle": 0, "brake": 0, "brake_lights": False, "clutch": 0,
    "steering": 0, "yaw": 0, "lat_g": 0, "long_g": 0, "g": 0,
    "oil": 0, "coolant": 0, "air": 0, "fuel": 0,
    "wheel_fl": 0, "wheel_fr": 0, "wheel_rl": 0, "wheel_rr": 0,
    "tpms_fl": None, "tpms_fr": None, "tpms_rl": None, "tpms_rr": None,
    "tpms_light": False, "tpms_low": [False] * 4,
    "side_lights": False, "headlights": False, "high_beam": False,
    "handbrake": False, "race_mode": False,
    "lat": None, "lon": None, "course": 0, "altitude": None, "sats": 0,
    "instant_mpg": 0, "drive_mpg": 0, "connected": False,
}
LOCK = threading.Lock()
MPG = {"last": time.monotonic(), "miles": 0.0, "gallons": 0.0}
ROOT = Path(__file__).parent


def bits(data, start, length):
    return (int.from_bytes(data, "little") >> start) & ((1 << length) - 1)


def signed16(data, start):
    return int.from_bytes(data[start:start + 2], "little", signed=True)


def decode(can_id, d):
    """Only the known GR86 frames; values use the names sent to the page."""
    if can_id == 0x40:
        return {"rpm": bits(d, 16, 14), "neutral": bool(d[3] & 0x80), "throttle": d[4] / 2.55}
    if can_id == 0x138:
        return {"steering": signed16(d, 2) * -0.1, "yaw": signed16(d, 4) * -0.2725}
    if can_id == 0x139:
        return {"speed": bits(d, 16, 13) * 0.015694 * 2.23694,
                "brake_lights": bool(d[4] & 0x04), "brake": min(d[5] / 0.7, 100)}
    if can_id == 0x13A:
        scale = 0.015694 * 2.23694
        return {"wheel_fl": bits(d, 12, 13) * scale, "wheel_fr": bits(d, 25, 13) * scale,
                "wheel_rl": bits(d, 38, 13) * scale, "wheel_rr": bits(d, 51, 13) * scale}
    if can_id == 0x13B:
        lat, lon = struct.unpack("bb", d[6:8])
        lat, lon = lat * .2, lon * -.1
        return {"lat_g": lat, "long_g": lon, "g": math.hypot(lat, lon)}
    if can_id == 0x228:
        return {"reverse": bool(d[2] & 1)}
    if can_id == 0x241:
        return {"clutch": 100 if d[5] & 0x80 else 0, "gear": bits(d, 35, 3)}
    if can_id == 0x328:
        return {"race_mode": bool(d[4] & 0x02)}
    if can_id == 0x345:
        return {"oil": d[3] - 40, "coolant": d[4] - 40}
    if can_id == 0x390:
        return {"air": d[4] / 2 - 40}
    if can_id == 0x393:
        return {"fuel": 100 - bits(d, 32, 10) / 10.23}
    if can_id == 0x3AC:
        return {"side_lights": bool(d[0] & 0x80), "headlights": bool(d[0] & 0x40),
                "high_beam": bool(d[0] & 0x20), "handbrake": bool(d[1] & 0x04)}
    if can_id == 0x6E2:
        psi = lambda value: None if value == 0xFE else value >> 1
        return {"tpms_light": bool(d[2] & 0x20), "tpms_low": [bool(d[i] & 1) for i in range(3, 7)],
                "tpms_fl": psi(d[3]), "tpms_fr": psi(d[4]),
                "tpms_rl": psi(d[5]), "tpms_rr": psi(d[6])}
    return {}


def update_mpg(now):
    dt = min(now - MPG["last"], .25)
    MPG["last"] = now
    rpm, throttle, speed = STATE["rpm"], STATE["throttle"], STATE["speed"]
    # A deliberately simple estimate until a fuel-flow/MAF CAN signal is decoded.
    gph = 0 if rpm < 100 else .12 + rpm / 1000 * (.22 + throttle / 100 * 1.75)
    instant = min(60, speed / gph) if speed > 1 and gph else 0
    MPG["miles"] += speed * dt / 3600
    MPG["gallons"] += gph * dt / 3600
    STATE["instant_mpg"] = instant
    STATE["drive_mpg"] = MPG["miles"] / MPG["gallons"] if MPG["gallons"] else 0


def can_loop(interface):
    bus = socket.socket(socket.AF_CAN, socket.SOCK_RAW, socket.CAN_RAW)
    bus.bind((interface,))
    while True:
        frame = bus.recv(16)
        can_id, dlc, data = struct.unpack("=IB3x8s", frame)
        update = decode(can_id & 0x1FFFFFFF, data[:dlc])
        with LOCK:
            STATE.update(update)
            STATE["connected"] = True
            update_mpg(time.monotonic())


def nmea_coord(value, side):
    degrees = int(float(value) / 100)
    result = degrees + (float(value) - degrees * 100) / 60
    return -result if side in "SW" else result


def gnss_loop(port, baud):
    import serial
    port = port or next(iter(sorted(glob.glob("/dev/ttyACM*") + glob.glob("/dev/ttyUSB*"))), None)
    if not port:
        return
    with serial.Serial(port, baudrate=baud, timeout=1) as device:
        while True:
            line = device.readline().decode("ascii", "ignore").strip().split(",")
            update = {}
            if line[0].endswith("RMC") and len(line) > 8 and line[2] == "A":
                update = {"lat": nmea_coord(line[3], line[4]), "lon": nmea_coord(line[5], line[6]),
                          "course": float(line[8] or 0)}
            elif line[0].endswith("GGA") and len(line) > 9 and line[6] != "0":
                update = {"lat": nmea_coord(line[2], line[3]), "lon": nmea_coord(line[4], line[5]),
                          "sats": int(line[7] or 0), "altitude": float(line[9] or 0)}
            if update:
                with LOCK:
                    STATE.update(update)


def demo_loop():
    started = time.monotonic()
    while True:
        t = time.monotonic() - started
        push = (t % 14) > 8
        speed = 46 + 12 * math.sin(t / 4) + (18 if push else 0)
        throttle = 28 + 12 * math.sin(t * .7) + (48 if push else 0)
        rpm = 2750 + 500 * math.sin(t * 1.4) + (2200 if push else 0)
        brake = 38 if 5.7 < t % 14 < 6.7 else 0
        with LOCK:
            STATE.update(speed=max(0, speed - brake / 4), rpm=max(800, rpm), throttle=min(100, throttle),
                         brake=brake, brake_lights=brake > 0, gear=4 if push else 5, neutral=False,
                         steering=14 * math.sin(t / 2), yaw=4 * math.sin(t / 2),
                         lat_g=.52 * math.sin(t / 2) if push else .12 * math.sin(t / 2),
                         long_g=.46 if push else (-.38 if brake else .04),
                         oil=101, coolant=91, air=24, fuel=68,
                         wheel_fl=speed, wheel_fr=speed + .2, wheel_rl=speed - .2, wheel_rr=speed,
                         tpms_fl=35, tpms_fr=35, tpms_rl=34, tpms_rr=34,
                         headlights=True, race_mode=push, connected=True,
                         lat=35.595 + math.sin(t / 40) * .002, lon=-82.551 + math.cos(t / 40) * .002,
                         course=(t * 8) % 360, altitude=651, sats=12)
            STATE["g"] = math.hypot(STATE["lat_g"], STATE["long_g"])
            update_mpg(time.monotonic())
        time.sleep(.05)


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/state":
            with LOCK:
                body = json.dumps(STATE).encode()
            kind = "application/json"
        else:
            body = (ROOT / "index.html").read_bytes()
            kind = "text/html; charset=utf-8"
        self.send_response(200)
        self.send_header("Content-Type", kind)
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *_):
        pass


def main():
    parser = argparse.ArgumentParser(description="Live GR86 dashboard")
    parser.add_argument("--interface", default="can0")
    parser.add_argument("--gnss-port")
    parser.add_argument("--gnss-baud", type=int, default=9600)
    parser.add_argument("--port", type=int, default=8086)
    parser.add_argument("--demo", action="store_true")
    args = parser.parse_args()
    if args.demo:
        threading.Thread(target=demo_loop, daemon=True).start()
    else:
        threading.Thread(target=can_loop, args=(args.interface,), daemon=True).start()
        threading.Thread(target=gnss_loop, args=(args.gnss_port, args.gnss_baud), daemon=True).start()
    print(f"86DASH → http://127.0.0.1:{args.port}")
    ThreadingHTTPServer(("0.0.0.0", args.port), Handler).serve_forever()


if __name__ == "__main__":
    main()
