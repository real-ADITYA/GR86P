from __future__ import annotations
import json
import time
from logger import config as cfg
from logger.can_reader import CanReader
from logger.decoder import Decoder
from logger.session_files import SessionFiles
from logger.stats import StatsTracker

# create checkpoints which periodically save to account for vehicle shutdown
def build_checkpoint(session_id: str, start_time: float, decoder: Decoder, stats: StatsTracker) -> dict:
    now = time.time()
    return {
        "session_id": session_id,
        "start_time": start_time,
        "last_checkpoint_time": now,
        "elapsed_time_sec": round(now - start_time, 2),
        "total_frame_count": stats.frame_count,
        "frame_id_counts": dict(stats.id_counts),
        "latest_decoded_values": decoder.latest,
        "running_summary_metrics": {
            "max_rpm": stats.max_rpm,
            "max_speed_mph": round(stats.max_speed_mph, 2),
            "max_throttle_pct": round(stats.max_throttle_pct, 1),
            "max_brake_pct": round(stats.max_brake_pct, 1),
        },
        "event_counters": dict(stats.event_counts),
    }


def main():
    session = SessionFiles(cfg)
    session.write_meta()

    start_time = time.time()
    reader = CanReader(cfg.CAN_INTERFACE)
    decoder = Decoder()
    stats = StatsTracker()

    last_checkpoint = 0.0
    last_sample = 0.0

    raw_since_flush = 0

    try:
        while True:
            frame = reader.recv(timeout=1.0)
            now = time.time()

            if frame is not None:
                session.append_raw_frame(frame)
                stats.update_frame_count(frame.arb_id)

                decoded_updates = decoder.decode(frame.arb_id, frame.data)
                stats.update_metrics(decoded_updates)

                raw_since_flush += 1
                if raw_since_flush % cfg.RAW_LOG_FLUSH_EVERY_N_FRAMES == 0:
                    session.flush_raw(fsync=False)
                if raw_since_flush % cfg.RAW_LOG_FSYNC_EVERY_N_FRAMES == 0:
                    session.flush_raw(fsync=True)

                events = stats.maybe_emit_events(now, decoder.latest, cfg)
                for event in events:
                    session.append_event(event)

            if (now - last_sample) >= cfg.SAMPLE_INTERVAL_SEC:
                sample = {
                    "time": now,
                    "elapsed_time_sec": round(now - start_time, 2),
                    "latest": decoder.latest,
                }
                session.append_sample(sample)
                last_sample = now

            if (now - last_checkpoint) >= cfg.CHECKPOINT_INTERVAL_SEC:
                checkpoint = build_checkpoint(session.session_id, start_time, decoder, stats)
                session.write_checkpoint(checkpoint)
                session.flush_raw(fsync=True)
                last_checkpoint = now

    finally:
        final_checkpoint = build_checkpoint(session.session_id, start_time, decoder, stats)
        session.write_checkpoint(final_checkpoint)
        session.close()


if __name__ == "__main__":
    main()
