import os
import time
import json

# greatly simplified this file to just handle the session files
# it creates a new session directory for each run and handles the raw log file for now
class SessionFiles:
    # init takes in the config file to get the base session dir and raw log name
    def __init__(self, cfg):
        self.cfg = cfg
        self.session_id = time.strftime("%Y%m%d_%H%M%S")
        self.session_dir = cfg.BASE_SESSION_DIR / f"session_{self.session_id}"
        self.session_dir.mkdir(parents=True, exist_ok=True)
        self.raw_log_path = self.session_dir / cfg.RAW_LOG_NAME
        self.raw_log = open(self.raw_log_path, "a", encoding="utf-8")
        self.gnss_log_path = self.session_dir / cfg.GNSS_LOG_NAME
        self.gnss_log = open(self.gnss_log_path, "a", encoding="utf-8")

    # append a raw frame to the raw log file in a simple text format
    def append_raw_frame(self, frame):
        line = (
            f"{frame.wall_time:.6f} "
            f"{frame.arb_id:03X} "
            f"{frame.dlc} "
            f"{' '.join(f'{b:02X}' for b in frame.data)}\n"
        )
        self.raw_log.write(line)

    # append a parsed GNSS record to the gnss log file in JSON format
    def append_gnss(self, record):
        self.gnss_log.write(json.dumps(record) + "\n")

    # flush the raw log file, optionally fsync to ensure it's written to disk
    def flush_raw(self, fsync: bool = False):
        self.raw_log.flush()
        if fsync:
            os.fsync(self.raw_log.fileno())

    # flush the gnss log file, optionally fsync to ensure it's written to disk
    def flush_gnss(self, fsync=False):
        self.gnss_log.flush()
        if fsync:
            os.fsync(self.gnss_log.fileno())

    # close the raw/gnss log file, ensuring it's flushed and closed properly
    def close(self):
        for f in (self.raw_log, self.gnss_log):
            try:
                f.flush()
                os.fsync(f.fileno())
                f.close()
            except Exception:
                pass