#!/usr/bin/env bash

SESSIONS="/home/aditya/sessions"
DIR="/home/aditya/GR86P"
DB="gr86p_dashboard.db"

echo "Building summarizer..."
cd summarize
make all

echo "Creating summary.json files..."
./summarize "$SESSIONS"

make clean
cd "$DIR"

echo "Updating dashboard database..."
python3 dashboard/roads_builder.py --sessions "$SESSIONS" --db "$DB"

echo "Starting dashboard..."
python3 dashboard/dashboard.py --db "$DB"