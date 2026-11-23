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


class DashboardServerTests(unittest.TestCase):
    def test_dashboard_does_not_import_logger(self):
        source = (ROOT / "86DASH/server.py").read_text(encoding="utf-8")
        self.assertNotIn("from main import", source)

    def test_cockpit_is_bundled_for_offline_use(self):
        self.assertTrue((ROOT / "86DASH/web/index.html").is_file())
        self.assertTrue((ROOT / "86DASH/web/tiles/richmond/tiles.bin").is_file())
        self.assertTrue((ROOT / "86DASH/web/assets/vehicles/gr86/gr86.glb").is_file())
        for page in [ROOT / "86DASH/web/index.html", *(ROOT / "86DASH/web/assets").glob("*.js")]:
            text = page.read_text(encoding="utf-8")
            self.assertNotIn("https://", text, f"{page.name} loads something from the Internet")

    def test_reads_nmea_from_both_gnss_log_formats(self):
        self.assertEqual(dashboard.nmea_of("12.500000 $GPRMC,1*00\n"), "$GPRMC,1*00")
        self.assertEqual(dashboard.nmea_of('{"wall_time": 1.0, "raw": "$GPGGA,2*00", "parsed": null}'), "$GPGGA,2*00")
        self.assertIsNone(dashboard.nmea_of("12.5 garbage"))

    def test_byte_ranges(self):
        self.assertEqual(dashboard.byte_range("bytes=0-99", 1000), (0, 99))
        self.assertEqual(dashboard.byte_range("bytes=900-", 1000), (900, 999))
        self.assertEqual(dashboard.byte_range("bytes=-100", 1000), (900, 999))
        self.assertEqual(dashboard.byte_range("bytes=0-5000", 1000), (0, 999))
        self.assertIsNone(dashboard.byte_range("bytes=2000-3000", 1000))
        self.assertIsNone(dashboard.byte_range(None, 1000))

    def test_serves_only_files_inside_web(self):
        self.assertEqual(dashboard.web_file("/?oem&live"), dashboard.WEB / "index.html")
        self.assertIsNone(dashboard.web_file("/../server.py"))
        self.assertIsNone(dashboard.web_file("/missing.js"))

    def test_feed_hands_each_client_only_newer_events(self):
        feed = dashboard.Feed(keep=3)
        for k in range(5):
            feed.add("c", [k, 0x40, "00"])
        seq, events = feed.after(2, 0)
        self.assertEqual(seq, 5)
        self.assertEqual([e[2][0] for e in events], [2, 3, 4])
        self.assertEqual(feed.after(5, 0), (5, []))

    def test_last_fix_comes_from_the_newest_session_with_one(self):
        self.assertEqual(dashboard.position_of("$GPGGA,120000.00,4221.5000,N,07103.6000,W,1,09,0.9,45.0,M,-33.0,M,,*00"),
                         (42 + 21.5 / 60, -(71 + 3.6 / 60)))
        self.assertIsNone(dashboard.position_of("$GPRMC,120002.00,V,,,,,,,211126,,,N*00"))
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "0007").mkdir()
            (root / "0007" / "gnss.log").write_text(
                "1.0 $GPRMC,120000.00,A,3732.1000,N,07726.4000,W,10.0,90.0,211126,,,A*00\n", encoding="ascii")
            (root / "0008").mkdir()  # this drive: no fix yet
            (root / "0008" / "gnss.log").write_text("0.5 $GPRMC,120002.00,V,,,,,,,211126,,,N*00\n", encoding="ascii")
            dashboard.LAST_FIX.update(at=0.0, fix=None)
            lat, lon = dashboard.last_fix(root)
            self.assertAlmostEqual(lat, 37 + 32.1 / 60)
            self.assertAlmostEqual(lon, -(77 + 26.4 / 60))

    def test_session_number_is_the_newest_numbered_folder(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for name in ("0009", "0010", "notes"):
                (root / name).mkdir()
            with patch.object(dashboard, "SESSIONS", root):
                self.assertEqual(dashboard.session_name(), "0010")
            with patch.object(dashboard, "SESSIONS", root / "missing"):
                self.assertIsNone(dashboard.session_name())


class DashboardStartupTests(unittest.TestCase):
    def test_kiosk_waits_for_server_and_uses_absolute_chromium_path(self):
        kiosk = (ROOT / "86DASH/kiosk.sh").read_text(encoding="utf-8")
        display = (ROOT / "86DASH/chromium-autostart.sh").read_text(encoding="utf-8")
        installer = (ROOT / "install.sh").read_text(encoding="utf-8")
        wait = (ROOT / "86DASH/wait.html").read_text(encoding="utf-8")
        self.assertIn("file:///usr/local/share/86dash/wait.html", kiosk)
        self.assertIn("http://127.0.0.1:8086/state", wait)
        self.assertIn("/usr/bin/chromium", kiosk)
        self.assertIn("while true", kiosk)
        self.assertIn("/usr/local/bin/86dash-kiosk", display)
        self.assertIn('"$SOURCE_ROOT/86DASH/chromium-autostart.sh"', installer)

    def test_kiosk_selects_the_panels_native_mode_only_when_offered(self):
        import subprocess
        kiosk = (ROOT / "86DASH/kiosk.sh").read_text(encoding="utf-8")
        self.assertIn("--mode 1280x400", kiosk)
        self.assertNotIn("/boot", kiosk)
        program = kiosk.split("awk '", 1)[1].split("'", 1)[0]
        query = (
            "Screen 0: minimum 320 x 200, current 1920 x 1080, maximum 7680 x 7680\n"
            "HDMI-1 connected primary 1920x1080+0+0 (normal) 0mm x 0mm\n"
            "   1920x1080     60.00*+\n"
            "   1280x400      60.00 \n"
            "HDMI-2 disconnected (normal)\n"
        )
        run = lambda text: subprocess.run(["awk", program], input=text, capture_output=True, text=True).stdout.split()
        self.assertEqual(run(query), ["HDMI-1"])
        self.assertEqual(run(query.replace("60.00*+", "60.00 +").replace("60.00 \n", "60.00*\n", 1)), [])
        self.assertEqual(run(query.replace("   1280x400      60.00 \n", "")), [])

    def test_dashboard_service_does_not_wait_for_logger(self):
        service = (ROOT / "86DASH/86dash.service").read_text(encoding="utf-8")
        self.assertNotIn("After=86log.service", service)
        self.assertIn("Restart=always", service)


class SessionFileTests(unittest.TestCase):
    def test_sessions_live_in_project_folder(self):
        self.assertEqual(logger.SESSIONS_DIR, ROOT / "sessions")

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
