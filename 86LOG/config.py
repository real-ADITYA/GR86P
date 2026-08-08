from pathlib import Path

# Logging dir
SESSIONS_DIR = Path("/home/aditya/GR86P/sessions")

# CAN
CAN_INTERFACE = "can0"
CAN_LOG_NAME = "raw_can.log"
CAN_FLUSH_EVERY = 50
CAN_FSYNC_EVERY = 200

# GNSS
GNSS_ENABLED = True
GNSS_PORT = None
GNSS_BAUDRATE = 9600
GNSS_LOG_NAME = "gnss.log"
GNSS_FLUSH_EVERY = 1
GNSS_FSYNC_EVERY = 20