# GR86P DietPi installation

This deployment is designed for a Raspberry Pi 5 that runs offline in a car. It
uses DietPi's dedicated Chromium kiosk mode without a desktop environment. The
logger and dashboard are local system services; the dashboard has no Internet
dependencies.

## 1. First boot with Internet access

Flash the current Raspberry Pi 5 DietPi image. During initial provisioning,
connect the Pi to a network with Internet access. Add the Mac's SSH public key
to `AUTO_SETUP_SSH_PUBKEY` in the boot partition's `dietpi.txt`, or install it
after the first login.

Generate a dedicated key on the Mac if needed:

```sh
ssh-keygen -t ed25519 -f ~/.ssh/gr86pi -C gr86pi
```

## 2. Copy and install GR86P

Copy only the source tree, not session archives:

```sh
ssh -i ~/.ssh/gr86pi root@PI_ADDRESS 'mkdir -p /root/GR86P'
scp -i ~/.ssh/gr86pi -r 86LOG 86DASH deploy scripts requirements.txt root@PI_ADDRESS:/root/GR86P/
```

On the Pi:

```sh
cd /root/GR86P
chmod +x scripts/install_dietpi.sh
./scripts/install_dietpi.sh
```

The installer adds only the Python CAN/serial packages plus DietPi's Chromium
kiosk package. It deploys the application under `/opt/gr86p`, stores sessions
under `/var/lib/gr86p/sessions`, enables both services, and configures Chromium
for `http://127.0.0.1:8086/` at 1280x400. Because the car display has no pointing
device, it also launches the X server with `-nocursor` instead of installing a
cursor-hiding daemon.

## 3. Configure CAN hardware

`can0` must exist before the logger can start. For an SPI CAN controller, add
the correct overlay to `/boot/firmware/config.txt`. Do not guess the oscillator
frequency or interrupt GPIO. `deploy/config.txt.can.example` is only a template.

After rebooting, verify the interface:

```sh
ip -details link show can0
systemctl status 86log.service --no-pager
```

For a different interface name or bitrate, edit `/etc/default/gr86p`.

For GNSS, automatic discovery uses the first `/dev/ttyACM*` or `/dev/ttyUSB*`
device. A stable device path is safer:

```sh
ls -l /dev/serial/by-id/
```

Put the selected full path in `GR86_GNSS_PORT` inside `/etc/default/gr86p`.

## 4. Configure HDMI

Connect the display to physical HDMI0 before power-on. Check the advertised
modes:

```sh
kmsprint -m
```

If the display powers up too late to be detected, first force HDMI0 on while
still allowing the panel's EDID to select its native timing. Append the
following argument to the existing single line in
`/boot/firmware/cmdline.txt`:

```text
video=HDMI-A-1:D
```

The `D` forces digital output. Avoid the `M` mode-generation flag for unusual
ultrawide panels unless their required timing is known: a generic CVT timing can
produce a split or vertically distorted image. Use `kmsprint -m` after boot to
confirm the EDID modes and active timing. Do not add a newline to `cmdline.txt`.

## 5. Direct Ethernet SSH from the Mac

Finish the DietPi first-run process and run the GR86P installer while the Pi has
working Internet access. A plain cable between the Mac and Pi normally has no
DHCP server, so the router-assigned address cannot be reused on that link.

After provisioning, open `dietpi-config` and select **Network Options: Adapters
→ Ethernet → Change Mode → Static**. Set the Pi to `10.86.0.2` with netmask
`255.255.255.0`. No gateway or DNS is needed for the private link; if the menu
requires a gateway, use the Mac address `10.86.0.1`.

On the Mac, open **System Settings → Network → Ethernet adapter → Details →
TCP/IP**, choose **Configure IPv4: Manually**, and set:

- IP address: `10.86.0.1`
- Subnet mask: `255.255.255.0`
- Router: blank

The installer sets `CONFIG_BOOT_WAIT_FOR_NETWORK=0`, so neither an unplugged Mac
nor a missing Internet route delays the dashboard. Disable Wi-Fi only after the
direct Ethernet link has been tested.

Connect from the Mac with:

```sh
ssh -i ~/.ssh/gr86pi root@10.86.0.2
```

Optionally add a shortcut to `~/.ssh/config` on the Mac:

```sshconfig
Host gr86pi
    HostName 10.86.0.2
    User root
    IdentityFile ~/.ssh/gr86pi
```

You can then connect with `ssh gr86pi`.

Wi-Fi and Bluetooth can be disabled after all packages are installed.

## 6. Offline acceptance test

Disconnect Internet access and reboot. Confirm:

```sh
systemctl is-active 86log.service 86dash.service
curl -fsS http://127.0.0.1:8086/state
find /var/lib/gr86p/sessions -maxdepth 2 -type f -print
journalctl -b -u 86log.service -u 86dash.service --no-pager
systemd-analyze time
```

Each logger start creates a numbered session containing `raw_can.log`,
`gnss.log`, and `session.json`. `closed_cleanly` is true after an orderly
shutdown and remains false after an interrupted session.

Take a full SD-card image after this test. Use an automotive power controller
that initiates an orderly shutdown before cutting power; software cannot make
abrupt ignition power loss safe for the filesystem.
