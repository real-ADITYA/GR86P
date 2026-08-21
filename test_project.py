"""Small hardware-free checks for 86LOG and 86DASH."""

import importlib.util
import json
from pathlib import Path
import sys
import tempfile
import threading
import time
from types import ModuleType, SimpleNamespace
import unittest
from unittest.mock import patch


ROOT = Path(__file__).resolve().parent

# Development machines do not need the Pi-only runtime libraries.
sys.modules.setdefault("can", ModuleType("can"))
sys.modules.setdefault("serial", ModuleType("serial"))


def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


logger = load_module("logger_main_test", ROOT / "86LOG/main.py")
dashboard = load_module("dashboard_server_test", ROOT / "86DASH/server.py")


class DashboardDecodeTests(unittest.TestCase):
    def test_dashboard_finds_consolidated_logger(self):
        sys.path.insert(0, str(dashboard.LOGGER_ROOT))
        try:
            import main as dashboard_logger
        finally:
            sys.path.pop(0)
        self.assertEqual(dashboard.LOGGER_ROOT, ROOT / "86LOG")
        self.assertTrue(hasattr(dashboard_logger, "CanReader"))

    def test_rmc_decode(self):
        state, fixed = dashboard.decode_nmea(
            "$GPRMC,123519,A,4807.038,N,01131.000,E,22.4,84.4,230394,003.1,W*6A"
        )
        self.assertTrue(fixed)
        self.assertAlmostEqual(state["lat"], 48.1173)
        self.assertAlmostEqual(state["lon"], 11.5166667)
        self.assertAlmostEqual(state["gnss_speed"], 22.4 * 1.15078)

    def test_rpm_decode(self):
        state = dashboard.decode_can(0x040, bytes([0, 0, 0x34, 0x12, 128]))
        self.assertEqual(state["rpm"], 0x1234)


class SessionFileTests(unittest.TestCase):
    def test_session_logs_and_clean_close_metadata(self):
        with tempfile.TemporaryDirectory() as directory:
            session = logger.SessionFiles(directory)
            initial = json.loads(session.metadata_path.read_text(encoding="utf-8"))
            self.assertFalse(initial["closed_cleanly"])

            session.append_can(SimpleNamespace(
                monotonic_time=session.started_monotonic + 1.25,
                arb_id=0x123,
                dlc=2,
                data=b"\x01\xff",
            ))
            session.append_gnss(SimpleNamespace(
                monotonic_time=session.started_monotonic + 1.5,
                raw="$GPRMC,test",
            ))
            session.close()

            self.assertEqual(
                (session.session_dir / "raw_can.log").read_text(encoding="utf-8").strip(),
                "1.250000 123 2 01 FF",
            )
            self.assertEqual(
                (session.session_dir / "gnss.log").read_text(encoding="utf-8").strip(),
                "1.500000 $GPRMC,test",
            )
            final = json.loads(session.metadata_path.read_text(encoding="utf-8"))
            self.assertTrue(final["closed_cleanly"])
            self.assertGreaterEqual(final["duration_seconds"], 0)

    def test_session_numbers_increment(self):
        with tempfile.TemporaryDirectory() as directory:
            first = logger.SessionFiles(directory)
            first.close()
            time.sleep(0.001)
            second = logger.SessionFiles(directory)
            second.close()
            self.assertEqual(first.session_dir.name, "0001")
            self.assertEqual(second.session_dir.name, "0002")


class HardwareReaderTests(unittest.TestCase):
    def test_can_error_frame_is_preserved(self):
        message = SimpleNamespace(
            arbitration_id=0x0C,
            dlc=8,
            data=b"\x00\x30\x02\x00\x00\x00\x00\x00",
            is_error_frame=True,
        )
        reader = logger.CanReader.__new__(logger.CanReader)
        reader.bus = SimpleNamespace(recv=lambda timeout: message)
        self.assertTrue(reader.recv(timeout=1.0).is_error_frame)

    def test_gnss_reconnects_then_records(self):
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
        with patch.object(logger, "GNSS_RETRY_SECONDS", 0):
            logger.gnss_loop(session, stop_event, reader_factory=FakeReader)

        self.assertEqual(FakeReader.attempts, 2)
        self.assertEqual(FakeReader.closes, 1)
        self.assertEqual(len(session.lines), 1)
        self.assertEqual(session.flushes, [False])


if __name__ == "__main__":
    unittest.main()
