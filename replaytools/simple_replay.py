#!/usr/bin/env python3
"""
Replay GUI for raw GR86 CAN log files.

Reads raw_can.log directly.

Expected raw_can.log format:
    timestamp CAN_ID DLC B0 B1 B2 B3 B4 B5 B6 B7

Example:
    1776194039.216195 139 8 78 55 00 E0 08 00 E5 1C

Features:
- Play / Pause
- -5 sec / +5 sec scrub buttons
- Slider scrub
- Adjustable playback speed
- Compact default-style dashboard for core signals

Usage:
    python3 replay_raw_can.py raw_can.log
"""

from __future__ import annotations

import argparse
from bisect import bisect_right
from pathlib import Path
from typing import Dict, List, Optional, Tuple
import tkinter as tk
from tkinter import filedialog, messagebox, ttk


MPS_TO_MPH = 2.23694


DISPLAY_FIELDS = [
    ("vehicle_speed_mph", "Speed"),
    ("engine_speed_rpm", "RPM"),
    ("current_gear", "Gear"),
    ("neutral_gear", "Neutral"),
    ("reverse_gear", "Reverse"),
    ("accelerator_pedal_position_pct", "Throttle"),
    ("brake_position_pct", "Brake"),
    ("brake_lights_switch", "Brake Light"),
    ("clutch_position_pct", "Clutch"),
    ("steering_angle_deg", "Steering"),
    ("yaw_rate_deg_s", "Yaw"),
    ("wheel_speed_fl_mph", "Wheel FL"),
    ("wheel_speed_fr_mph", "Wheel FR"),
    ("wheel_speed_rl_mph", "Wheel RL"),
    ("wheel_speed_rr_mph", "Wheel RR"),
    ("engine_oil_temp_c", "Oil Temp"),
    ("coolant_temp_c", "Coolant"),
    ("air_temp_c", "Air Temp"),
    ("fuel_level_pct", "Fuel"),
    ("race_mode", "Race Mode"),
    ("handbrake", "Handbrake"),
    ("side_lights", "Side Lights"),
    ("headlights", "Headlights"),
    ("full_beam", "Full Beam"),
]


def bits_to_uint_le(raw: bytes, start_bit: int, length: int) -> int:
    value = 0

    for i in range(length):
        bit_index = start_bit + i
        byte_index = bit_index // 8
        bit_in_byte = bit_index % 8

        if byte_index >= len(raw):
            break

        if raw[byte_index] & (1 << bit_in_byte):
            value |= 1 << i

    return value


def bytes_to_int_le(raw: bytes, start_byte: int, length: int) -> int:
    if start_byte + length > len(raw):
        return 0

    return int.from_bytes(
        raw[start_byte:start_byte + length],
        byteorder="little",
        signed=True,
    )


def decode_frame(can_id: int, raw: bytes) -> Dict[str, object]:
    update: Dict[str, object] = {}

    if can_id == 0x040 and len(raw) >= 8:
        update["engine_speed_rpm"] = bits_to_uint_le(raw, 16, 14)
        update["neutral_gear"] = bool(raw[3] & 0x80)
        update["accelerator_pedal_position_pct"] = raw[4] / 2.55

    elif can_id == 0x138 and len(raw) >= 8:
        update["steering_angle_deg"] = bytes_to_int_le(raw, 2, 2) * -0.1
        update["yaw_rate_deg_s"] = bytes_to_int_le(raw, 4, 2) * -0.2725

    elif can_id == 0x139 and len(raw) >= 8:
        speed_mps = bits_to_uint_le(raw, 16, 13) * 0.015694
        update["vehicle_speed_mph"] = speed_mps * MPS_TO_MPH

        update["brake_lights_switch"] = bool(raw[4] & 0x04)
        update["brake_position_pct"] = min(raw[5] / 0.7, 100.0)

    elif can_id == 0x13A and len(raw) >= 8:
        update["wheel_speed_fl_mph"] = bits_to_uint_le(raw, 12, 13) * 0.015694 * MPS_TO_MPH
        update["wheel_speed_fr_mph"] = bits_to_uint_le(raw, 25, 13) * 0.015694 * MPS_TO_MPH
        update["wheel_speed_rl_mph"] = bits_to_uint_le(raw, 38, 13) * 0.015694 * MPS_TO_MPH
        update["wheel_speed_rr_mph"] = bits_to_uint_le(raw, 51, 13) * 0.015694 * MPS_TO_MPH

    elif can_id == 0x228 and len(raw) >= 3:
        update["reverse_gear"] = bool(raw[2] & 0x01)

    elif can_id == 0x241 and len(raw) >= 8:
        update["clutch_position_pct"] = (raw[5] & 0x80) / 1.28
        update["current_gear"] = bits_to_uint_le(raw, 35, 3)

    elif can_id == 0x345 and len(raw) >= 5:
        update["engine_oil_temp_c"] = raw[3] - 40
        update["coolant_temp_c"] = raw[4] - 40

    elif can_id == 0x390 and len(raw) >= 5:
        update["air_temp_c"] = raw[4] / 2 - 40

    elif can_id == 0x393 and len(raw) >= 6:
        update["fuel_level_pct"] = 100 - (bits_to_uint_le(raw, 32, 10) / 10.23)

    elif can_id == 0x808 and len(raw) >= 5:
        update["race_mode"] = bool(raw[4] & 0x40)

    elif can_id == 0x940 and len(raw) >= 2:
        update["side_lights"] = bool(raw[0] & 0x01)
        update["headlights"] = bool(raw[0] & 0x02)
        update["full_beam"] = bool(raw[0] & 0x04)
        update["handbrake"] = bool(raw[1] & 0x20)

    return update


