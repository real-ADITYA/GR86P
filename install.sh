#!/usr/bin/env bash
set -Eeuo pipefail

if (( EUID != 0 )); then
    echo "Run this installer as root: sudo ./install.sh" >&2
    exit 1
fi

DIETPI_SOFTWARE=/boot/dietpi/dietpi-software
DIETPI_AUTOSTART=/boot/dietpi/dietpi-autostart
if [[ ! -x $DIETPI_SOFTWARE || ! -x $DIETPI_AUTOSTART ]]; then
    echo "DietPi tools not found in /boot/dietpi. Finish DietPi's first-run setup first." >&2
    exit 1
fi

SOURCE_ROOT=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
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

# Packages are only downloaded when missing, so re-running this offline (the car never has Internet) works.
MISSING=()
for package in python3 python3-can python3-serial iproute2; do
    dpkg -s "$package" >/dev/null 2>&1 || MISSING+=("$package")
done
if (( ${#MISSING[@]} )); then
    echo "Installing ${MISSING[*]} (needs Internet)..."
    apt-get update
    apt-get install -y --no-install-recommends "${MISSING[@]}"
fi
if [[ ! -x /usr/bin/chromium ]]; then
    echo "Installing DietPi Chromium kiosk support (needs Internet)..."
    "$DIETPI_SOFTWARE" install 113
fi
if [[ ! -f $SOURCE_ROOT/86DASH/web/index.html ]]; then
    echo "86DASH/web is missing: build the cockpit on the Mac first (see README)." >&2
    exit 1
fi

echo "Installing GR86 services to run from $SOURCE_ROOT..."
# The services run this folder in place; __GR86P__ marks where its path goes.
install_with_path() {
    sed "s|__GR86P__|$SOURCE_ROOT|g" "$1" > "$2"
    chmod "$3" "$2"
}
install -d -m 0755 "$SOURCE_ROOT/sessions"
install_with_path "$SOURCE_ROOT/86LOG/86log.service" /etc/systemd/system/86log.service 0644
install_with_path "$SOURCE_ROOT/86DASH/86dash.service" /etc/systemd/system/86dash.service 0644

if [[ ! -e /etc/default/gr86p ]]; then
    install -m 0644 "$SOURCE_ROOT/gr86p.env.example" /etc/default/gr86p
else
    echo "Keeping existing /etc/default/gr86p settings."
    # Sessions always live in $SOURCE_ROOT/sessions; drop any old override.
    sed -i '/^GR86_SESSIONS_DIR=/d' /etc/default/gr86p
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

# DietPi launches kiosk mode from the login console rather than ordering it
# after the web service. Replace its generated entry point with our small
# launcher: it starts X with an absolute client path, waits for port 8086, hides
# the cursor, and restarts Chromium if the browser exits.
CHROMIUM_AUTOSTART=/var/lib/dietpi/dietpi-software/installed/chromium-autostart.sh
# Both live outside GR86P so the kiosk user can run them even if GR86P is in /root.
install -m 0755 "$SOURCE_ROOT/86DASH/kiosk.sh" /usr/local/bin/86dash-kiosk
install -D -m 0644 "$SOURCE_ROOT/86DASH/wait.html" /usr/local/share/86dash/wait.html
install -m 0755 "$SOURCE_ROOT/86DASH/chromium-autostart.sh" "$CHROMIUM_AUTOSTART"

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

echo
echo "GR86P installation complete."
echo "Dashboard: http://127.0.0.1:8086/?oem&live"
echo "Runtime settings: /etc/default/gr86p"
echo "Sessions: $SOURCE_ROOT/sessions"
echo "Reboot after configuring CAN and HDMI."
