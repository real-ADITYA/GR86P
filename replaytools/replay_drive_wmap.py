import json
import math
import sys
from pathlib import Path


SAMPLE_HZ = 10
SAMPLE_STEP = 1.0 / SAMPLE_HZ


def bits_le(data, start, length):
    val = 0
    for i, byte in enumerate(data):
        val |= byte << (8 * i)
    mask = (1 << length) - 1
    return (val >> start) & mask


def u16_le(data, i):
    return data[i] | (data[i + 1] << 8)


def s16_le(data, i):
    v = u16_le(data, i)
    return v - 65536 if v >= 32768 else v


def clamp(v, lo, hi):
    return max(lo, min(hi, v))


def parse_can_line(line):
    parts = line.strip().split()
    if len(parts) < 4:
        return None

    try:
        ts = float(parts[0])
        can_id = int(parts[1], 16)
        dlc = int(parts[2])
        data = [int(x, 16) for x in parts[3:3 + dlc]]
        return ts, can_id, data
    except Exception:
        return None


def parse_gnss_line(line):
    try:
        rec = json.loads(line)
    except Exception:
        return None

    parsed = rec.get("parsed")
    if not parsed:
        return None

    lat = parsed.get("lat")
    lon = parsed.get("lon")
    ts = rec.get("wall_time")

    if lat is None or lon is None or ts is None:
        return None

    return {
        "time": float(ts),
        "lat": float(lat),
        "lon": float(lon),
        "speed_mph": parsed.get("speed_mph"),
        "course_deg": parsed.get("course_deg"),
        "altitude_m": parsed.get("altitude_m"),
        "satellites": parsed.get("satellites"),
        "hdop": parsed.get("hdop"),
        "type": parsed.get("type"),
    }


def decode_can(state, can_id, data):
    if can_id == 0x040 and len(data) >= 5:
        state["rpm"] = bits_le(data, 16, 14)
        state["neutral"] = bool(data[3] & 0x80)
        state["throttle_pct"] = round(data[4] / 2.55, 1)

    elif can_id == 0x138 and len(data) >= 6:
        state["steering_angle_deg"] = round(s16_le(data, 2) * -0.1, 1)
        state["yaw_rate"] = round(s16_le(data, 4) * -0.2725, 2)

    elif can_id == 0x139 and len(data) >= 6:
        state["speed_mph"] = round(bits_le(data, 16, 13) * 0.015694, 2)
        state["brake_lights_on"] = bool(data[4] & 0x04)
        state["brake_pct"] = round(clamp((data[5] * 128) / 4096.0 * 100.0, 0, 100), 1)

    elif can_id == 0x13A and len(data) >= 8:
        state["wheel_fl_mph"] = round(bits_le(data, 12, 13) * 0.015694, 2)
        state["wheel_fr_mph"] = round(bits_le(data, 25, 13) * 0.015694, 2)
        state["wheel_rl_mph"] = round(bits_le(data, 38, 13) * 0.015694, 2)
        state["wheel_rr_mph"] = round(bits_le(data, 51, 13) * 0.015694, 2)

    elif can_id == 0x13B and len(data) >= 8:
        lat_raw = data[6] - 256 if data[6] >= 128 else data[6]
        long_raw = data[7] - 256 if data[7] >= 128 else data[7]
        state["lat_accel_g"] = round(lat_raw * 0.2, 2)
        state["long_accel_g"] = round(long_raw * -0.1, 2)

    elif can_id == 0x228 and len(data) >= 3:
        state["reverse"] = bool(data[2] & 0x01)

    elif can_id == 0x241 and len(data) >= 6:
        state["clutch_pressed"] = bool(data[5] & 0x80)
        state["gear"] = bits_le(data, 35, 3)

    elif can_id == 0x345 and len(data) >= 5:
        state["oil_temp_c"] = data[3] - 40
        state["coolant_temp_c"] = data[4] - 40

    elif can_id == 0x390 and len(data) >= 5:
        state["air_temp_c"] = data[4] / 2.0 - 40

    elif can_id == 0x393 and len(data) >= 6:
        state["fuel_pct"] = round(100.0 - (bits_le(data, 32, 10) / 10.23), 1)

    elif can_id == 0x6E2 and len(data) >= 7:
        state["tpms_fl_kpa"] = round((data[3] >> 1) * 6.8948, 1)
        state["tpms_fr_kpa"] = round((data[4] >> 1) * 6.8948, 1)
        state["tpms_rl_kpa"] = round((data[5] >> 1) * 6.8948, 1)
        state["tpms_rr_kpa"] = round((data[6] >> 1) * 6.8948, 1)


def load_can(path):
    frames = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            parsed = parse_can_line(line)
            if parsed:
                frames.append(parsed)
    frames.sort(key=lambda x: x[0])
    return frames


