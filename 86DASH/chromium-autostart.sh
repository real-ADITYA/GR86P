#!/bin/dash
# DietPi login entry point for the supervised 86DASH kiosk client.

STARTX=/usr/bin/xinit
[ "$(/usr/bin/id -u)" -eq 0 ] || STARTX=/usr/bin/startx

exec "$STARTX" /usr/local/bin/86dash-kiosk -- -nocursor
