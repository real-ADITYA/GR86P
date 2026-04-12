from __future__ import annotations

import json
import os
import platform
import socket
import time
from pathlib import Path


class SessionFiles:
    def __init__(self, cfg):
        self.cfg = cfg
        self.session_id = time.strftime("%Y%m%d_%H%M%S")
        self.session_dir = cfg.BASE_SESSION_DIR / f"session_{self.session_id}"
        self.session_dir.mkdir(parents=True, exist_ok=True)

        self.raw_log_path = self.session_dir / cfg.RAW_LOG_NAME
        self.meta_path = self.session_dir / cfg.META_NAME
        self.checkpoint_path = self.session_dir / cfg.CHECKPOINT_NAME
        self.samples_path = self.session_dir / cfg.SAMPLES_NAME
        self.events_path = self.session_dir / cfg.EVENTS_NAME

        self.raw_log = open(self.raw_log_path, "a", encoding="utf-8")
        self.samples_log = open(self.samples_path, "a", encoding="utf-8")
        self.events_log = open(self.events_path, "a", encoding="utf-8")

    def write_meta(self):
        meta = {
            "session_id": self.session_id,
            "logger_start_time": time.time(),
            "logger_version": self.cfg.LOGGER_VERSION,
            "app_name": self.cfg.APP_NAME,
            "hostname": socket.gethostname(),
            "platform": platform.platform(),
            "python_version": platform.python_version(),
            "can_interface": self.cfg.CAN_INTERFACE,
            "note": self.cfg.META_NOTE,
        }
        self.meta_path.write_text(json.dumps(meta, indent=2), encoding="utf-8")

    def append_raw_frame(self, frame):
        line = (
            f"{frame.wall_time:.6f} "
            f"{frame.arb_id:03X} "
            f"{frame.dlc} "
            f"{' '.join(f'{b:02X}' for b in frame.data)}\n"
        )
        self.raw_log.write(line)

    def flush_raw(self, fsync: bool = False):
        self.raw_log.flush()
        if fsync:
            os.fsync(self.raw_log.fileno())

    def write_checkpoint(self, payload: dict):
        tmp = self.checkpoint_path.with_suffix(".tmp")
        tmp.write_text(json.dumps(payload, indent=2), encoding="utf-8")
        tmp.replace(self.checkpoint_path)

    def append_sample(self, payload: dict):
        self.samples_log.write(json.dumps(payload) + "\n")
        self.samples_log.flush()

    def append_event(self, payload: dict):
        self.events_log.write(json.dumps(payload) + "\n")
        self.events_log.flush()

    def close(self):
        try:
            self.raw_log.flush()
            os.fsync(self.raw_log.fileno())
        except Exception:
            pass

        for f in (self.raw_log, self.samples_log, self.events_log):
            try:
                f.close()
            except Exception:
                pass