def load_gnss(path):
    points = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            parsed = parse_gnss_line(line)
            if parsed:
                points.append(parsed)
    points.sort(key=lambda x: x["time"])
    return points


def default_state():
    return {
        "rpm": 0,
        "speed_mph": 0.0,
        "gnss_speed_mph": None,
        "throttle_pct": 0.0,
        "brake_pct": 0.0,
        "brake_lights_on": False,
        "steering_angle_deg": 0.0,
        "yaw_rate": 0.0,
        "lat_accel_g": 0.0,
        "long_accel_g": 0.0,
        "gear": 0,
        "neutral": False,
        "reverse": False,
        "clutch_pressed": False,
        "fuel_pct": None,
        "oil_temp_c": None,
        "coolant_temp_c": None,
        "air_temp_c": None,
        "wheel_fl_mph": None,
        "wheel_fr_mph": None,
        "wheel_rl_mph": None,
        "wheel_rr_mph": None,
        "tpms_fl_kpa": None,
        "tpms_fr_kpa": None,
        "tpms_rl_kpa": None,
        "tpms_rr_kpa": None,
        "lat": None,
        "lon": None,
        "course_deg": None,
        "altitude_m": None,
        "satellites": None,
        "hdop": None,
    }


def build_samples(can_frames, gnss_points):
    if not can_frames and not gnss_points:
        return []

    start_time = min(
        can_frames[0][0] if can_frames else float("inf"),
        gnss_points[0]["time"] if gnss_points else float("inf"),
    )

    end_time = max(
        can_frames[-1][0] if can_frames else 0,
        gnss_points[-1]["time"] if gnss_points else 0,
    )

    state = default_state()
    samples = []

    can_i = 0
    gnss_i = 0
    t = start_time

    while t <= end_time:
        while can_i < len(can_frames) and can_frames[can_i][0] <= t:
            _, can_id, data = can_frames[can_i]
            decode_can(state, can_id, data)
            can_i += 1

        while gnss_i < len(gnss_points) and gnss_points[gnss_i]["time"] <= t:
            p = gnss_points[gnss_i]
            state["lat"] = p["lat"]
            state["lon"] = p["lon"]
            state["gnss_speed_mph"] = p.get("speed_mph")
            state["course_deg"] = p.get("course_deg")
            state["altitude_m"] = p.get("altitude_m")
            state["satellites"] = p.get("satellites")
            state["hdop"] = p.get("hdop")
            gnss_i += 1

        sample = dict(state)
        sample["t"] = round(t - start_time, 3)
        samples.append(sample)

        t += SAMPLE_STEP

    return samples


def make_html(samples, output_path):
    valid_points = [
        [s["lat"], s["lon"]]
        for s in samples
        if s.get("lat") is not None and s.get("lon") is not None
    ]

    center = valid_points[0] if valid_points else [0, 0]

    html = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>GR86 Drive Replay</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    body {{
      margin: 0;
      font-family: Arial, sans-serif;
      background: white;
      color: black;
    }}
    #layout {{
      display: grid;
      grid-template-columns: 2fr 1fr;
      height: 100vh;
    }}
    #map {{
      height: 100vh;
      width: 100%;
    }}
    #panel {{
      padding: 16px;
      overflow-y: auto;
      border-left: 1px solid #ccc;
      background: white;
    }}
    h1 {{
      margin: 0 0 10px 0;
      font-size: 24px;
    }}
    .controls {{
      display: flex;
      gap: 8px;
      margin: 12px 0;
      flex-wrap: wrap;
    }}
    button {{
      padding: 8px 12px;
      border: 1px solid black;
      background: white;
      cursor: pointer;
      font-size: 14px;
    }}
    button:hover {{
      background: #eee;
    }}
    input[type=range] {{
      width: 100%;
    }}
    .big {{
      font-size: 36px;
      font-weight: bold;
      margin: 10px 0;
    }}
    .row {{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding: 5px 0;
      font-size: 14px;
    }}
    .label {{
      font-weight: bold;
    }}
    .bar-wrap {{
      border: 1px solid black;
      height: 18px;
      width: 100%;
      margin: 4px 0 10px 0;
    }}
    .bar {{
      height: 100%;
      width: 0%;
      background: black;
    }}
    .small {{
      color: #555;
      font-size: 12px;
      margin-top: 12px;
    }}
  </style>
