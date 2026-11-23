# GR86P

GR86P is an offline Raspberry Pi 5 recorder and 1280×400 dashboard for the
Toyota GR86. The project deliberately has only three moving
parts:

```text
GR86P/
├── 86LOG/       records CAN and GNSS
├── 86DASH/      displays live telemetry
└── sessions/    stores numbered drives
```

`86LOG` is the critical process. It owns the GNSS serial device, records raw
SocketCAN and NMEA data, and marks whether each session closed cleanly.
`86DASH` is the 86SIM OEM+ cockpit (the `86style-dash` branch of 86SIM) running
live, in four views stepped with the cruise stalk (RES/+ next and SET/−
previous with cruise off; CANCEL × 3 starts or ends the dash):

- **Track** and **Engineering**: the car on the Richmond 3D map, a raw CAN
  monitor and the decoded instruments;
- **Live**: the GR86 model full width, driven by CAN alone (no GNSS needed),
  at night in heavy rain, with street light sweeping over the car and pooling
  on the wet road at the car's real speed and through its real turns, a faint
  city glow on the horizon that changes tint as you drive (no map), a contact
  shadow and the car's own lamps (brake, turn, reverse, from CAN) spilling on
  the road, a chase camera that pulls back and widens a little with speed and
  closes in under braking, glowing lamps, and a small telemetry overlay;
- **Drive Stats**: this drive's time, distance, speeds, peak rpm and gear
  changes, and an experimental shift analysis that scores each gear change.
`86DASH/server.py` serves the built cockpit from `86DASH/web/` and streams the
car to it: it reads SocketCAN itself and follows the logger's newest
`gnss.log`, so a display failure cannot stop recording. Everything the browser
loads is inside `86DASH/web/`; nothing comes from the Internet.

Each drive is stored as:

```text
sessions/0001/
├── raw_can.log
├── gnss.log
└── session.json
```

## Run locally

Install `python-can` and `pyserial` from `requirements.txt`. The dashboard can
be exercised without the car by playing a recorded session folder as if it
were live:

```sh
python3 86DASH/server.py --replay ~/gr86p-sessions-20261009-095840/sessions/0580 --from 627
```

Then open `http://127.0.0.1:8086/` (keys: 1–4 or T/E/L/S views, ] and [ next
and previous, G start/end sequence, A shift animation on/off). Run
the hardware logger with:

```sh
python3 86LOG/main.py
```

Runtime settings may be supplied through environment variables. The available
values and Pi defaults are shown in `gr86p.env.example`.

## Maps

The cockpit carries every map in `86DASH/web/tiles/`: Richmond (4 MB, in git) and Massachusetts + New
Hampshire (`manh`, 1.0 GB, built on the Mac with `sh scripts/manh/build-all.sh` in 86SIM and copied in by
`npm run pi:export`; too big for git, so it is ignored here). `tiles/index.json` lists them with their bounds.
At boot the cockpit opens the map containing the car's last GNSS fix, which 86DASH reads from the newest
sessions' `gnss.log` and reports in `/state` (`"fix"`). If the car drives from one map's area into another's,
the cockpit reopens on the new map within about 30 s. With no fix yet it opens Richmond.

## Update the cockpit

`86DASH/web/` is built from 86SIM on the Mac (Node needed there, never on the
Pi). After changing 86SIM:

```sh
cd ~/86SIM && npm run pi:export -- ~/GR86P/86DASH/web
```

## Install on DietPi

Complete DietPi's first-run setup with Internet access, copy this repository to
the Pi, then run:

```sh
chmod +x install.sh
sudo ./install.sh
```

The installer only uses the Internet for packages that are missing, so after
the first install it can be re-run offline (do that once after copying a new
version of this folder, so the services point at it). It runs everything in
place from this folder (for example
`~/GR86P`): it installs only the CAN/serial Python packages plus Chromium kiosk
support, points `86log` and `86dash` at this folder, and opens the local
dashboard at boot. Re-run it if you move the folder. Its kiosk launcher waits until
the local dashboard responds before opening Chromium and relaunches the browser
if it exits. Recordings are saved in `sessions/` inside this folder.

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

### Display: 1280×400

The cockpit is drawn for the panel's native 1280×400 and never stretches
itself (in any other window size it is scaled evenly and letterboxed). A
squashed or stretched picture therefore means the Pi is sending the panel a
different video mode, which the panel then scales. That happens when X starts
in whatever mode the screen lists first, for example after another monitor was
plugged in. The kiosk launcher now selects 1280×400 whenever the screen offers
it and it is not already active, at start and every 5 s (so reconnecting the
panel fixes itself), and logs what it saw in `/tmp/86dash-kiosk.log`.

To see what the panel offers and what is active:

```sh
DISPLAY=:0 xrandr --query
kmsprint -m
```

If 1280x400 is not in the list at all, the panel's EDID is not being read.
Force the mode for the kernel by adding
`video=HDMI-A-1:1280x400@60D` to the end of the existing single line in
`/boot/firmware/cmdline.txt` (no new line), then reboot. Check for leftovers
from the other monitor too: `hdmi_*` lines in `/boot/firmware/config.txt` and
files in `/etc/X11/xorg.conf.d/`.

After installation, disconnect Internet access, reboot, and check:

```sh
systemctl is-active 86log.service 86dash.service
curl -fsS http://127.0.0.1:8086/state
find ~/GR86P/sessions -maxdepth 2 -type f -print
```

If the web endpoint works but the screen is blank, inspect the DietPi login/X
launcher as well as the backend:

```sh
journalctl -b -u 86dash.service --no-pager
journalctl -b -u getty@tty1.service --no-pager
test -x /var/lib/dietpi/dietpi-software/installed/chromium-autostart.sh
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
