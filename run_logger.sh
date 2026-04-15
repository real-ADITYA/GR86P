#!/bin/bash
set -e

sudo /sbin/ip link set can0 down || true
sudo /sbin/ip link set can0 up type can bitrate 500000
cd /home/aditya/GR86P
exec /home/aditya/GR86P/.venv/bin/python -m logger.main
