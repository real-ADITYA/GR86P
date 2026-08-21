"""Runtime configuration shared by the logger and its systemd service."""

import os
from pathlib import Path

# Logging dir
SESSIONS_DIR = Path(os.environ.get("GR86_SESSIONS_DIR", "/var/lib/gr86p/sessions"))

# CAN
CAN_INTERFACE = os.environ.get("GR86_CAN_INTERFACE", "can0")
CAN_LOG_NAME = "raw_can.log"
CAN_FLUSH_EVERY = 50
CAN_FSYNC_EVERY = 200

# GNSS
GNSS_ENABLED = os.environ.get("GR86_GNSS_ENABLED", "1").lower() not in {"0", "false", "no"}
GNSS_PORT = os.environ.get("GR86_GNSS_PORT") or None
GNSS_BAUDRATE = int(os.environ.get("GR86_GNSS_BAUDRATE", "9600"))
GNSS_RETRY_SECONDS = float(os.environ.get("GR86_GNSS_RETRY_SECONDS", "2"))
GNSS_LOG_NAME = "gnss.log"
GNSS_FLUSH_EVERY = 1
GNSS_FSYNC_EVERY = 20
