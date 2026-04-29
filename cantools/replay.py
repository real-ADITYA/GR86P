
#!/usr/bin/env python3
"""
Replay GUI for decoded GR86 CAN CSV files.

Reads the event-style CSV produced by decode_can.py and replays the session by
tracking the latest known value for each signal over time.

Features:
- Play / Pause
- -5 sec / +5 sec scrub buttons
- Slider scrub
- Adjustable playback speed
- Simple live dashboard for core signals

Usage:
    python3 replay_session.py decoded_can.csv
"""

from __future__ import annotations

import argparse
import csv
import math
from bisect import bisect_right
from pathlib import Path
from typing import Dict, List, Optional, Tuple
import tkinter as tk
from tkinter import filedialog, messagebox, ttk


DISPLAY_FIELDS = [
    ("vehicle_speed_mph", "Speed (mph)"),
    ("engine_speed_rpm", "Engine RPM"),
    ("current_gear", "Gear"),
    ("neutral_gear", "Neutral"),
    ("reverse_gear", "Reverse"),
    ("accelerator_pedal_position_pct", "Throttle (%)"),
    ("brake_position_pct", "Brake (%)"),
    ("brake_lights_switch", "Brake Lights"),
    ("clutch_position_pct", "Clutch (%)"),
    ("steering_angle_deg", "Steering (deg)"),
    ("yaw_rate_deg_s", "Yaw Rate"),
    ("wheel_speed_fl_mph", "Wheel FL"),
    ("wheel_speed_fr_mph", "Wheel FR"),
    ("wheel_speed_rl_mph", "Wheel RL"),
    ("wheel_speed_rr_mph", "Wheel RR"),
    ("engine_oil_temp_c", "Oil Temp (C)"),
    ("coolant_temp_c", "Coolant Temp (C)"),
    ("air_temp_c", "Air Temp (C)"),
    ("fuel_level_pct", "Fuel Level (%)"),
    ("race_mode", "Race Mode"),
    ("handbrake", "Handbrake"),
    ("side_lights", "Side Lights"),
    ("headlights", "Headlights"),
    ("full_beam", "Full Beam"),
]


def parse_value(value: str):
    if value is None:
        return None
    value = value.strip()
    if value == "":
        return None
    lower = value.lower()
    if lower == "true":
        return True
    if lower == "false":
        return False
    try:
        if any(ch in value for ch in (".", "e", "E")):
            return float(value)
        return int(value)
    except ValueError:
        return value