def parse_raw_can_line(line: str):
    parts = line.strip().split()

    if len(parts) < 4:
        return None

    try:
        timestamp = float(parts[0])
        can_id = int(parts[1], 16)
        dlc = int(parts[2])
        data = bytes(int(x, 16) for x in parts[3:3 + dlc])
    except ValueError:
        return None

    if len(data) != dlc:
        return None

    return timestamp, can_id, dlc, data


def load_events(raw_can_path: Path):
    events: List[Tuple[float, Dict[str, object]]] = []

    with raw_can_path.open("r", encoding="utf-8", errors="ignore") as handle:
        for line in handle:
            parsed = parse_raw_can_line(line)
            if parsed is None:
                continue

            timestamp, can_id, _dlc, data = parsed
            update = decode_frame(can_id, data)

            if update:
                events.append((timestamp, update))

    if not events:
        raise ValueError("No decodable CAN events found in raw_can.log.")

    events.sort(key=lambda x: x[0])

    timestamps = [ts for ts, _ in events]
    start_time = timestamps[0]
    end_time = timestamps[-1]

    return events, timestamps, start_time, end_time


class ReplayApp:
    def __init__(self, root: tk.Tk, raw_can_path: Path):
        self.root = root
        self.raw_can_path = raw_can_path

        self.events, self.timestamps, self.start_time, self.end_time = load_events(raw_can_path)
        self.duration = self.end_time - self.start_time

        self.current_time = self.start_time
        self.playing = False
        self.speed = 1.0
        self.last_tick_wall = None
        self.slider_dragging = False

        self.cached_state: Dict[str, object] = {}
        self.cached_index = 0
        self.cached_time = self.start_time

        self.root.title(f"GR86 Raw CAN Replay - {raw_can_path.name}")
        self.root.geometry("980x700")
        self.root.minsize(900, 620)

        self.state_labels: Dict[str, tk.StringVar] = {}

        self.status_var = tk.StringVar()
        self.time_var = tk.StringVar()
        self.speed_var = tk.StringVar(value="1.0x")

        self.speed_value = tk.DoubleVar(value=0.0)
        self.rpm_value = tk.DoubleVar(value=0.0)
        self.throttle_value = tk.DoubleVar(value=0.0)
        self.brake_value = tk.DoubleVar(value=0.0)
        self.steering_value = tk.DoubleVar(value=0.0)

        self.speed_text = tk.StringVar(value="0.0 mph")
        self.rpm_text = tk.StringVar(value="0 rpm")
        self.throttle_text = tk.StringVar(value="0.0%")
        self.brake_text = tk.StringVar(value="0.0%")
        self.steering_text = tk.StringVar(value="0.0 deg")

        self._build_ui()
        self._refresh_all()
        self._tick()

    def _build_ui(self):
        top = ttk.Frame(self.root, padding=(8, 6, 8, 2))
        top.pack(fill="x")

        ttk.Label(top, text=self.raw_can_path.name).pack(anchor="w")
        ttk.Label(top, textvariable=self.status_var).pack(anchor="w", pady=(2, 0))
        ttk.Label(top, textvariable=self.time_var).pack(anchor="w", pady=(1, 4))

        controls = ttk.Frame(self.root, padding=(8, 0, 8, 4))
        controls.pack(fill="x")

        ttk.Button(controls, text="Open", command=self.open_new_file).pack(side="left")
        ttk.Button(controls, text="-5s", command=lambda: self.scrub(-5)).pack(side="left", padx=(8, 0))
        ttk.Button(controls, text="Play", command=self.play).pack(side="left", padx=(8, 0))
        ttk.Button(controls, text="Pause", command=self.pause).pack(side="left", padx=(4, 0))
        ttk.Button(controls, text="+5s", command=lambda: self.scrub(5)).pack(side="left", padx=(8, 0))

        ttk.Label(controls, text="Speed:").pack(side="left", padx=(16, 4))

        speed_box = ttk.Combobox(
            controls,
            values=["0.25x", "0.5x", "1.0x", "1.5x", "2.0x", "4.0x"],
            textvariable=self.speed_var,
            width=7,
            state="readonly",
        )
        speed_box.pack(side="left")
        speed_box.bind("<<ComboboxSelected>>", self.change_speed)

        self.scale = ttk.Scale(
            self.root,
            from_=0.0,
            to=max(self.duration, 0.001),
            orient="horizontal",
            command=self.on_slider_move,
        )
        self.scale.pack(fill="x", padx=8, pady=(0, 4))
        self.scale.bind("<ButtonPress-1>", self.on_slider_press)
        self.scale.bind("<ButtonRelease-1>", self.on_slider_release)

        main = ttk.Frame(self.root, padding=(8, 4, 8, 8))
        main.pack(fill="both", expand=True)

        left = ttk.LabelFrame(main, text="Drive State", padding=(8, 6))
        left.pack(side="left", fill="both", expand=True)

        right = ttk.LabelFrame(main, text="Quick Gauges", padding=(8, 6))
        right.pack(side="left", fill="both", expand=True, padx=(8, 0))

        self._build_compact_state_grid(left)
        self._build_default_gauges(right)

    def _build_compact_state_grid(self, parent):
        for col in range(4):
            parent.columnconfigure(col, weight=1)

        for i, (field, label) in enumerate(DISPLAY_FIELDS):
            row = i // 2
            col = (i % 2) * 2

            ttk.Label(
                parent,
                text=label,
                width=12,
            ).grid(row=row, column=col, sticky="w", padx=(0, 3), pady=1)

            var = tk.StringVar(value="—")
            self.state_labels[field] = var

            ttk.Label(
                parent,
                textvariable=var,
                width=10,
            ).grid(row=row, column=col + 1, sticky="w", padx=(0, 8), pady=1)

    def _build_default_gauges(self, parent):
        self._make_progress_row(parent, "Speed", self.speed_value, self.speed_text, 140)
        self._make_progress_row(parent, "RPM", self.rpm_value, self.rpm_text, 8000)
        self._make_progress_row(parent, "Throttle", self.throttle_value, self.throttle_text, 100)
        self._make_progress_row(parent, "Brake", self.brake_value, self.brake_text, 100)
        self._make_progress_row(parent, "Steering", self.steering_value, self.steering_text, 540)

    def _make_progress_row(self, parent, label, variable, text_variable, maximum):
        row = ttk.Frame(parent)
        row.pack(fill="x", pady=5)

        ttk.Label(row, text=label, width=10).pack(side="left")

        bar = ttk.Progressbar(
            row,
            variable=variable,
            maximum=maximum,
            orient="horizontal",
            mode="determinate",
        )
        bar.pack(side="left", fill="x", expand=True, padx=6)

        ttk.Label(row, textvariable=text_variable, width=12).pack(side="left")

    def open_new_file(self):
        selected = filedialog.askopenfilename(
            title="Open raw_can.log",
            filetypes=[
                ("CAN log files", "*.log"),
                ("Text files", "*.txt"),
                ("All files", "*.*"),
            ],
        )

        if not selected:
            return

        self.root.destroy()

        new_root = tk.Tk()
        ReplayApp(new_root, Path(selected))
        new_root.mainloop()

    def change_speed(self, _event=None):
        text = self.speed_var.get().strip().lower().replace("x", "")

        try:
            self.speed = float(text)
        except ValueError:
            self.speed = 1.0
            self.speed_var.set("1.0x")

    def play(self):
        self.playing = True
        self.last_tick_wall = None

    def pause(self):
        self.playing = False
        self.last_tick_wall = None

    def scrub(self, seconds: float):
        self.current_time = min(max(self.start_time, self.current_time + seconds), self.end_time)
        self._refresh_all()

    def on_slider_press(self, _event):
        self.slider_dragging = True

    def on_slider_release(self, _event):
        self.slider_dragging = False
        self.current_time = self.start_time + float(self.scale.get())
        self._refresh_all()

    def on_slider_move(self, value):
        if self.slider_dragging:
            self.current_time = self.start_time + float(value)
            self._refresh_all(update_slider=False)

    def _tick(self):
        delay_ms = 50

        if self.playing:
            import time

            real_now = time.time()

            if self.last_tick_wall is None:
                self.last_tick_wall = real_now

            dt = real_now - self.last_tick_wall
            self.last_tick_wall = real_now

            self.current_time += dt * self.speed

            if self.current_time >= self.end_time:
                self.current_time = self.end_time
                self.playing = False

            self._refresh_all()

        self.root.after(delay_ms, self._tick)

    def _get_state_at_time(self, target_time: float) -> Dict[str, object]:
        idx = bisect_right(self.timestamps, target_time)

        if target_time < self.cached_time or idx < self.cached_index:
            self.cached_state = {}
            self.cached_index = 0

        for i in range(self.cached_index, idx):
            self.cached_state.update(self.events[i][1])

        self.cached_index = idx
        self.cached_time = target_time

        return dict(self.cached_state)

    def _format_value(self, value):
        if value is None:
            return "—"

        if isinstance(value, bool):
            return "ON" if value else "OFF"

        if isinstance(value, float):
            return f"{value:.2f}"

        return str(value)

    def _refresh_all(self, update_slider: bool = True):
        state = self._get_state_at_time(self.current_time)

        elapsed = self.current_time - self.start_time
        progress = (elapsed / self.duration * 100.0) if self.duration else 100.0

        self.status_var.set(
            f"Duration: {self.duration:.2f}s | "
            f"Elapsed: {elapsed:.2f}s | "
            f"Progress: {progress:.2f}%"
        )

        self.time_var.set(
            f"Session time: {self.current_time:.3f}    "
            f"Offset: +{elapsed:.3f}s"
        )

        if update_slider and not self.slider_dragging:
            self.scale.set(elapsed)

        for field, _label in DISPLAY_FIELDS:
            self.state_labels[field].set(self._format_value(state.get(field)))

        speed = float(state.get("vehicle_speed_mph", 0.0) or 0.0)
        rpm = float(state.get("engine_speed_rpm", 0.0) or 0.0)
        throttle = float(state.get("accelerator_pedal_position_pct", 0.0) or 0.0)
        brake = float(state.get("brake_position_pct", 0.0) or 0.0)
        steering = float(state.get("steering_angle_deg", 0.0) or 0.0)

        self.speed_value.set(speed)
        self.rpm_value.set(rpm)
        self.throttle_value.set(throttle)
        self.brake_value.set(brake)
        self.steering_value.set(abs(steering))

        self.speed_text.set(f"{speed:.1f} mph")
        self.rpm_text.set(f"{rpm:.0f} rpm")
        self.throttle_text.set(f"{throttle:.1f}%")
        self.brake_text.set(f"{brake:.1f}%")
        self.steering_text.set(f"{steering:.1f} deg")


def main():
    parser = argparse.ArgumentParser(description="Replay a raw GR86 CAN log in a simple GUI.")
    parser.add_argument("raw_can_file", nargs="?", help="Path to raw_can.log")

    args = parser.parse_args()

    raw_can_path: Optional[Path]

    if args.raw_can_file:
        raw_can_path = Path(args.raw_can_file)
    else:
        raw_can_path = None

    root = tk.Tk()

    if raw_can_path is None:
        selected = filedialog.askopenfilename(
            title="Open raw_can.log",
            filetypes=[
                ("CAN log files", "*.log"),
                ("Text files", "*.txt"),
                ("All files", "*.*"),
            ],
        )

        if not selected:
            root.destroy()
            return

        raw_can_path = Path(selected)

    try:
        ReplayApp(root, raw_can_path)
    except Exception as exc:
        messagebox.showerror("Replay Error", str(exc))
        root.destroy()
        raise

    root.mainloop()


if __name__ == "__main__":
    main()