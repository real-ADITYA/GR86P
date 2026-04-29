import json
import os
import time


class SessionFiles:
    def __init__(self, cfg):
        self.cfg = cfg
        self.session_id = time.strftime("%Y%m%d_%H%M%S")
        self.session_dir = cfg.BASE_SESSION_DIR / f"session_{self.session_id}"
        self.session_dir.mkdir(parents=True, exist_ok=True)

        self.raw_log_path = self.session_dir / cfg.RAW_LOG_NAME
        self.raw_log = open(self.raw_log_path, "a", encoding="utf-8")

        self.gnss_log_path = self.session_dir / cfg.GNSS_LOG_NAME
        self.gnss_log = open(self.gnss_log_path, "a", encoding="utf-8")

    def append_raw_frame(self, frame):
        line = (
            f"{frame.wall_time:.6f} "
            f"{frame.arb_id:03X} "
            f"{frame.dlc} "
            f"{' '.join(f'{b:02X}' for b in frame.data)}\n"
        )
        self.raw_log.write(line)

    def append_gnss(self, record):
        self.gnss_log.write(json.dumps(record) + "\n")

    def flush_raw(self, fsync=False):
        self.raw_log.flush()
        if fsync:
            os.fsync(self.raw_log.fileno())

    def flush_gnss(self, fsync=False):
        self.gnss_log.flush()
        if fsync:
            os.fsync(self.gnss_log.fileno())

    def close(self):
        for f in (self.raw_log, self.gnss_log):
            try:
                f.flush()
                os.fsync(f.fileno())
                f.close()
            except Exception:
                pass
