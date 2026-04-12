from pathlib import Path

APP_NAME = "gr86-session-logger"
LOGGER_VERSION = "0.1.0"

CAN_INTERFACE = "can0"
CAN_BITRATE = 500000

BASE_SESSION_DIR = Path.home() / "GR86P" / "sessions"

RAW_LOG_NAME = "raw_can.log"
META_NAME = "meta.json"
CHECKPOINT_NAME = "checkpoint.json"
SAMPLES_NAME = "samples_1hz.jsonl"
EVENTS_NAME = "events.jsonl"

CHECKPOINT_INTERVAL_SEC = 5.0
SAMPLE_INTERVAL_SEC = 1.0
RAW_LOG_FLUSH_EVERY_N_FRAMES = 50
RAW_LOG_FSYNC_EVERY_N_FRAMES = 200

IDLE_SPEED_MPH_MAX = 1.0
CRUISE_MIN_SPEED_MPH = 35.0
CRUISE_MAX_THROTTLE_PCT = 20.0
CRUISE_MAX_BRAKE_PCT = 5.0
THROTTLE_SPIKE_PCT = 70.0
HARD_BRAKE_PCT = 50.0
HIGH_RPM_THRESHOLD = 5000

META_NOTE = (
    "Capture starts after Raspberry Pi boot. "
    "First ~30 seconds of engine-on time may be missing."
)
