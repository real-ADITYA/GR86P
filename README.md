# GR86P

GR86P is an offline Raspberry Pi 5 CAN/GNSS recorder and 1280x400 in-car
dashboard for the Toyota GR86.

- `86LOG` records a numbered session with raw CAN, raw NMEA, and clean-shutdown
  metadata.
- `86DASH` serves the local browser dashboard and reads CAN independently so a
  display problem cannot interrupt logging.
- `scripts/install_dietpi.sh` installs the minimal DietPi runtime, system
  services, and dedicated Chromium kiosk mode.

Fresh Pi setup, HDMI, SSH, CAN, and offline acceptance instructions are in
[`docs/dietpi-setup.md`](docs/dietpi-setup.md).

The CAN adapter's oscillator frequency and interrupt GPIO are hardware-specific.
Confirm them before adding a Device Tree overlay.
