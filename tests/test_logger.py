import importlib.util
from pathlib import Path
import sys
import threading
from types import ModuleType, SimpleNamespace
import unittest
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
LOGGER_ROOT = ROOT / "86LOG"

# The development Mac does not need the Pi-only runtime libraries. Minimal
# module stubs let this test exercise logger control flow without hardware.
sys.modules.setdefault("can", ModuleType("can"))
sys.modules.setdefault("serial", ModuleType("serial"))
sys.path.insert(0, str(LOGGER_ROOT))

spec = importlib.util.spec_from_file_location("logger_main_test", LOGGER_ROOT / "main.py")
logger_main = importlib.util.module_from_spec(spec)
spec.loader.exec_module(logger_main)

from can_reader import CanReader


class GnssReconnectTests(unittest.TestCase):
    def test_reader_retries_then_records(self):
        stop_event = threading.Event()

        class FakeReader:
            attempts = 0
            closes = 0

            def __init__(self, port, baudrate):
                del port, baudrate
                type(self).attempts += 1
                if self.attempts == 1:
                    raise RuntimeError("device is still enumerating")
                self.port = "/dev/ttyACM0"

            def recv(self):
                return SimpleNamespace(raw="$GPRMC,test")

            def close(self):
                type(self).closes += 1

        class FakeSession:
            def __init__(self):
                self.lines = []
                self.flushes = []

            def append_gnss(self, line):
                self.lines.append(line)
                stop_event.set()

            def flush_gnss(self, fsync=False):
                self.flushes.append(fsync)

        session = FakeSession()
        with patch.object(logger_main.cfg, "GNSS_RETRY_SECONDS", 0):
            logger_main.gnss_loop(session, stop_event, reader_factory=FakeReader)

        self.assertEqual(FakeReader.attempts, 2)
        self.assertEqual(FakeReader.closes, 1)
        self.assertEqual(len(session.lines), 1)
        self.assertEqual(session.flushes, [False])


class CanReaderTests(unittest.TestCase):
    def test_preserves_socketcan_error_frame_flag(self):
        message = SimpleNamespace(
            arbitration_id=0x0C,
            dlc=8,
            data=b"\x00\x30\x02\x00\x00\x00\x00\x00",
            is_error_frame=True,
        )
        reader = CanReader.__new__(CanReader)
        reader.bus = SimpleNamespace(recv=lambda timeout: message)

        frame = reader.recv(timeout=1.0)

        self.assertTrue(frame.is_error_frame)


if __name__ == "__main__":
    unittest.main()
