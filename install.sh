#!/usr/bin/env bash
set -Eeuo pipefail

if (( EUID != 0 )); then
    echo "Run this installer as root: sudo ./install.sh" >&2
    exit 1
fi

find_dietpi_tool() {
    local tool=$1 resolved
    if resolved=$(command -v "$tool" 2>/dev/null); then
        printf '%s\n' "$resolved"
    elif [[ -x /boot/dietpi/$tool ]]; then
        printf '/boot/dietpi/%s\n' "$tool"
    else
        return 1
    fi
}

if ! DIETPI_SOFTWARE=$(find_dietpi_tool dietpi-software) ||
   ! DIETPI_AUTOSTART=$(find_dietpi_tool dietpi-autostart); then
    if [[ -e /boot/dietpi/.version || -e /boot/dietpi.txt ]]; then
        echo "DietPi was detected, but its core tools are missing or the first-run setup is incomplete." >&2
        echo "Expected /boot/dietpi/dietpi-software and /boot/dietpi/dietpi-autostart." >&2
    else
        echo "This does not appear to be a DietPi installation (/boot/dietpi was not found)." >&2
    fi
    exit 1
fi

SOURCE_ROOT=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
INSTALL_ROOT=/opt/gr86p
SETTINGS_FILE=/boot/dietpi.txt

set_dietpi_setting() {
    local key=$1 value=$2
    [[ -f $SETTINGS_FILE ]] || return 0
    if grep -qE "^[[:space:]]*${key}=" "$SETTINGS_FILE"; then
        sed -i --follow-symlinks -E "s|^[[:space:]]*${key}=.*|${key}=${value}|" "$SETTINGS_FILE"
    else
        printf '%s=%s\n' "$key" "$value" >> "$SETTINGS_FILE"
    fi
}

echo "Installing minimal GR86 runtime packages..."
apt-get update
apt-get install -y --no-install-recommends python3 python3-can python3-serial iproute2

echo "Installing DietPi Chromium kiosk support..."
"$DIETPI_SOFTWARE" install 113

echo "Installing GR86 logger and dashboard..."
install -d -m 0755 "$INSTALL_ROOT/86LOG" "$INSTALL_ROOT/86DASH" "$INSTALL_ROOT/sessions"
install -m 0644 "$SOURCE_ROOT/86LOG/main.py" "$INSTALL_ROOT/86LOG/"
install -m 0644 \
    "$SOURCE_ROOT/86DASH/server.py" \
    "$SOURCE_ROOT/86DASH/index.html" \
    "$INSTALL_ROOT/86DASH/"
install -m 0644 "$SOURCE_ROOT/86LOG/86log.service" /etc/systemd/system/86log.service
install -m 0644 "$SOURCE_ROOT/86DASH/86dash.service" /etc/systemd/system/86dash.service

if [[ ! -e /etc/default/gr86p ]]; then
    install -m 0644 "$SOURCE_ROOT/gr86p.env.example" /etc/default/gr86p
else
    echo "Keeping existing /etc/default/gr86p settings."
fi

echo "Configuring Chromium to boot directly to the local dashboard..."
KIOSK_USER=root
if id dietpi >/dev/null 2>&1; then
    KIOSK_USER=dietpi
fi
# The finished car system must boot without DHCP, DNS, or Internet access.
set_dietpi_setting CONFIG_BOOT_WAIT_FOR_NETWORK 0
set_dietpi_setting CONFIG_CHECK_DIETPI_UPDATES 0
set_dietpi_setting AUTO_SETUP_AUTOSTART_LOGIN_USER "$KIOSK_USER"
set_dietpi_setting AUTO_SETUP_AUTOSTART_TARGET_INDEX 11
set_dietpi_setting SOFTWARE_CHROMIUM_RES_X 1280
set_dietpi_setting SOFTWARE_CHROMIUM_RES_Y 400
set_dietpi_setting SOFTWARE_CHROMIUM_AUTOSTART_URL http://127.0.0.1:8086/
"$DIETPI_AUTOSTART" 11

# This installation has no pointing device. Disable the X server cursor rather
# than running an additional cursor-hiding daemon. DietPi generates this script
# when Chromium kiosk mode is selected, so patch it only afterwards.
CHROMIUM_AUTOSTART=/var/lib/dietpi/dietpi-software/installed/chromium-autostart.sh
if [[ -f $CHROMIUM_AUTOSTART ]]; then
    sed -i -E \
        '/^[[:space:]]*exec .*STARTX/ { /--[[:space:]]+-nocursor/! s|[[:space:]]*$| -- -nocursor|; }' \
        "$CHROMIUM_AUTOSTART"
    if ! grep -qE 'exec .*STARTX.*--[[:space:]]+-nocursor' "$CHROMIUM_AUTOSTART"; then
        echo "Warning: could not add -nocursor to $CHROMIUM_AUTOSTART" >&2
    fi
else
    echo "Warning: DietPi Chromium startup script was not found; cursor was not disabled." >&2
fi

systemctl daemon-reload
systemctl enable 86log.service 86dash.service
systemctl restart 86dash.service

CAN_INTERFACE=$(sed -n 's/^GR86_CAN_INTERFACE=//p' /etc/default/gr86p | tail -n 1)
CAN_INTERFACE=${CAN_INTERFACE:-can0}
if ip link show "$CAN_INTERFACE" >/dev/null 2>&1; then
    systemctl restart 86log.service
    echo "Logger started on $CAN_INTERFACE."
else
    systemctl stop 86log.service 2>/dev/null || true
    echo "CAN interface $CAN_INTERFACE is not present yet."
    echo "Configure the adapter overlay/driver, reboot, then check: systemctl status 86log"
fi

apt-get clean

echo
echo "GR86P installation complete."
echo "Dashboard: http://127.0.0.1:8086/"
echo "Runtime settings: /etc/default/gr86p"
echo "Sessions: /opt/gr86p/sessions"
echo "Reboot after configuring CAN and HDMI."
