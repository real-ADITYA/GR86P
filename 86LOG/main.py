import threading
import config as cfg
from can_reader import CanReader
from gnss_reader import GnssReader
from session_files import SessionFiles

# function to sync logs to disk
def sync_if_needed(count, flush_every, fsync_every, flush_function):
    if count % fsync_every == 0:
        flush_function(fsync=True)
    elif count % flush_every == 0:
        flush_function(fsync=False)

# function to read gnss data in another thread
def gnss_loop(session):
    reader = GnssReader(port=cfg.GNSS_PORT, baudrate=cfg.GNSS_BAUDRATE)
    count = 0
    try:
        while True:
            line = reader.recv()
            if line is None:
                continue
            session.append_gnss(line)
            count += 1
            sync_if_needed(count, cfg.GNSS_FLUSH_EVERY, cfg.GNSS_FSYNC_EVERY, session.flush_gnss)
    finally:
        reader.close()

# main juice
def main():
    can_reader = CanReader(cfg.CAN_INTERFACE)

    # create session files
    session = SessionFiles(cfg)
    print(f"86LOG session " f"{session.session_dir.name}")

    # start gnss
    if cfg.GNSS_ENABLED:
        thread = threading.Thread(target=gnss_loop, args=(session,), daemon=True)
        thread.start()

    count = 0
    try:
        while True:
            frame = can_reader.recv(timeout=1.0)
            if frame is None:
                continue
            session.append_can(frame)
            count += 1
            sync_if_needed(count, cfg.CAN_FLUSH_EVERY, cfg.CAN_FSYNC_EVERY, session.flush_can)
    finally:
        can_reader.close()
        session.close()

# call the main func
if __name__ == "__main__":
    main()