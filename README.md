# GR86P

GR86P is an offline Raspberry Pi 5 recorder and 1280×400 dashboard for the
Toyota GR86. The project deliberately has only three moving parts:

```text
GR86P/
├── 86LOG/       records CAN and GNSS
├── 86DASH/      displays live telemetry
└── sessions/    stores numbered drives
```

`86LOG` is the critical process. It owns the GNSS serial device, records raw
SocketCAN and NMEA data, and marks whether each session closed cleanly.
`86DASH` reads SocketCAN independently and follows the logger's GNSS file, so a
display failure cannot stop recording.

Each drive is stored as:

```text
sessions/0001/
├── raw_can.log
├── gnss.log
└── session.json
```

## Run locally

Install `python-can` and `pyserial` from `requirements.txt`. The dashboard can
be exercised without vehicle hardware:

```sh
python3 86DASH/server.py --demo
```

Then open `http://127.0.0.1:8086/`. Run the hardware logger with:

```sh
python3 86LOG/main.py
```

Runtime settings may be supplied through environment variables. The available
values and Pi defaults are shown in `gr86p.env.example`.

## Install on DietPi

Complete DietPi's first-run setup with Internet access, copy this repository to
the Pi, then run:

```sh
chmod +x install.sh
sudo ./install.sh
```

The installer copies the same simple layout to `/opt/gr86p`, installs only the
CAN/serial Python packages plus Chromium kiosk support, enables `86log` and
`86dash`, and opens the local dashboard at boot. Recordings remain in
`/opt/gr86p/sessions`.

Before starting the logger, confirm that `can0` exists:

```sh
ip -details link show can0
systemctl status 86log.service --no-pager
```

For an SPI MCP2515 adapter, its overlay belongs in
`/boot/firmware/config.txt`. The oscillator and interrupt GPIO must match the
actual board; do not guess them. A typical shape is:

```text
dtparam=spi=on
dtoverlay=mcp2515-can0,oscillator=8000000,interrupt=25,spimaxfrequency=10000000
```

USB CAN adapters generally do not need that overlay. For GNSS, prefer a stable
`/dev/serial/by-id/...` value in `/etc/default/gr86p`.

If the unusual display is not detected at boot, append `video=HDMI-A-1:D` to
the existing single line in `/boot/firmware/cmdline.txt`, then verify the mode
with `kmsprint -m`. Do not add a newline to `cmdline.txt`.

After installation, disconnect Internet access, reboot, and check:

```sh
systemctl is-active 86log.service 86dash.service
curl -fsS http://127.0.0.1:8086/state
find /opt/gr86p/sessions -maxdepth 2 -type f -print
```

Use an automotive power controller that requests an orderly shutdown before
cutting power. Software alone cannot make abrupt ignition power loss safe for
the SD-card filesystem.

## Test

The hardware-free checks run with:

```sh
PYTHONDONTWRITEBYTECODE=1 python3 test_project.py -v
```

The guiding rule is simple: record first, interpret later, and never put the
dashboard in the logging critical path.