def load_events(csv_path: Path):
    events: List[Tuple[float, Dict[str, object]]] = []
    with csv_path.open("r", newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        for row in reader:
            ts_raw = row.get("timestamp")
            if not ts_raw:
                continue
            try:
                timestamp = float(ts_raw)
            except ValueError:
                continue

            update: Dict[str, object] = {}
            for key, value in row.items():
                if key in ("timestamp", "can_id_hex", "can_id_dec", "dlc", "raw_hex"):
                    continue
                parsed = parse_value(value)
                if parsed is not None:
                    update[key] = parsed

            if update:
                events.append((timestamp, update))

    if not events:
        raise ValueError("No decoded events found in CSV.")

    timestamps = [ts for ts, _ in events]
    start_time = timestamps[0]
    end_time = timestamps[-1]
    return events, timestamps, start_time, end_time


class ReplayApp:
    def __init__(self, root: tk.Tk, csv_path: Path):
        self.root = root
        self.csv_path = csv_path

        self.events, self.timestamps, self.start_time, self.end_time = load_events(csv_path)
        self.duration = self.end_time - self.start_time

        self.current_time = self.start_time
        self.playing = False
        self.speed = 1.0
        self.last_tick_wall = None
        self.slider_dragging = False

        self.root.title(f"GR86 Replay - {csv_path.name}")
        self.root.geometry("980x700")

        self.state_labels: Dict[str, tk.StringVar] = {}
        self.status_var = tk.StringVar()
        self.time_var = tk.StringVar()
        self.speed_var = tk.StringVar(value="1.0x")

        self._build_ui()
        self._refresh_all()
        self._tick()

    def _build_ui(self):
        top = ttk.Frame(self.root, padding=10)
        top.pack(fill="x")

        ttk.Label(top, text=self.csv_path.name, font=("Segoe UI", 13, "bold")).pack(anchor="w")
        ttk.Label(top, textvariable=self.status_var).pack(anchor="w", pady=(4, 0))
        ttk.Label(top, textvariable=self.time_var, font=("Consolas", 12)).pack(anchor="w", pady=(2, 8))

        controls = ttk.Frame(self.root, padding=(10, 0, 10, 10))
        controls.pack(fill="x")

        ttk.Button(controls, text="Open CSV", command=self.open_new_file).pack(side="left")
        ttk.Button(controls, text="-5 sec", command=lambda: self.scrub(-5)).pack(side="left", padx=(10, 0))
        ttk.Button(controls, text="Play", command=self.play).pack(side="left", padx=(10, 0))
        ttk.Button(controls, text="Pause", command=self.pause).pack(side="left", padx=(5, 0))
        ttk.Button(controls, text="+5 sec", command=lambda: self.scrub(5)).pack(side="left", padx=(10, 0))

        ttk.Label(controls, text="Speed:").pack(side="left", padx=(18, 4))
        speed_box = ttk.Combobox(
            controls,
            values=["0.25x", "0.5x", "1.0x", "1.5x", "2.0x", "4.0x"],
            textvariable=self.speed_var,
            width=8,
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
        self.scale.pack(fill="x", padx=10)
        self.scale.bind("<ButtonPress-1>", self.on_slider_press)
        self.scale.bind("<ButtonRelease-1>", self.on_slider_release)

        main = ttk.Frame(self.root, padding=10)
        main.pack(fill="both", expand=True)

        left = ttk.LabelFrame(main, text="Drive State", padding=10)
        left.pack(side="left", fill="both", expand=True)

        right = ttk.LabelFrame(main, text="Quick Gauges", padding=10)
        right.pack(side="left", fill="both", expand=True, padx=(10, 0))

        for idx, (field, label) in enumerate(DISPLAY_FIELDS):
            row = ttk.Frame(left)
            row.pack(fill="x", pady=2)
            ttk.Label(row, text=label, width=18).pack(side="left")
            var = tk.StringVar(value="—")
            self.state_labels[field] = var
            ttk.Label(row, textvariable=var, font=("Consolas", 11)).pack(side="left")

        self.speed_canvas = tk.Canvas(right, width=320, height=90, bg="white", highlightthickness=1, highlightbackground="#cccccc")
        self.speed_canvas.pack(fill="x", pady=(0, 12))
        self.rpm_canvas = tk.Canvas(right, width=320, height=90, bg="white", highlightthickness=1, highlightbackground="#cccccc")
        self.rpm_canvas.pack(fill="x", pady=(0, 12))
        self.throttle_canvas = tk.Canvas(right, width=320, height=90, bg="white", highlightthickness=1, highlightbackground="#cccccc")
        self.throttle_canvas.pack(fill="x", pady=(0, 12))
        self.brake_canvas = tk.Canvas(right, width=320, height=90, bg="white", highlightthickness=1, highlightbackground="#cccccc")
        self.brake_canvas.pack(fill="x", pady=(0, 12))
        self.steering_canvas = tk.Canvas(right, width=320, height=120, bg="white", highlightthickness=1, highlightbackground="#cccccc")
        self.steering_canvas.pack(fill="x")

    def open_new_file(self):
        selected = filedialog.askopenfilename(
            title="Open decoded CAN CSV",
            filetypes=[("CSV files", "*.csv"), ("All files", "*.*")]
        )
        if not selected:
            return
        self.root.destroy()
        new_root = tk.Tk()
        app = ReplayApp(new_root, Path(selected))
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
        now_ms = 50
        if self.playing:
            wall_now = self.root.tk.call("after", "info")
            # fallback actual wall delta using monotonic-like Tk loop timing:
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
        self.root.after(now_ms, self._tick)

    def _get_state_at_time(self, target_time: float) -> Dict[str, object]:
        idx = bisect_right(self.timestamps, target_time)
        state: Dict[str, object] = {}
        for i in range(idx):
            state.update(self.events[i][1])
        return state

    def _format_value(self, value):
        if value is None:
            return "—"
        if isinstance(value, bool):
            return "ON" if value else "OFF"
        if isinstance(value, float):
            return f"{value:.2f}"
        return str(value)

    def _set_gauge(self, canvas: tk.Canvas, label: str, value: float, max_value: float, suffix: str = ""):
        canvas.delete("all")
        w = int(canvas.winfo_width() or 320)
        h = int(canvas.winfo_height() or 90)
        pad = 14
        frac = 0.0 if max_value <= 0 else max(0.0, min(1.0, value / max_value))

        canvas.create_text(pad, 16, anchor="w", text=label, font=("Segoe UI", 10, "bold"))
        canvas.create_rectangle(pad, 35, w - pad, 65, outline="#888")
        canvas.create_rectangle(pad, 35, pad + (w - 2 * pad) * frac, 65, outline="", fill="#4a90e2")
        canvas.create_text(w - pad, 16, anchor="e", text=f"{value:.1f}{suffix}", font=("Consolas", 10))

    def _set_center_bar(self, canvas: tk.Canvas, label: str, value: float, min_value: float, max_value: float, suffix: str = ""):
        canvas.delete("all")
        w = int(canvas.winfo_width() or 320)
        h = int(canvas.winfo_height() or 120)
        pad = 14
        canvas.create_text(pad, 16, anchor="w", text=label, font=("Segoe UI", 10, "bold"))
        canvas.create_text(w - pad, 16, anchor="e", text=f"{value:.1f}{suffix}", font=("Consolas", 10))

        left = pad
        right = w - pad
        mid = (left + right) / 2
        bar_top = 50
        bar_bottom = 85

        canvas.create_rectangle(left, bar_top, right, bar_bottom, outline="#888")
        canvas.create_line(mid, bar_top - 10, mid, bar_bottom + 10, fill="#666", dash=(3, 3))

        clamped = max(min_value, min(max_value, value))
        frac = (clamped - min_value) / (max_value - min_value) if max_value != min_value else 0.5
        x = left + frac * (right - left)

        if x >= mid:
            canvas.create_rectangle(mid, bar_top, x, bar_bottom, outline="", fill="#4a90e2")
        else:
            canvas.create_rectangle(x, bar_top, mid, bar_bottom, outline="", fill="#4a90e2")

        canvas.create_text(left, 102, anchor="w", text=f"{min_value:.0f}")
        canvas.create_text(mid, 102, anchor="center", text="0")
        canvas.create_text(right, 102, anchor="e", text=f"{max_value:.0f}")

    def _refresh_all(self, update_slider: bool = True):
        state = self._get_state_at_time(self.current_time)

        elapsed = self.current_time - self.start_time
        self.status_var.set(
            f"Duration: {self.duration:.2f}s | Elapsed: {elapsed:.2f}s | "
            f"Progress: {(elapsed / self.duration * 100.0) if self.duration else 100.0:.2f}%"
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

        self._set_gauge(self.speed_canvas, "Speed", speed, 100.0, " mph")
        self._set_gauge(self.rpm_canvas, "RPM", rpm, 8000.0, " rpm")
        self._set_gauge(self.throttle_canvas, "Throttle", throttle, 100.0, "%")
        self._set_gauge(self.brake_canvas, "Brake", brake, 100.0, "%")
        self._set_center_bar(self.steering_canvas, "Steering", steering, -540.0, 540.0, " deg")


def main():
    parser = argparse.ArgumentParser(description="Replay a decoded GR86 CAN CSV in a simple GUI.")
    parser.add_argument("csv_file", nargs="?", help="Decoded CSV file from decode_can.py")
    args = parser.parse_args()

    csv_path: Optional[Path]
    if args.csv_file:
        csv_path = Path(args.csv_file)
    else:
        csv_path = None

    root = tk.Tk()

    if csv_path is None:
        selected = filedialog.askopenfilename(
            title="Open decoded CAN CSV",
            filetypes=[("CSV files", "*.csv"), ("All files", "*.*")]
        )
        if not selected:
            root.destroy()
            return
        csv_path = Path(selected)

    try:
        ReplayApp(root, csv_path)
    except Exception as exc:
        messagebox.showerror("Replay Error", str(exc))
        root.destroy()
        raise

    root.mainloop()


if __name__ == "__main__":
    main()
