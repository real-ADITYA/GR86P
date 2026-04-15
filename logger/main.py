import time

from logger import config as cfg
from logger.can_reader import CanReader
from logger.session_files import SessionFiles

# removed all the random code here, simplified main to just read can frames and write them to the raw log file
# implemented periodic flushes and fsyncs to ensure data is written to disk in a timely manner
def main():
    session = SessionFiles(cfg)
    reader = CanReader(cfg.CAN_INTERFACE)
    raw_since_flush = 0

    # main loop to read can frames and write to raw log file, with periodic flushes and fsyncs
    try:
        while True:
            frame = reader.recv(timeout=1.0)
            if frame is None:
                continue

            session.append_raw_frame(frame)
            raw_since_flush += 1

            if raw_since_flush % cfg.RAW_LOG_FLUSH_EVERY_N_FRAMES == 0:
                session.flush_raw(fsync=False)

            if raw_since_flush % cfg.RAW_LOG_FSYNC_EVERY_N_FRAMES == 0:
                session.flush_raw(fsync=True)

    finally:
        session.close()

# main python thingy
if __name__ == "__main__":
    main()