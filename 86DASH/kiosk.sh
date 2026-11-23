#!/bin/sh
# Runs inside DietPi's X session: keeps Chromium on the screen. It opens a local waiting page at once
# (so the screen is never just black), which switches to the cockpit when 86DASH answers.
# Chromium's output goes to /tmp/86dash-kiosk.log (RAM) for diagnosing a blank screen.

LOG=/tmp/86dash-kiosk.log

# Never blank the screen or let it power down (X's default screen saver and DPMS).
command -v xset >/dev/null && xset s off s noblank -dpms

# The cockpit is drawn for the panel's native 1280x400. X starts in whatever mode the connected screen
# advertises first, which after plugging in another monitor can be a non-native one that the panel then
# stretches to the wrong shape. Select 1280x400 on the connected output whenever it is offered and not
# already active: at start, and every few seconds so a reconnected screen comes back right. Only switches
# between modes the screen itself lists; it never invents one and never edits the boot configuration.
fit_display() {
    command -v xrandr >/dev/null || return 0
    xrandr --query 2>/dev/null | awk '
        / connected/ { out = $1; next }
        / disconnected/ { out = ""; next }
        out != "" && /^   / && $1 == "1280x400" { has[out] = 1; if (index($0, "*")) cur[out] = 1 }
        END { for (o in has) if (!(o in cur)) print o }' | while read -r output
    do
        echo "$(date '+%F %T') setting $output to 1280x400" >> "$LOG"
        xrandr --output "$output" --mode 1280x400 >> "$LOG" 2>&1
    done
}
fit_display
command -v xrandr >/dev/null && xrandr --query >> "$LOG" 2>&1
( while sleep 5; do fit_display; done ) &

while true
do
    echo "$(date '+%F %T') starting chromium" >> "$LOG"
    /usr/bin/chromium \
        --kiosk \
        --window-size=1280,400 \
        --window-position=0,0 \
        --no-first-run \
        --noerrdialogs \
        --disable-infobars \
        --disable-session-crashed-bubble \
        --disable-pinch \
        --overscroll-history-navigation=0 \
        --user-data-dir=/tmp/86dash-chromium \
        file:///usr/local/share/86dash/wait.html >> "$LOG" 2>&1
    echo "$(date '+%F %T') chromium exited with status $?" >> "$LOG"
    sleep 1
done
