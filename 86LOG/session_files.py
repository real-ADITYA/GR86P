import json
import os
import time

class SessionFiles:
    # init session dir and files
    def __init__(self, cfg):
        # set time, set dir, open can and gnss log
        self.started_monotonic = time.monotonic()
        self.started_unix = time.time()
        self.closed = False
        self.session_dir = self.create_session_dir(cfg.SESSIONS_DIR)
        self.metadata_path = self.session_dir / "session.json"
        self.can_log = open(
            self.session_dir / cfg.CAN_LOG_NAME,
            "a",
            encoding="utf-8",
        )
        self.gnss_log = open(
            self.session_dir / cfg.GNSS_LOG_NAME,
            "a",
            encoding="utf-8",
        )
        self.write_metadata(closed_cleanly=False)

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

    def write_metadata(self, closed_cleanly, ended_unix=None):
        metadata = {
            "session": self.session_dir.name,
            "started_unix": self.started_unix,
            "closed_cleanly": closed_cleanly,
        }
        if ended_unix is not None:
            metadata["ended_unix"] = ended_unix
            metadata["duration_seconds"] = max(0.0, time.monotonic() - self.started_monotonic)

        temporary = self.metadata_path.with_suffix(".json.tmp")
        with open(temporary, "w", encoding="utf-8") as stream:
            json.dump(metadata, stream, separators=(",", ":"))
            stream.write("\n")
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(temporary, self.metadata_path)

        directory_fd = os.open(self.session_dir, os.O_RDONLY)
        try:
            os.fsync(directory_fd)
        finally:
            os.close(directory_fd)

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
        if self.closed:
            return
        self.flush_can(fsync=True)
        self.flush_gnss(fsync=True)
        self.can_log.close()
        self.gnss_log.close()
        self.write_metadata(closed_cleanly=True, ended_unix=time.time())
        self.closed = True
