#!/usr/bin/env python3
"""
roads_builder.py

Builds or updates the local GR86P dashboard SQLite database.

Typical usage:
    python3 dashboard/roads_builder.py --sessions /home/aditya/GR86P/sessions --db gr86p_dashboard.db
    python3 dashboard/roads_builder.py --sessions /home/aditya/GR86P/sessions --db gr86p_dashboard.db --rebuild

What it does:
- Scans session_* folders
- Reads summary.json for valid session metadata
- Reads gnss.log for route points when GNSS exists
- Stores everything in SQLite
- Rebuilds a "roads discovered" layer from all saved route points
- Prunes DB rows for session folders that were deleted or no longer have summary.json

Important:
- This assumes summarize.c already removed useless sessions and generated summary.json
- If a session has no summary.json, it is ignored and pruned from the DB
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


def load_json(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return None


def init_db(db_path: Path, rebuild=False):
    if rebuild and db_path.exists():
        db_path.unlink()

    conn = sqlite3.connect(db_path)

    conn.execute("""
        CREATE TABLE IF NOT EXISTS source_files (
            path TEXT PRIMARY KEY,
            session_id TEXT NOT NULL,
            file_type TEXT NOT NULL,
            size_bytes INTEGER NOT NULL,
            mtime_ns INTEGER NOT NULL,
            processed_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    """)

    conn.execute("""
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

    conn.execute("""
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

    conn.execute("""
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

    conn.execute("CREATE INDEX IF NOT EXISTS idx_route_session ON route_points(session_id)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_route_time ON route_points(session_id, wall_time)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_cells_lat_lon ON road_cells(lat_cell, lon_cell)")
    conn.commit()

    return conn


def delete_session_from_db(conn, session_id):
    conn.execute("DELETE FROM route_points WHERE session_id = ?", (session_id,))
    conn.execute("DELETE FROM sessions WHERE session_id = ?", (session_id,))
    conn.execute("DELETE FROM source_files WHERE session_id = ?", (session_id,))


def prune_invalid_sessions(conn):
    rows = conn.execute("SELECT session_id, session_dir FROM sessions").fetchall()
    removed = 0

    for session_id, session_dir in rows:
        session_path = Path(session_dir)
        summary_path = session_path / "summary.json"

        if not session_path.exists() or not summary_path.exists():
            delete_session_from_db(conn, session_id)
            removed += 1

    conn.commit()

    if removed:
        print(f"Pruned {removed} stale/deleted sessions from DB")


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


def process_summary(conn, session_dir: Path):
    session_id = session_dir.name
    summary_path = session_dir / "summary.json"

    if not summary_path.exists():
        delete_session_from_db(conn, session_id)
        return False

    if file_already_processed(conn, summary_path, session_id, "summary"):
        return False

    summary = load_json(summary_path)

    if not summary:
        delete_session_from_db(conn, session_id)
        return False

    session_id = summary.get("session_id") or session_dir.name
    gnss_available = bool(safe_get(summary, ["gnss", "available"], False))
    gnss_fix_count = safe_get(summary, ["gnss", "fix_count"], 0) or 0

    conn.execute("""
        INSERT OR REPLACE INTO sessions (
            session_id,
            session_dir,
            has_summary,
            has_gnss,
            season,
            start_wall_time,
            end_wall_time,
            duration_sec,
            can_frame_count,
            max_rpm,
            max_speed_mph,
            avg_speed_mph,
            brake_light_events,
            max_oil_temp_c,
            max_coolant_temp_c,
            gnss_fix_count,
            gnss_distance_miles,
            gnss_max_speed_mph,
            start_lat,
            start_lon,
            end_lat,
            end_lon,
            updated_at
        )
        VALUES (?, ?, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    """, (
        session_id,
        str(session_dir),
        1 if gnss_available and gnss_fix_count > 0 else 0,
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
        gnss_fix_count,
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
    """
    Yields parsed GNSS points from gnss.log.
    Expects one JSON object per line, matching your logger format.
    """
    if not path.exists():
        return

    with path.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue

            try:
                obj = json.loads(line)
            except Exception:
                continue

            parsed = obj.get("parsed")
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
                "wall_time": obj.get("wall_time"),
                "lat": lat,
                "lon": lon,
                "speed_mph": parsed.get("speed_mph"),
                "course_deg": parsed.get("course_deg"),
                "satellites": parsed.get("satellites"),
                "hdop": parsed.get("hdop"),
                "altitude_m": parsed.get("altitude_m"),
            }


def process_gnss(conn, session_dir: Path):
    session_id = session_dir.name
    gnss_path = session_dir / "gnss.log"
    summary_path = session_dir / "summary.json"

    if not summary_path.exists():
        delete_session_from_db(conn, session_id)
        return False

    summary = load_json(summary_path)
    if not summary:
        delete_session_from_db(conn, session_id)
        return False

    session_id = summary.get("session_id") or session_dir.name

    gnss_available = bool(safe_get(summary, ["gnss", "available"], False))
    gnss_fix_count = safe_get(summary, ["gnss", "fix_count"], 0) or 0

    if not gnss_available or gnss_fix_count <= 0 or not gnss_path.exists():
        conn.execute("DELETE FROM route_points WHERE session_id = ?", (session_id,))
        return False

    if file_already_processed(conn, gnss_path, session_id, "gnss"):
        return False

    conn.execute("DELETE FROM route_points WHERE session_id = ?", (session_id,))

    point_index = 0
    inserted = 0
    last_lat = None
    last_lon = None

    for point in iter_gnss_points(gnss_path):
        lat = point["lat"]
        lon = point["lon"]

        # tiny dedupe so repeated identical points do not bloat DB
        if last_lat is not None and last_lon is not None:
            if abs(lat - last_lat) < 1e-9 and abs(lon - last_lon) < 1e-9:
                continue

        conn.execute("""
            INSERT INTO route_points (
                session_id,
                point_index,
                wall_time,
                lat,
                lon,
                speed_mph,
                course_deg,
                satellites,
                hdop,
                altitude_m
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            session_id,
            point_index,
            point.get("wall_time"),
            lat,
            lon,
            point.get("speed_mph"),
            point.get("course_deg"),
            point.get("satellites"),
            point.get("hdop"),
            point.get("altitude_m"),
        ))

        point_index += 1
        inserted += 1
        last_lat = lat
        last_lon = lon

    if inserted > 0:
        mark_processed(conn, gnss_path, session_id, "gnss")

    return inserted > 0


def cell_for_point(lat: float, lon: float, precision: float):
    """
    precision is in degrees.
    Example:
        0.0005 deg is a decent simple grid size for a discovered-roads layer.
    """
    lat_cell = int(math.floor(lat / precision))
    lon_cell = int(math.floor(lon / precision))
    center_lat = (lat_cell + 0.5) * precision
    center_lon = (lon_cell + 0.5) * precision
    cell_id = f"{lat_cell}:{lon_cell}:{precision}"
    return cell_id, lat_cell, lon_cell, center_lat, center_lon


def rebuild_road_cells(conn, precision: float):
    conn.execute("DELETE FROM road_cells")

    rows = conn.execute("""
        SELECT session_id, wall_time, lat, lon
        FROM route_points
        ORDER BY wall_time IS NULL, wall_time, session_id, point_index
    """).fetchall()

    seen = {}

    for session_id, wall_time, lat, lon in rows:
        cell_id, lat_cell, lon_cell, center_lat, center_lon = cell_for_point(lat, lon, precision)

        if cell_id not in seen:
            seen[cell_id] = {
                "lat_cell": lat_cell,
                "lon_cell": lon_cell,
                "center_lat": center_lat,
                "center_lon": center_lon,
                "first_seen_session": session_id,
                "first_seen_wall_time": wall_time,
                "last_seen_session": session_id,
                "last_seen_wall_time": wall_time,
                "hit_count": 1,
            }
        else:
            entry = seen[cell_id]
            entry["last_seen_session"] = session_id
            entry["last_seen_wall_time"] = wall_time
            entry["hit_count"] += 1

    for cell_id, entry in seen.items():
        conn.execute("""
            INSERT INTO road_cells (
                cell_id,
                lat_cell,
                lon_cell,
                center_lat,
                center_lon,
                first_seen_session,
                first_seen_wall_time,
                last_seen_session,
                last_seen_wall_time,
                hit_count
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            cell_id,
            entry["lat_cell"],
            entry["lon_cell"],
            entry["center_lat"],
            entry["center_lon"],
            entry["first_seen_session"],
            entry["first_seen_wall_time"],
            entry["last_seen_session"],
            entry["last_seen_wall_time"],
            entry["hit_count"],
        ))


def scan_sessions(conn, sessions_dir: Path, precision: float):
    summary_updates = 0
    gnss_updates = 0

    session_dirs = sorted(
        p for p in sessions_dir.iterdir()
        if p.is_dir() and p.name.startswith("session_")
    )

    for session_dir in session_dirs:
        changed_summary = process_summary(conn, session_dir)
        changed_gnss = process_gnss(conn, session_dir)

        if changed_summary:
            summary_updates += 1
        if changed_gnss:
            gnss_updates += 1

    # Always rebuild road cells from current route_points so deleted sessions do not linger.
    rebuild_road_cells(conn, precision)
    conn.commit()

    return summary_updates, gnss_updates


def print_stats(conn):
    session_count = conn.execute("SELECT COUNT(*) FROM sessions").fetchone()[0]
    gnss_session_count = conn.execute("SELECT COUNT(*) FROM sessions WHERE has_gnss = 1").fetchone()[0]
    route_point_count = conn.execute("SELECT COUNT(*) FROM route_points").fetchone()[0]
    road_cell_count = conn.execute("SELECT COUNT(*) FROM road_cells").fetchone()[0]

    print(f"Sessions in DB:       {session_count}")
    print(f"GNSS sessions:        {gnss_session_count}")
    print(f"Route points:         {route_point_count}")
    print(f"Road cells:           {road_cell_count}")


def main():
    parser = argparse.ArgumentParser(description="Build/update GR86P dashboard DB")
    parser.add_argument("--sessions", required=True, help="Path to sessions directory")
    parser.add_argument("--db", required=True, help="Path to SQLite DB")
    parser.add_argument(
        "--precision",
        type=float,
        default=0.0005,
        help="Grid size in degrees for roads discovered layer (default: 0.0005)"
    )
    parser.add_argument(
        "--rebuild",
        action="store_true",
        help="Delete and rebuild the SQLite DB from scratch"
    )

    args = parser.parse_args()

    sessions_dir = Path(args.sessions)
    db_path = Path(args.db)

    if not sessions_dir.exists() or not sessions_dir.is_dir():
        raise SystemExit(f"Sessions directory not found: {sessions_dir}")

    conn = init_db(db_path, rebuild=args.rebuild)
    prune_invalid_sessions(conn)
    summary_updates, gnss_updates = scan_sessions(conn, sessions_dir, precision=args.precision)

    print(f"Updated summaries:    {summary_updates}")
    print(f"Updated GNSS logs:    {gnss_updates}")
    print_stats(conn)

    conn.close()


if __name__ == "__main__":
    main()