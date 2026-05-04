#!/usr/bin/env python3
"""
dashboard.py

Simple local GR86P dashboard.

Home tab:
- roads discovered map from combined database

Drives tab:
- individual drive list
- selected drive route map

Before running this, update the DB:
    python3 roads_builder.py --sessions /home/aditya/GR86P/sessions --db gr86p_dashboard.db

Then run:
    python3 dashboard.py --db gr86p_dashboard.db

Open:
    http://127.0.0.1:8080
"""

import argparse
import json
import sqlite3
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, unquote
from pathlib import Path


HTML = r"""<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>GR86P Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

  <style>
    :root {
      --bg: #f3f1ea;
      --panel: #fffdf8;
      --soft: #ebe7dc;
      --ink: #151515;
      --muted: #6f6a60;
      --line: #d4cec0;
      --dark: #1b1b1b;
      --good: #dcebd2;
      --warn: #efe1bd;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--ink);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .app {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 320px 1fr;
      gap: 14px;
      padding: 14px;
    }

    .left,
    .right {
      display: grid;
      gap: 14px;
      align-content: start;
    }

    .panel {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 14px;
    }

    .car-card {
      height: 220px;
      display: grid;
      align-content: space-between;
    }

    .car-top {
      display: flex;
      justify-content: space-between;
      color: var(--muted);
      font-size: 13px;
    }

    .car-placeholder {
      height: 126px;
      display: grid;
      place-items: center;
      border: 1px dashed var(--line);
      border-radius: 14px;
      background: var(--soft);
      color: var(--muted);
      font-weight: 800;
      letter-spacing: 0.08em;
    }

    .mini-status {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      font-size: 12px;
    }

    .mini-status div,
    .stat {
      background: #f8f5ed;
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 9px;
    }

    h2 {
      margin: 0 0 10px;
      font-size: 15px;
    }

    .label {
      color: var(--muted);
    }

    .value {
      font-weight: 800;
    }

    .quick-row {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--line);
      padding: 8px 0;
      font-size: 13px;
    }

    .quick-row:last-child {
      border-bottom: none;
    }

    .tabs {
      height: 50px;
      display: flex;
      align-items: end;
      gap: 4px;
      padding: 0 14px;
    }

    .tab {
      border: 1px solid var(--line);
      border-bottom: none;
      background: var(--panel);
      padding: 10px 16px;
      border-radius: 14px 14px 0 0;
      font-weight: 800;
      font-size: 13px;
      cursor: pointer;
      color: var(--muted);
      user-select: none;
    }

    .tab.active {
      color: var(--ink);
      background: white;
    }

    .topline {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: center;
      margin-bottom: 12px;
    }

    select,
    input,
    button {
      font: inherit;
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 9px 11px;
      background: white;
    }

    button {
      background: var(--dark);
      color: white;
      border-color: var(--dark);
      cursor: pointer;
    }

    .map {
      height: 520px;
      border: 1px solid var(--line);
      border-radius: 16px;
      overflow: hidden;
      background: var(--soft);
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-top: 12px;
    }

    .stat .big {
      font-size: 22px;
      font-weight: 900;
      margin-top: 4px;
    }

    .drives-layout {
      display: grid;
      grid-template-columns: 310px 1fr;
      gap: 12px;
      align-items: start;
    }

    .drives-sidebar {
      display: grid;
      gap: 10px;
    }

    .drive-list {
      display: grid;
      gap: 8px;
      max-height: 520px;
      overflow: auto;
      padding-right: 2px;
    }

    .drive-card {
      padding: 10px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: white;
      cursor: pointer;
    }

    .drive-card:hover {
      border-color: #999;
    }

    .drive-card.active {
      outline: 2px solid var(--dark);
    }

    .drive-title {
      font-size: 13px;
      font-weight: 900;
      margin-bottom: 4px;
    }

    .drive-meta {
      font-size: 12px;
      color: var(--muted);
      line-height: 1.45;
    }

    .pill {
      display: inline-block;
      padding: 2px 7px;
      border-radius: 999px;
      background: var(--soft);
      margin-top: 6px;
      margin-right: 4px;
      font-size: 11px;
      font-weight: 800;
    }

    .pill.good {
      background: var(--good);
    }

    .pill.warn {
      background: var(--warn);
    }

    .hidden {
      display: none;
    }

    @media (max-width: 1050px) {
      .app {
        grid-template-columns: 1fr;
      }

      .drives-layout {
        grid-template-columns: 1fr;
      }

      .drive-list {
        max-height: 300px;
      }

      .stats {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  </style>
</head>

<body>
  <div class="app">
    <div class="left">
      <section class="panel car-card">
        <div class="car-top">
          <div>
            <b>GR86P</b><br>
            Drive Intelligence System
          </div>
          <div>LOCAL</div>
        </div>

        <div class="car-placeholder">
          360 CAR LATER
        </div>

        <div class="mini-status">
          <div><span class="label">ODO</span><br><b>10k+</b></div>
          <div><span class="label">GNSS</span><br><b id="gnssCount">—</b></div>
          <div><span class="label">MODE</span><br><b>DB</b></div>
        </div>
      </section>

      <section class="panel">
        <h2>Quick Stats</h2>
        <div class="quick-row"><span class="label">Drives</span><span class="value" id="qDrives">—</span></div>
        <div class="quick-row"><span class="label">Discovered cells</span><span class="value" id="qCells">—</span></div>
        <div class="quick-row"><span class="label">GNSS miles</span><span class="value" id="qMiles">—</span></div>
        <div class="quick-row"><span class="label">Top speed</span><span class="value" id="qTop">—</span></div>
        <div class="quick-row"><span class="label">Max RPM</span><span class="value" id="qRpm">—</span></div>
      </section>
    </div>

    <div class="right">
      <nav class="tabs">
        <div class="tab active" onclick="showTab(event, 'home')">Home</div>
        <div class="tab" onclick="showTab(event, 'drives')">Drives</div>
        <div class="tab" onclick="showTab(event, 'xp')">XP</div>
        <div class="tab" onclick="showTab(event, 'season')">Season</div>
        <div class="tab" onclick="showTab(event, 'maintenance')">Maintenance</div>
      </nav>

      <section class="panel">
        <div class="topline">
          <div>
            <h2 id="title">Roads Discovered</h2>
            <div class="label" id="subtitle">All driven GNSS cells combined.</div>
          </div>
          <button onclick="reload()">Reload</button>
        </div>

        <div id="homeView">
          <div id="homeMap" class="map"></div>

          <div class="stats">
            <div class="stat"><span class="label">Unique Cells</span><div class="big" id="homeCells">—</div></div>
            <div class="stat"><span class="label">GNSS Drives</span><div class="big" id="homeGnss">—</div></div>
            <div class="stat"><span class="label">GNSS Miles</span><div class="big" id="homeMiles">—</div></div>
            <div class="stat"><span class="label">Exploration XP</span><div class="big" id="homeXp">—</div></div>
          </div>
        </div>

        <div id="drivesView" class="hidden">
          <div class="drives-layout">
            <div class="drives-sidebar">
              <input id="search" placeholder="Search drives">
              <select id="driveSelect" onchange="selectDrive(this.value)"></select>
              <div class="drive-list" id="driveList"></div>
            </div>

            <div>
              <div id="driveMap" class="map"></div>

              <div class="stats">
                <div class="stat"><span class="label">Duration</span><div class="big" id="dDuration">—</div></div>
                <div class="stat"><span class="label">Distance</span><div class="big" id="dDistance">—</div></div>
                <div class="stat"><span class="label">Max Speed</span><div class="big" id="dSpeed">—</div></div>
                <div class="stat"><span class="label">Max RPM</span><div class="big" id="dRpm">—</div></div>
              </div>
            </div>
          </div>
        </div>

        <div id="xpView" class="hidden">
          <h2>XP</h2>
          <p class="label">
            Keep this dumb at first: exploration XP = unique road cells.
            Fancy scoring can come after the data is trustworthy.
          </p>
        </div>

        <div id="seasonView" class="hidden">
          <h2>Season</h2>
          <p class="label">
            Season progress should eventually use odometer snapshots.
            For now, it uses GNSS miles after tracking started.
          </p>
        </div>

        <div id="maintenanceView" class="hidden">
          <h2>Maintenance</h2>
          <p class="label">
            Later: oil, tires, brakes, inspections, wash/detail, and manually logged service events.
          </p>
        </div>
      </section>
    </div>
  </div>

<script>
let sessions = [];
let selected = null;

let homeMap = null;
let driveMap = null;

let homeLayer = null;
let driveRoute = null;
let driveMarkers = null;

function fmt(v, digits=1, suffix="") {
  if (v === null || v === undefined || Number.isNaN(Number(v))) return "—";
  return Number(v).toFixed(digits) + suffix;
}

function intfmt(v) {
  if (v === null || v === undefined || Number.isNaN(Number(v))) return "—";
  return Math.round(Number(v)).toLocaleString();
}

function duration(sec) {
  if (sec === null || sec === undefined) return "—";

  sec = Number(sec);

  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);

  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

function shortName(id) {
  return String(id || "").replace("session_", "");
}

function makeMap(id) {
  const m = L.map(id).setView([39.0, -76.9], 10);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }).addTo(m);

  return m;
}

function initMaps() {
  if (!homeMap) homeMap = makeMap("homeMap");
  if (!driveMap) driveMap = makeMap("driveMap");
}

function showTab(evt, name) {
  for (const t of document.querySelectorAll(".tab")) {
    t.classList.remove("active");
  }

  evt.target.classList.add("active");

  for (const id of ["homeView", "drivesView", "xpView", "seasonView", "maintenanceView"]) {
    document.getElementById(id).classList.add("hidden");
  }

  document.getElementById(name + "View").classList.remove("hidden");

  const titles = {
    home: "Roads Discovered",
    drives: "Individual Drives",
    xp: "XP",
    season: "Season",
    maintenance: "Maintenance"
  };

  const subtitles = {
    home: "All driven GNSS cells combined.",
    drives: "Pick a drive to view its route.",
    xp: "Placeholder for later.",
    season: "Placeholder for later.",
    maintenance: "Placeholder for later."
  };

  document.getElementById("title").textContent = titles[name] || "GR86P";
  document.getElementById("subtitle").textContent = subtitles[name] || "";

  setTimeout(() => {
    if (homeMap) homeMap.invalidateSize();
    if (driveMap) driveMap.invalidateSize();
  }, 100);
}

async function reload() {
  const summary = await (await fetch("/api/summary")).json();
  sessions = await (await fetch("/api/sessions")).json();

  renderQuick(summary);
  renderDriveSelect();
  renderDriveList();
  await renderRoads();

  if (sessions.length && !selected) {
    await selectDrive(sessions[0].session_id);
  }
}

function renderQuick(summary) {
  document.getElementById("qDrives").textContent = intfmt(summary.total_sessions);
  document.getElementById("qCells").textContent = intfmt(summary.road_cells);
  document.getElementById("qMiles").textContent = fmt(summary.gnss_miles, 1, " mi");
  document.getElementById("qTop").textContent = fmt(summary.top_speed_mph, 1, " mph");
  document.getElementById("qRpm").textContent = intfmt(summary.max_rpm);

  document.getElementById("gnssCount").textContent =
    `${summary.gnss_sessions}/${summary.total_sessions}`;

  document.getElementById("homeCells").textContent = intfmt(summary.road_cells);
  document.getElementById("homeGnss").textContent = intfmt(summary.gnss_sessions);
  document.getElementById("homeMiles").textContent = fmt(summary.gnss_miles, 1, " mi");
  document.getElementById("homeXp").textContent = "+" + intfmt(summary.road_cells);
}

function renderDriveSelect() {
  const sel = document.getElementById("driveSelect");
  sel.innerHTML = "";

  for (const s of sessions) {
    const opt = document.createElement("option");
    opt.value = s.session_id;
    opt.textContent = shortName(s.session_id);
    sel.appendChild(opt);
  }
}

function filteredSessions() {
  const search = document.getElementById("search");
  const q = search ? search.value.toLowerCase().trim() : "";

  return sessions.filter(s => {
    return !q || String(s.session_id).toLowerCase().includes(q);
  });
}

function renderDriveList() {
  const el = document.getElementById("driveList");
  const list = filteredSessions();

  if (!list.length) {
    el.innerHTML = `<div class="label">No sessions found.</div>`;
    return;
  }

  el.innerHTML = "";

  for (const s of list) {
    const div = document.createElement("div");
    div.className = "drive-card" + (selected && selected.session_id === s.session_id ? " active" : "");
    div.onclick = async () => {
      await selectDrive(s.session_id);
    };

    const dist = s.gnss_distance_miles == null
      ? "no GNSS route"
      : fmt(s.gnss_distance_miles, 1, " mi");

    const top = s.max_speed_mph || s.gnss_max_speed_mph;

    div.innerHTML = `
      <div class="drive-title">${shortName(s.session_id)}</div>
      <div class="drive-meta">
        ${duration(s.duration_sec)} · ${dist}<br>
        Top ${fmt(top, 1, " mph")}
      </div>
      <span class="pill ${s.has_gnss ? "good" : "warn"}">${s.has_gnss ? "GNSS" : "no map"}</span>
      <span class="pill">${s.has_summary ? "summary" : "raw"}</span>
    `;

    el.appendChild(div);
  }
}

async function renderRoads() {
  const data = await (await fetch("/api/roads")).json();

  if (homeLayer) {
    homeMap.removeLayer(homeLayer);
    homeLayer = null;
  }

  const group = L.layerGroup();
  const latlngs = [];

  for (const p of data.cells) {
    const ll = [p.center_lat, p.center_lon];
    latlngs.push(ll);

    L.circleMarker(ll, {
      radius: 2,
      weight: 0,
      fillOpacity: 0.75
    }).addTo(group);
  }

  homeLayer = group.addTo(homeMap);

  if (latlngs.length) {
    homeMap.fitBounds(L.latLngBounds(latlngs), {
      padding: [24, 24]
    });
  }
}

async function selectDrive(id) {
  selected = sessions.find(s => s.session_id === id);
  if (!selected) return;

  document.getElementById("driveSelect").value = id;

  renderDriveList();
  renderSelectedStats();
  await renderDriveRoute(id);
}

function renderSelectedStats() {
  const s = selected;
  const speed = s.max_speed_mph || s.gnss_max_speed_mph;

  document.getElementById("dDuration").textContent = duration(s.duration_sec);

  document.getElementById("dDistance").textContent =
    s.gnss_distance_miles == null
      ? "—"
      : fmt(s.gnss_distance_miles, 1, " mi");

  document.getElementById("dSpeed").textContent = fmt(speed, 1, " mph");
  document.getElementById("dRpm").textContent = intfmt(s.max_rpm);
}

async function renderDriveRoute(id) {
  const data = await (await fetch(`/api/route/${encodeURIComponent(id)}`)).json();

  if (driveRoute) {
    driveMap.removeLayer(driveRoute);
    driveRoute = null;
  }

  if (driveMarkers) {
    driveMap.removeLayer(driveMarkers);
    driveMarkers = null;
  }

  if (!data.points || !data.points.length) {
    driveMap.setView([39.0, -76.9], 10);
    return;
  }

  const latlngs = data.points.map(p => [p.lat, p.lon]);

  driveRoute = L.polyline(latlngs, {
    weight: 4
  }).addTo(driveMap);

  driveMarkers = L.layerGroup().addTo(driveMap);

  L.marker(latlngs[0]).addTo(driveMarkers).bindPopup("Start");
  L.marker(latlngs[latlngs.length - 1]).addTo(driveMarkers).bindPopup("End");

  driveMap.fitBounds(driveRoute.getBounds(), {
    padding: [24, 24]
  });
}

document.addEventListener("input", evt => {
  if (evt.target && evt.target.id === "search") {
    renderDriveList();
  }
});

initMaps();
reload();
</script>
</body>
</html>
"""


