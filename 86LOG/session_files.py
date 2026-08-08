import os
import time

class SessionFiles:
    # init session dir and files
    def __init__(self, cfg):
        # set time, set dir, open can and gnss log
        self.started_monotonic = time.monotonic()
        self.session_dir = self.create_session_dir(cfg.SESSIONS_DIR)
        self.can_log = open(self.session_dir / cfg.CAN_LOG_NAME, "a", encoding="utf-8")
        self.gnss_log = open(self.session_dir / cfg.GNSS_LOG_NAME,"a",encoding="utf-8")

    # creates session dir with following number (so 0009 if 0008 is the highest)
    @staticmethod
    def create_session_dir(base_dir):
        base_dir.mkdir(parents=True, exist_ok=True)
        highest = 0
        for path in base_dir.iterdir():
            if path.is_dir() and path.name.isdigit():
                highest = max(highest, int(path.name))
        # set dir name and create
        session_dir = base_dir / f"{highest + 1:04d}"
        session_dir.mkdir()
        return session_dir

    # returns elapsed time
    def elapsed(self, monotonic_time):
        return monotonic_time - self.started_monotonic

    # appends can frame to log
    def append_can(self, frame):
        timestamp = self.elapsed(frame.monotonic_time)
        # data to string
        data = " ".join(
            f"{byte:02X}"
            for byte in frame.data
        )
        # write data
        self.can_log.write(
            f"{timestamp:.6f} "
            f"{frame.arb_id:03X} "
            f"{frame.dlc} "
            f"{data}\n"
        )

    # appends gnss line to log
    def append_gnss(self, line):
        timestamp = self.elapsed(line.monotonic_time)
        # write data
        self.gnss_log.write(
            f"{timestamp:.6f} "
            f"{line.raw}\n"
        )

    # flushes the log to disk
    def flush_can(self, fsync=False):
        self.can_log.flush()
        if fsync:
            os.fsync(self.can_log.fileno())

    # flushes the log to disk
    def flush_gnss(self, fsync=False):
        self.gnss_log.flush()
        if fsync:
            os.fsync(self.gnss_log.fileno())

    # closes the session files
    def close(self):
        self.flush_can(fsync=True)
        self.flush_gnss(fsync=True)
        self.can_log.close()
        self.gnss_log.close()