import glob
import time
from dataclasses import dataclass
import serial


@dataclass
class GnssLine:
    monotonic_time: float
    raw: str

# find the port of the gnss device
def find_gnss_port():
    ports = sorted(glob.glob("/dev/ttyACM*") + glob.glob("/dev/ttyUSB*"))

    if not ports:
        return None

    return ports[0]


class GnssReader:
    # init the gnss port
    def __init__(self, port=None, baudrate=9600):
        if port is None:
            port = find_gnss_port()

        if port is None:
            raise RuntimeError("No GNSS device found")

        self.ser = serial.Serial(
            port,
            baudrate=baudrate,
            timeout=1
        )

    # recieve a gnss frame
    def recv(self):
        raw = self.ser.readline()

        # skip if no message received
        if not raw:
            return None

        # decond the bytes to a string
        line = raw.decode("ascii", errors="ignore").strip()

        # skip if no message received
        if not line:
            return None

        return GnssLine(monotonic_time=time.monotonic(), raw=line)

    # close gnss port when done
    def close(self):
        self.ser.close()