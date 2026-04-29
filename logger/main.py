import threading

from logger import config as cfg
from logger.can_reader import CanReader
from logger.gnss_reader import GnssReader
from logger.session_files import SessionFiles


def gnss_loop(session):
    try:
        reader = GnssReader(port=cfg.GNSS_PORT, baudrate=cfg.GNSS_BAUDRATE)
        count = 0

        while True:
            record = reader.recv()
            if record is None:
                continue

            session.append_gnss(record)
            count += 1

            if count % 5 == 0:
                session.flush_gnss(fsync=False)

            if count % 20 == 0:
                session.flush_gnss(fsync=True)

    except Exception as e:
        session.append_gnss({
            "wall_time": None,
            "error": str(e)
        })
        session.flush_gnss(fsync=True)


def main():
    session = SessionFiles(cfg)

    if cfg.GNSS_ENABLED:
        t = threading.Thread(target=gnss_loop, args=(session,), daemon=True)
        t.start()

    reader = CanReader(cfg.CAN_INTERFACE)
    raw_since_flush = 0

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


if __name__ == "__main__":
    main()