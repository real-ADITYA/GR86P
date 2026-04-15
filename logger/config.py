from pathlib import Path

# greatly simplified config file for now
APP_NAME = "gr86-session-logger"
LOGGER_VERSION = "0.1.0"
CAN_INTERFACE = "can0"
CAN_BITRATE = 500000
BASE_SESSION_DIR = Path.home() / "GR86P" / "sessions"
RAW_LOG_NAME = "raw_can.log"
RAW_LOG_FLUSH_EVERY_N_FRAMES = 50
RAW_LOG_FSYNC_EVERY_N_FRAMES = 200