from __future__ import annotations
from collections import Counter

# collect information about the drive (LLM assisted)
class StatsTracker:
    def __init__(self):
        self.frame_count = 0
        self.id_counts = Counter()

        self.max_rpm = 0
        self.max_speed_mph = 0.0
        self.max_throttle_pct = 0.0
        self.max_brake_pct = 0.0

        self.event_counts = Counter()
        self.last_event_times = {}

        self.idle_started_at = None
        self.cruise_started_at = None

    def update_frame_count(self, arb_id: int):
        self.frame_count += 1
        self.id_counts[f"{arb_id:03X}"] += 1

    def update_metrics(self, decoded: dict):
        rpm = decoded.get("rpm")
        speed = decoded.get("speed_mph")
        throttle = decoded.get("throttle_pct")
        brake = decoded.get("brake_pct")

        if rpm is not None:
            self.max_rpm = max(self.max_rpm, rpm)
        if speed is not None:
            self.max_speed_mph = max(self.max_speed_mph, speed)
        if throttle is not None:
            self.max_throttle_pct = max(self.max_throttle_pct, throttle)
        if brake is not None:
            self.max_brake_pct = max(self.max_brake_pct, brake)

    def maybe_emit_events(self, now: float, latest: dict, cfg) -> list[dict]:
        events = []

        throttle = latest.get("throttle_pct") or 0.0
        brake = latest.get("brake_pct") or 0.0
        rpm = latest.get("rpm") or 0
        speed = latest.get("speed_mph") or 0.0

        if throttle >= cfg.THROTTLE_SPIKE_PCT and self._cooldown_ok("throttle_spike", now, 2.0):
            events.append(self._make_event(now, "throttle_spike", {"throttle_pct": throttle}))

        if brake >= cfg.HARD_BRAKE_PCT and self._cooldown_ok("hard_brake", now, 2.0):
            events.append(self._make_event(now, "hard_brake", {"brake_pct": brake}))

        if rpm >= cfg.HIGH_RPM_THRESHOLD and self._cooldown_ok("high_rpm_window", now, 5.0):
            events.append(self._make_event(now, "high_rpm_window", {"rpm": rpm}))

        if speed <= cfg.IDLE_SPEED_MPH_MAX and rpm > 0:
            if self.idle_started_at is None:
                self.idle_started_at = now
            elif now - self.idle_started_at >= 30.0 and self._cooldown_ok("long_idle", now, 30.0):
                events.append(self._make_event(now, "long_idle", {"seconds": round(now - self.idle_started_at, 1)}))
        else:
            self.idle_started_at = None

        if (
            speed >= cfg.CRUISE_MIN_SPEED_MPH
            and throttle <= cfg.CRUISE_MAX_THROTTLE_PCT
            and brake <= cfg.CRUISE_MAX_BRAKE_PCT
        ):
            if self.cruise_started_at is None:
                self.cruise_started_at = now
            elif now - self.cruise_started_at >= 20.0 and self._cooldown_ok("steady_cruise", now, 20.0):
                events.append(self._make_event(now, "steady_cruise", {"seconds": round(now - self.cruise_started_at, 1)}))
        else:
            self.cruise_started_at = None

        return events

    def build_summary(self) -> dict:
        return {
            "frame_count": self.frame_count,
            "id_counts": dict(self.id_counts),
            "max_rpm": self.max_rpm,
            "max_speed_mph": round(self.max_speed_mph, 2),
            "max_throttle_pct": round(self.max_throttle_pct, 1),
            "max_brake_pct": round(self.max_brake_pct, 1),
            "event_counts": dict(self.event_counts),
        }

    def _cooldown_ok(self, name: str, now: float, cooldown: float) -> bool:
        last = self.last_event_times.get(name)
        return last is None or (now - last) >= cooldown

    def _make_event(self, now: float, name: str, payload: dict) -> dict:
        self.last_event_times[name] = now
        self.event_counts[name] += 1
        return {
            "time": now,
            "type": name,
            "payload": payload,
        }
