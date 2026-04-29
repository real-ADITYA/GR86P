import glob
import time
import serial

# finds the port on the pi
def find_gnss_port():
    candidates = glob.glob("/dev/ttyACM*") + glob.glob("/dev/ttyUSB*")
    if not candidates:
        return None
    return candidates[0]

# useful helper to convert NMEA lat/lon to decimal degrees
def nmea_to_decimal(raw, direction):
    if not raw or not direction:
        return None
    value = float(raw)
    degrees = int(value / 100)
    minutes = value - (degrees * 100)
    decimal = degrees + (minutes / 60.0)
    if direction in ("S", "W"):
        decimal *= -1
    return decimal

# simple NMEA parser that extracts basic info from RMC and GGA sentences
def parse_rmc(parts):
    # Example: $GNRMC,time,status,lat,N,lon,W,speed_knots,course,date,...
    if len(parts) < 10:
        return None

    if parts[2] != "A":
        return None

    lat = nmea_to_decimal(parts[3], parts[4])
    lon = nmea_to_decimal(parts[5], parts[6])

    speed_knots = float(parts[7]) if parts[7] else 0.0
    speed_mph = speed_knots * 1.15078

    course_deg = float(parts[8]) if parts[8] else None

    return {
        "type": "RMC",
        "lat": lat,
        "lon": lon,
        "speed_mph": round(speed_mph, 3),
        "course_deg": course_deg,
        "fix_valid": True,
    }

# GGA has more detailed info about the fix, number of satellites, HDOP, altitude, etc
def parse_gga(parts):
    # Example: $GNGGA,time,lat,N,lon,W,fix_quality,num_sats,hdop,altitude,M,...
    if len(parts) < 10:
        return None

    fix_quality = int(parts[6]) if parts[6].isdigit() else 0
    if fix_quality == 0:
        return None

    lat = nmea_to_decimal(parts[2], parts[3])
    lon = nmea_to_decimal(parts[4], parts[5])
    sats = int(parts[7]) if parts[7].isdigit() else None
    hdop = float(parts[8]) if parts[8] else None
    altitude_m = float(parts[9]) if parts[9] else None

    return {
        "type": "GGA",
        "lat": lat,
        "lon": lon,
        "fix_quality": fix_quality,
        "satellites": sats,
        "hdop": hdop,
        "altitude_m": altitude_m,
    }

# main GNSS reader class that opens the serial port and reads lines, parsing them into structured records
def parse_nmea(line):
    if not line.startswith("$"):
        return None

    line = line.split("*")[0]
    parts = line.split(",")

    sentence = parts[0]

    if sentence.endswith("RMC"):
        return parse_rmc(parts)

    if sentence.endswith("GGA"):
        return parse_gga(parts)

    return None

# simple GNSS reader that reads lines from the serial port and parses them into structured records
class GnssReader:
    def __init__(self, port=None, baudrate=9600):
        if port is None:
            port = find_gnss_port()

        if port is None:
            raise RuntimeError("No GNSS serial device found")

        self.port = port
        self.ser = serial.Serial(port, baudrate=baudrate, timeout=1)

    def recv(self):
        raw = self.ser.readline()
        if not raw:
            return None

        try:
            line = raw.decode("ascii", errors="ignore").strip()
        except Exception:
            return None

        parsed = parse_nmea(line)

        return {
            "wall_time": time.time(),
            "raw": line,
            "parsed": parsed,
        }
