#!/usr/bin/env python3
"""
roads_builder.py

Incrementally combines GR86P drive data into a local SQLite DB.

Main idea:
- Each session folder is treated as a source.
- Each gnss.log is processed only if it is new or changed.
- Each summary.json is processed only if it is new or changed.
- The home page can show "roads discovered" from unique GNSS grid cells.

Run:
    python3 roads_builder.py --sessions /home/aditya/GR86P/sessions --db gr86p_dashboard.db

Force full rebuild:
    python3 roads_builder.py --sessions /home/aditya/GR86P/sessions --db gr86p_dashboard.db --rebuild
"""

import argparse
import json
import math
import sqlite3
from pathlib import Path


def haversine_miles(lat1, lon1, lat2, lon2):
    r = 3958.7613
    p1 = math.radians(lat1)
    p2 = math.radians(lat2)
    dp = math.radians(lat2 - lat1)
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return r * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))


def safe_get(d, keys, default=None):
    cur = d
    for key in keys:
        if not isinstance(cur, dict) or key not in cur:
            return default
        cur = cur[key]
    return cur


def init_db(db_path: Path, rebuild=False):
    if rebuild and db_path.exists():
        db_path.unlink()

    conn = sqlite3.connect(db_path)
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS source_files (
            path TEXT PRIMARY KEY,
            session_id TEXT NOT NULL,
            file_type TEXT NOT NULL,
            size_bytes INTEGER NOT NULL,
            mtime_ns INTEGER NOT NULL,
            processed_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS sessions (
            session_id TEXT PRIMARY KEY,
            session_dir TEXT NOT NULL,
            has_summary INTEGER DEFAULT 0,
            has_gnss INTEGER DEFAULT 0,
            season TEXT,
            start_wall_time REAL,
            end_wall_time REAL,
            duration_sec REAL,
            can_frame_count INTEGER,
            max_rpm REAL,
            max_speed_mph REAL,
            avg_speed_mph REAL,
            brake_light_events INTEGER,
            max_oil_temp_c REAL,
            max_coolant_temp_c REAL,
            gnss_fix_count INTEGER DEFAULT 0,
            gnss_distance_miles REAL,
            gnss_max_speed_mph REAL,
            start_lat REAL,
            start_lon REAL,
            end_lat REAL,
            end_lon REAL,
            updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS route_points (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            point_index INTEGER NOT NULL,
            wall_time REAL,
            lat REAL NOT NULL,
            lon REAL NOT NULL,
            speed_mph REAL,
            course_deg REAL,
            satellites INTEGER,
            hdop REAL,
            altitude_m REAL
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS road_cells (
            cell_id TEXT PRIMARY KEY,
            lat_cell INTEGER NOT NULL,
            lon_cell INTEGER NOT NULL,
            center_lat REAL NOT NULL,
            center_lon REAL NOT NULL,
            first_seen_session TEXT NOT NULL,
            first_seen_wall_time REAL,
            last_seen_session TEXT NOT NULL,
            last_seen_wall_time REAL,
            hit_count INTEGER NOT NULL DEFAULT 1
        )
    """)

    cur.execute("CREATE INDEX IF NOT EXISTS idx_route_session ON route_points(session_id)")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_route_time ON route_points(session_id, wall_time)")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_cells_lat_lon ON road_cells(lat_cell, lon_cell)")
    conn.commit()
    return conn


def file_signature(path: Path):
    st = path.stat()
    return st.st_size, st.st_mtime_ns


def file_already_processed(conn, path: Path, session_id: str, file_type: str):
    if not path.exists():
        return True

    size, mtime_ns = file_signature(path)
    row = conn.execute("""
        SELECT size_bytes, mtime_ns
        FROM source_files
        WHERE path = ? AND session_id = ? AND file_type = ?
    """, (str(path), session_id, file_type)).fetchone()

    return row is not None and row[0] == size and row[1] == mtime_ns


def mark_processed(conn, path: Path, session_id: str, file_type: str):
    size, mtime_ns = file_signature(path)
    conn.execute("""
        INSERT OR REPLACE INTO source_files (
            path, session_id, file_type, size_bytes, mtime_ns, processed_at
        )
        VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    """, (str(path), session_id, file_type, size, mtime_ns))


def load_summary(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return None


def process_summary(conn, session_dir: Path):
    session_id = session_dir.name
    summary_path = session_dir / "summary.json"

    if not summary_path.exists():
        conn.execute("""
            INSERT OR IGNORE INTO sessions (session_id, session_dir)
            VALUES (?, ?)
        """, (session_id, str(session_dir)))
        return False

    if file_already_processed(conn, summary_path, session_id, "summary"):
        return False

    summary = load_summary(summary_path)
    if not summary:
        return False

    session_id = summary.get("session_id") or session_dir.name

    conn.execute("""
        INSERT OR REPLACE INTO sessions (
            session_id, session_dir, has_summary, season,
            start_wall_time, end_wall_time, duration_sec,
            can_frame_count, max_rpm, max_speed_mph, avg_speed_mph,
            brake_light_events, max_oil_temp_c, max_coolant_temp_c,
            gnss_fix_count, gnss_distance_miles, gnss_max_speed_mph,
            start_lat, start_lon, end_lat, end_lon,
            updated_at
        )
        VALUES (?, ?, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    """, (
        session_id,
        str(session_dir),
        summary.get("season"),
        safe_get(summary, ["time", "start_wall_time"]),
        safe_get(summary, ["time", "end_wall_time"]),
        safe_get(summary, ["time", "duration_sec"]),
        safe_get(summary, ["can", "frame_count"]),
        safe_get(summary, ["can", "max_rpm"]),
        safe_get(summary, ["can", "max_speed_mph"]),
        safe_get(summary, ["can", "avg_speed_mph"]),
        safe_get(summary, ["can", "brake_light_events"]),
        safe_get(summary, ["can", "max_oil_temp_c"]),
        safe_get(summary, ["can", "max_coolant_temp_c"]),
        safe_get(summary, ["gnss", "fix_count"]),
        safe_get(summary, ["gnss", "distance_miles"]),
        safe_get(summary, ["gnss", "max_speed_mph"]),
        safe_get(summary, ["gnss", "start", "lat"]),
        safe_get(summary, ["gnss", "start", "lon"]),
        safe_get(summary, ["gnss", "end", "lat"]),
        safe_get(summary, ["gnss", "end", "lon"]),
    ))

    mark_processed(conn, summary_path, session_id, "summary")
    return True


def iter_gnss_points(path: Path):
    if not path.exists():
        return

    with path.open("r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue

            try:
                rec = json.loads(line)
            except Exception:
                continue

            parsed = rec.get("parsed")
            if not isinstance(parsed, dict):
                continue

            lat = parsed.get("lat")
            lon = parsed.get("lon")
            if lat is None or lon is None:
                continue

            try:
                lat = float(lat)
                lon = float(lon)
            except Exception:
                continue

            if not (-90 <= lat <= 90 and -180 <= lon <= 180):
                continue

            yield {
                "wall_time": rec.get("wall_time"),
                "lat": lat,
                "lon": lon,
                "speed_mph": parsed.get("speed_mph"),
                "course_deg": parsed.get("course_deg"),
                "satellites": parsed.get("satellites"),
                "hdop": parsed.get("hdop"),
                "altitude_m": parsed.get("altitude_m"),
            }


def cell_for_point(lat, lon, precision):
    scale = 10 ** precision
    lat_cell = int(round(lat * scale))
    lon_cell = int(round(lon * scale))
    cell_id = f"{precision}:{lat_cell}:{lon_cell}"
    center_lat = lat_cell / scale
    center_lon = lon_cell / scale
    return cell_id, lat_cell, lon_cell, center_lat, center_lon


def process_gnss(conn, session_dir: Path, precision=4, min_point_spacing_m=8.0):
    session_id = session_dir.name
    gnss_path = session_dir / "gnss.log"

    if not gnss_path.exists():
        return False

    if file_already_processed(conn, gnss_path, session_id, "gnss"):
        return False

    # Rebuild this session's route_points if the GNSS file changed.
    conn.execute("DELETE FROM route_points WHERE session_id = ?", (session_id,))

    points = []
    prev_kept = None
    idx = 0

    for p in iter_gnss_points(gnss_path) or []:
        cur = (p["lat"], p["lon"])

        if prev_kept is not None:
            spacing = haversine_miles(prev_kept[0], prev_kept[1], cur[0], cur[1]) * 1609.344
            if spacing < min_point_spacing_m:
                continue

        points.append(p)
        prev_kept = cur

        conn.execute("""
            INSERT INTO route_points (
                session_id, point_index, wall_time, lat, lon, speed_mph,
                course_deg, satellites, hdop, altitude_m
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            session_id, idx, p["wall_time"], p["lat"], p["lon"], p["speed_mph"],
            p["course_deg"], p["satellites"], p["hdop"], p["altitude_m"]
        ))

        idx += 1

        cell_id, lat_cell, lon_cell, center_lat, center_lon = cell_for_point(
            p["lat"], p["lon"], precision
        )

        conn.execute("""
            INSERT INTO road_cells (
                cell_id, lat_cell, lon_cell, center_lat, center_lon,
                first_seen_session, first_seen_wall_time,
                last_seen_session, last_seen_wall_time,
                hit_count
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
            ON CONFLICT(cell_id) DO UPDATE SET
                last_seen_session = excluded.last_seen_session,
                last_seen_wall_time = excluded.last_seen_wall_time,
                hit_count = road_cells.hit_count + 1
        """, (
            cell_id, lat_cell, lon_cell, center_lat, center_lon,
            session_id, p["wall_time"],
            session_id, p["wall_time"],
        ))

    if points:
        dist = 0.0
        speeds = []
        last = None

        for p in points:
            if p["speed_mph"] is not None:
                try:
                    speeds.append(float(p["speed_mph"]))
                except Exception:
                    pass

            cur = (p["lat"], p["lon"])
            if last is not None:
                step = haversine_miles(last[0], last[1], cur[0], cur[1])
                if 0 <= step < 0.25:
                    dist += step
            last = cur

        conn.execute("""
            INSERT INTO sessions (
                session_id, session_dir, has_gnss, season,
                gnss_fix_count, gnss_distance_miles, gnss_max_speed_mph,
                start_lat, start_lon, end_lat, end_lon, updated_at
            )
            VALUES (?, ?, 1, 'season_1', ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(session_id) DO UPDATE SET
                has_gnss = 1,
                season = COALESCE(sessions.season, 'season_1'),
                gnss_fix_count = excluded.gnss_fix_count,
                gnss_distance_miles = excluded.gnss_distance_miles,
                gnss_max_speed_mph = excluded.gnss_max_speed_mph,
                start_lat = COALESCE(sessions.start_lat, excluded.start_lat),
                start_lon = COALESCE(sessions.start_lon, excluded.start_lon),
                end_lat = excluded.end_lat,
                end_lon = excluded.end_lon,
                updated_at = CURRENT_TIMESTAMP
        """, (
            session_id, str(session_dir),
            len(points), dist, max(speeds) if speeds else None,
            points[0]["lat"], points[0]["lon"],
            points[-1]["lat"], points[-1]["lon"],
        ))

    mark_processed(conn, gnss_path, session_id, "gnss")
    return True


def scan_sessions(conn, sessions_dir: Path, precision=4):
    loaded = 0
    changed = 0

    for session_dir in sorted(sessions_dir.iterdir()):
        if not session_dir.is_dir() or not session_dir.name.startswith("session_"):
            continue

        loaded += 1
        summary_changed = process_summary(conn, session_dir)
        gnss_changed = process_gnss(conn, session_dir, precision=precision)

        if summary_changed or gnss_changed:
            changed += 1
            conn.commit()
            print(f"Updated {session_dir.name}")
        else:
            print(f"Skipped {session_dir.name}: unchanged")

    return loaded, changed


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--sessions", required=True)
    parser.add_argument("--db", default="gr86p_dashboard.db")
    parser.add_argument("--rebuild", action="store_true")
    parser.add_argument("--precision", type=int, default=4, help="GNSS grid precision. 4 is about 11m; 5 is about 1m.")
    args = parser.parse_args()

    sessions_dir = Path(args.sessions).expanduser().resolve()
    db_path = Path(args.db).expanduser().resolve()

    if not sessions_dir.exists():
        raise SystemExit(f"Sessions folder does not exist: {sessions_dir}")

    conn = init_db(db_path, rebuild=args.rebuild)
    loaded, changed = scan_sessions(conn, sessions_dir, precision=args.precision)

    total_cells = conn.execute("SELECT COUNT(*) FROM road_cells").fetchone()[0]
    total_points = conn.execute("SELECT COUNT(*) FROM route_points").fetchone()[0]
    conn.close()

    print()
    print(f"Sessions found: {loaded}")
    print(f"Sessions updated: {changed}")
    print(f"Discovered road cells: {total_cells}")
    print(f"Stored route points: {total_points}")
    print(f"DB: {db_path}")


if __name__ == "__main__":
    main()