</head>
<body>
<div id="layout">
  <div id="map"></div>
  <div id="panel">
    <h1>GR86 Drive Replay</h1>
    <div class="small">Real map tiles require internet access unless cached.</div>

    <div class="controls">
      <button onclick="skip(-5)">-5s</button>
      <button onclick="togglePlay()" id="playBtn">Pause</button>
      <button onclick="skip(5)">+5s</button>
    </div>

    <input id="scrubber" type="range" min="0" max="0" value="0" step="0.1" oninput="scrubTo(this.value)">

    <div class="big" id="speed">0.0 mph</div>

    <div class="row"><span class="label">Time</span><span id="time">0.0 / 0.0s</span></div>
    <div class="row"><span class="label">RPM</span><span id="rpm">0</span></div>
    <div class="row"><span class="label">Gear</span><span id="gear">-</span></div>
    <div class="row"><span class="label">Lat/Lon</span><span id="latlon">-</span></div>
    <div class="row"><span class="label">GNSS Speed</span><span id="gnssspeed">-</span></div>
    <div class="row"><span class="label">Course</span><span id="course">-</span></div>
    <div class="row"><span class="label">Altitude</span><span id="altitude">-</span></div>
    <div class="row"><span class="label">Satellites / HDOP</span><span id="satellites">-</span></div>

    <p><b>Throttle</b></p>
    <div class="bar-wrap"><div class="bar" id="throttleBar"></div></div>

    <p><b>Brake</b></p>
    <div class="bar-wrap"><div class="bar" id="brakeBar"></div></div>

    <div class="row"><span class="label">Brake Lights</span><span id="brakelights">-</span></div>
    <div class="row"><span class="label">Clutch</span><span id="clutch">-</span></div>
    <div class="row"><span class="label">Steering</span><span id="steering">-</span></div>
    <div class="row"><span class="label">Yaw</span><span id="yaw">-</span></div>
    <div class="row"><span class="label">Lat/Long Accel</span><span id="accel">-</span></div>
    <div class="row"><span class="label">Oil / Coolant / Air</span><span id="temps">-</span></div>
    <div class="row"><span class="label">Fuel</span><span id="fuel">-</span></div>
    <div class="row"><span class="label">Wheel Speeds</span><span id="wheels">-</span></div>
    <div class="row"><span class="label">TPMS</span><span id="tpms">-</span></div>

    <div class="small">
      Keyboard: Space = play/pause, Left = -5s, Right = +5s
    </div>
  </div>
</div>

<script>
const samples = {json.dumps(samples)};
const route = {json.dumps(valid_points)};
const center = {json.dumps(center)};

let idx = 0;
let playing = true;
let timer = null;
let playbackRate = 1.0;

const map = L.map('map').setView(center, 16);

L.tileLayer('https://tile.openstreetmap.org/{{z}}/{{x}}/{{y}}.png', {{
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}}).addTo(map);

let routeLine = null;
let drivenLine = null;
let marker = null;

if (route.length > 0) {{
  routeLine = L.polyline(route, {{color: '#999', weight: 4}}).addTo(map);
  drivenLine = L.polyline([], {{color: '#0057ff', weight: 5}}).addTo(map);
  marker = L.circleMarker(route[0], {{
    radius: 8,
    color: 'black',
    fillColor: '#0057ff',
    fillOpacity: 1
  }}).addTo(map);
  map.fitBounds(routeLine.getBounds(), {{padding: [30, 30]}});
}}

const totalTime = samples.length ? samples[samples.length - 1].t : 0;
document.getElementById("scrubber").max = totalTime;

function fmt(v, digits=1, suffix="") {{
  if (v === null || v === undefined) return "-";
  if (typeof v === "number") return v.toFixed(digits) + suffix;
  return v + suffix;
}}

function gearText(s) {{
  if (s.neutral) return "N";
  if (s.reverse) return "R";
  if (!s.gear) return "-";
  return String(s.gear);
}}

function setBar(id, pct) {{
  pct = Math.max(0, Math.min(100, pct || 0));
  document.getElementById(id).style.width = pct + "%";
}}