class Handler(BaseHTTPRequestHandler):
    db_path = None

    def log_message(self, fmt, *args):
        return

    def send(self, body, content_type="text/html; charset=utf-8", status=200):
        if isinstance(body, str):
            body = body.encode("utf-8")

        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def send_json(self, obj, status=200):
        self.send(json.dumps(obj), "application/json", status)

    def db(self):
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        return conn

    def do_GET(self):
        path = urlparse(self.path).path

        if path == "/":
            self.send(HTML)
            return

        if path == "/api/summary":
            with self.db() as conn:
                total_sessions = conn.execute(
                    "SELECT COUNT(*) FROM sessions"
                ).fetchone()[0]

                gnss_sessions = conn.execute(
                    "SELECT COUNT(*) FROM sessions WHERE has_gnss = 1"
                ).fetchone()[0]

                road_cells = conn.execute(
                    "SELECT COUNT(*) FROM road_cells"
                ).fetchone()[0]

                gnss_miles = conn.execute(
                    "SELECT COALESCE(SUM(gnss_distance_miles), 0) FROM sessions"
                ).fetchone()[0]

                top_speed = conn.execute(
                    "SELECT MAX(COALESCE(max_speed_mph, gnss_max_speed_mph, 0)) FROM sessions"
                ).fetchone()[0]

                max_rpm = conn.execute(
                    "SELECT MAX(COALESCE(max_rpm, 0)) FROM sessions"
                ).fetchone()[0]

                self.send_json({
                    "total_sessions": total_sessions,
                    "gnss_sessions": gnss_sessions,
                    "road_cells": road_cells,
                    "gnss_miles": gnss_miles,
                    "top_speed_mph": top_speed,
                    "max_rpm": max_rpm,
                })

            return

        if path == "/api/sessions":
            with self.db() as conn:
                rows = conn.execute("""
                    SELECT *
                    FROM sessions
                    ORDER BY COALESCE(start_wall_time, 0) DESC
                """).fetchall()

                self.send_json([dict(r) for r in rows])

            return

        if path == "/api/roads":
            with self.db() as conn:
                rows = conn.execute("""
                    SELECT
                        cell_id,
                        center_lat,
                        center_lon,
                        hit_count,
                        first_seen_session,
                        last_seen_session
                    FROM road_cells
                    ORDER BY hit_count DESC
                """).fetchall()

                self.send_json({
                    "cells": [dict(r) for r in rows]
                })

            return

        if path.startswith("/api/route/"):
            session_id = unquote(path.split("/api/route/", 1)[1])

            with self.db() as conn:
                rows = conn.execute("""
                    SELECT
                        wall_time,
                        lat,
                        lon,
                        speed_mph,
                        course_deg,
                        satellites,
                        hdop,
                        altitude_m
                    FROM route_points
                    WHERE session_id = ?
                    ORDER BY point_index
                """, (session_id,)).fetchall()

                self.send_json({
                    "session_id": session_id,
                    "points": [dict(r) for r in rows]
                })

            return

        self.send_json({"error": "not found"}, 404)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--db", default="gr86p_dashboard.db")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8080)

    args = parser.parse_args()

    db_path = Path(args.db).expanduser().resolve()

    if not db_path.exists():
        raise SystemExit(
            f"DB does not exist yet: {db_path}\n"
            "Run roads_builder.py first."
        )

    Handler.db_path = str(db_path)

    print(f"DB: {db_path}")
    print(f"Open: http://{args.host}:{args.port}")
    print("Ctrl+C to stop")

    server = ThreadingHTTPServer((args.host, args.port), Handler)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()