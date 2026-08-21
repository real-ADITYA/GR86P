import importlib.util
import json
from pathlib import Path
import tempfile
import time
from types import SimpleNamespace
import unittest


ROOT = Path(__file__).resolve().parents[1]


def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


dashboard = load_module("dashboard_server", ROOT / "86DASH/86_dash/server.py")
session_files = load_module("session_files_test", ROOT / "86LOG/session_files.py")


class DashboardDecodeTests(unittest.TestCase):
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
    def make_config(self, directory):
        return SimpleNamespace(
            SESSIONS_DIR=Path(directory),
            CAN_LOG_NAME="raw_can.log",
            GNSS_LOG_NAME="gnss.log",
        )

    def test_session_logs_and_clean_close_metadata(self):
        with tempfile.TemporaryDirectory() as directory:
            session = session_files.SessionFiles(self.make_config(directory))
            initial = json.loads(session.metadata_path.read_text(encoding="utf-8"))
            self.assertFalse(initial["closed_cleanly"])

            session.append_can(
                SimpleNamespace(
                    monotonic_time=session.started_monotonic + 1.25,
                    arb_id=0x123,
                    dlc=2,
                    data=b"\x01\xff",
                )
            )
            session.append_gnss(
                SimpleNamespace(
                    monotonic_time=session.started_monotonic + 1.5,
                    raw="$GPRMC,test",
                )
            )
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
            first = session_files.SessionFiles(self.make_config(directory))
            first.close()
            time.sleep(0.001)
            second = session_files.SessionFiles(self.make_config(directory))
            second.close()
            self.assertEqual(first.session_dir.name, "0001")
            self.assertEqual(second.session_dir.name, "0002")


if __name__ == "__main__":
    unittest.main()
