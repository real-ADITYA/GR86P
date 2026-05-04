#!/usr/bin/env bash

SESSIONS="/home/aditya/sessions"
DB="gr86p_dashboard.db"

echo "Deleting summary.json files..."
find "$SESSIONS" -name "summary.json" -type f -delete

echo "Deleting dashboard database..."
rm -f "$DB"

echo "Done."