function updateUI() {{
  if (!samples.length) return;

  const s = samples[idx];

  document.getElementById("speed").innerText = fmt(s.speed_mph, 1, " mph");
  document.getElementById("time").innerText = fmt(s.t, 1, "s") + " / " + fmt(totalTime, 1, "s");
  document.getElementById("rpm").innerText = s.rpm ?? "-";
  document.getElementById("gear").innerText = gearText(s);

  if (s.lat !== null && s.lon !== null) {{
    document.getElementById("latlon").innerText = s.lat.toFixed(6) + ", " + s.lon.toFixed(6);
  }} else {{
    document.getElementById("latlon").innerText = "-";
  }}

  document.getElementById("gnssspeed").innerText = fmt(s.gnss_speed_mph, 1, " mph");
  document.getElementById("course").innerText = fmt(s.course_deg, 1, "°");
  document.getElementById("altitude").innerText = fmt(s.altitude_m, 1, " m");
  document.getElementById("satellites").innerText = `${{s.satellites ?? "-"}} / ${{s.hdop ?? "-"}}`;

  setBar("throttleBar", s.throttle_pct);
  setBar("brakeBar", s.brake_pct);

  document.getElementById("brakelights").innerText = s.brake_lights_on ? "ON" : "OFF";
  document.getElementById("clutch").innerText = s.clutch_pressed ? "DOWN" : "UP";
  document.getElementById("steering").innerText = fmt(s.steering_angle_deg, 1, "°");
  document.getElementById("yaw").innerText = fmt(s.yaw_rate, 2);
  document.getElementById("accel").innerText = `${{fmt(s.lat_accel_g, 2, "g")}} / ${{fmt(s.long_accel_g, 2, "g")}}`;
  document.getElementById("temps").innerText =
    `${{fmt(s.oil_temp_c, 1, "C")}} / ${{fmt(s.coolant_temp_c, 1, "C")}} / ${{fmt(s.air_temp_c, 1, "C")}}`;
  document.getElementById("fuel").innerText = fmt(s.fuel_pct, 1, "%");

  document.getElementById("wheels").innerText =
    `FL ${{fmt(s.wheel_fl_mph, 1)}} FR ${{fmt(s.wheel_fr_mph, 1)}} RL ${{fmt(s.wheel_rl_mph, 1)}} RR ${{fmt(s.wheel_rr_mph, 1)}}`;

  document.getElementById("tpms").innerText =
    `FL ${{fmt(s.tpms_fl_kpa, 1)}} FR ${{fmt(s.tpms_fr_kpa, 1)}} RL ${{fmt(s.tpms_rl_kpa, 1)}} RR ${{fmt(s.tpms_rr_kpa, 1)}} kPa`;

  document.getElementById("scrubber").value = s.t;

  if (marker && s.lat !== null && s.lon !== null) {{
    const latlng = [s.lat, s.lon];
    marker.setLatLng(latlng);

    let driven = [];
    for (let i = 0; i <= idx; i++) {{
      if (samples[i].lat !== null && samples[i].lon !== null) {{
        driven.push([samples[i].lat, samples[i].lon]);
      }}
    }}
    drivenLine.setLatLngs(driven);
  }}
}}

function setIndexFromTime(t) {{
  t = Math.max(0, Math.min(totalTime, Number(t)));
  let best = 0;

  for (let i = 0; i < samples.length; i++) {{
    if (samples[i].t <= t) best = i;
    else break;
  }}

  idx = best;
  updateUI();
}}

function scrubTo(t) {{
  setIndexFromTime(t);
}}

function skip(seconds) {{
  const current = samples[idx]?.t || 0;
  setIndexFromTime(current + seconds);
}}

function togglePlay() {{
  playing = !playing;
  document.getElementById("playBtn").innerText = playing ? "Pause" : "Play";
}}

function step() {{
  if (playing && idx < samples.length - 1) {{
    idx++;
    updateUI();
  }}
}}

document.addEventListener("keydown", (e) => {{
  if (e.code === "Space") {{
    e.preventDefault();
    togglePlay();
  }} else if (e.code === "ArrowLeft") {{
    skip(-5);
  }} else if (e.code === "ArrowRight") {{
    skip(5);
  }}
}});

updateUI();
timer = setInterval(step, 1000 / {SAMPLE_HZ});
</script>
</body>
</html>
"""

    output_path.write_text(html, encoding="utf-8")


def main():
    if len(sys.argv) < 3:
        print("Usage: python3 replay_drive_map_ui.py <raw_can.log> <gnss.log> [output.html]")
        sys.exit(1)

    can_path = Path(sys.argv[1])
    gnss_path = Path(sys.argv[2])
    output_path = Path(sys.argv[3]) if len(sys.argv) >= 4 else Path("drive_replay.html")

    if not can_path.exists():
        print(f"CAN log not found: {can_path}")
        sys.exit(1)

    if not gnss_path.exists():
        print(f"GNSS log not found: {gnss_path}")
        sys.exit(1)

    print("Loading CAN...")
    can_frames = load_can(can_path)
    print(f"Loaded {len(can_frames)} CAN frames")

    print("Loading GNSS...")
    gnss_points = load_gnss(gnss_path)
    print(f"Loaded {len(gnss_points)} GNSS points")

    print("Building replay samples...")
    samples = build_samples(can_frames, gnss_points)
    print(f"Built {len(samples)} samples at {SAMPLE_HZ} Hz")

    print(f"Writing {output_path}...")
    make_html(samples, output_path)

    print("Done.")
    print(f"Open this file in a browser: {output_path.resolve()}")


if __name__ == "__main__":
    main()
