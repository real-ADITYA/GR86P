#!/usr/bin/env python3
"""
Simple decoder for 2022+ Toyota GR86 / Subaru BRZ raw CAN logs.

Input format expected:
    <timestamp> <can_id_hex> <dlc> <byte0> <byte1> ... <byteN>

Example:
    1776194039.216195 139 8 78 55 00 E0 08 00 E5 1C

This decoder focuses on signals known to exist on the 2022+ GR86 DCM bus,
plus a few extra user-supplied bit mappings.

Output:
    CSV with one row per *decoded* frame ("event" style output).
    Each row contains timestamp, CAN ID, and only the signals decoded from that frame.

Usage:
    python3 decode_can.py raw_can.log decoded_can.csv
"""

from __future__ import annotations

import argparse
import csv
import time
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Tuple


Frame = Tuple[float, int, int, bytes]


def parse_line(line: str) -> Optional[Frame]:
    parts = line.strip().split()
    if len(parts) < 4:
        return None

    try:
        timestamp = float(parts[0])
        can_id = int(parts[1], 16)
        dlc = int(parts[2])
        data = bytes(int(x, 16) for x in parts[3:3 + dlc])
    except ValueError:
        return None

    if len(data) != dlc:
        return None

    return (timestamp, can_id, dlc, data)


def u8(data: bytes, index: int) -> int:
    return data[index]


def s8(data: bytes, index: int) -> int:
    value = data[index]
    return value - 256 if value >= 128 else value


def bytes_to_uint_le(data: bytes, start_byte: int, length_bytes: int) -> int:
    return int.from_bytes(data[start_byte:start_byte + length_bytes], "little", signed=False)


def bytes_to_int_le(data: bytes, start_byte: int, length_bytes: int) -> int:
    return int.from_bytes(data[start_byte:start_byte + length_bytes], "little", signed=True)


def bits_to_uint_le(data: bytes, start_bit: int, length: int) -> int:
    raw = int.from_bytes(data, "little", signed=False)
    mask = (1 << length) - 1
    return (raw >> start_bit) & mask


def bits_to_int_le(data: bytes, start_bit: int, length: int) -> int:
    value = bits_to_uint_le(data, start_bit, length)
    sign_bit = 1 << (length - 1)
    if value & sign_bit:
        value -= 1 << length
    return value


def motorola_absolute_bit_positions(start_byte: int, start_bit: int, length: int) -> List[int]:
    """
    Return absolute bit positions for a Motorola / big-endian signal.

    Here start_bit follows the spreadsheet-style convention used by the user:
    0 means the most-significant bit of the start byte, 7 means the least-significant bit.

    Example:
        start_byte=0, start_bit=0, length=3
        -> bits [7, 6, 5] in absolute little-endian numbering
    """
    positions: List[int] = []
    byte_index = start_byte
    bit_in_byte_msb = start_bit

    for _ in range(length):
        lsb_numbering_bit = 7 - bit_in_byte_msb
        positions.append(byte_index * 8 + lsb_numbering_bit)

        bit_in_byte_msb += 1
        if bit_in_byte_msb >= 8:
            bit_in_byte_msb = 0
            byte_index += 1

    return positions


def extract_signal(
    data: bytes,
    start_byte: int,
    start_bit: int,
    length: int,
    byte_order: str,
    signed: bool = False,
) -> int:
    """
    Extract a signal from the CAN payload.

    Intel:
        start_bit is LSB-first within the byte (0 = least-significant bit)

    Motorola:
        start_bit is MSB-first within the byte (0 = most-significant bit),
        and the resulting value is assembled in transmitted bit order.
    """
    if byte_order.lower() == "intel":
        value = 0
        for i in range(length):
            absolute = (start_byte * 8) + start_bit + i
            byte_index = absolute // 8
            bit_index = absolute % 8
            bit = (data[byte_index] >> bit_index) & 1
            value |= bit << i
    else:
        value = 0
        raw = int.from_bytes(data, "little", signed=False)
        for absolute in motorola_absolute_bit_positions(start_byte, start_bit, length):
            bit = (raw >> absolute) & 1
            value = (value << 1) | bit

    if signed and length > 0:
        sign_bit = 1 << (length - 1)
        if value & sign_bit:
            value -= 1 << length

    return value


def decode_0x40(data: bytes) -> Dict[str, object]:
    return {
        "engine_speed_rpm": bits_to_uint_le(data, 16, 14),
        "neutral_gear": bool(u8(data, 3) & 0x80),
        "accelerator_pedal_position_pct": round(u8(data, 4) / 2.55, 3),
    }


def decode_0x138(data: bytes) -> Dict[str, object]:
    # Source docs use negative sign; the user-provided sheet uses positive.
    steering_signed_le = bytes_to_int_le(data, 2, 2)
    return {
        "steering_angle_deg": round(steering_signed_le * -0.1, 3),
        "steering_angle_deg_user_sign": round(steering_signed_le * 0.1, 3),
        "yaw_rate_deg_s": round(bytes_to_int_le(data, 4, 2) * -0.2725, 3),
    }


def decode_0x139(data: bytes) -> Dict[str, object]:
    brake_raw = u8(data, 5)
    return {
        "vehicle_speed_mph": round(bits_to_uint_le(data, 16, 13) * 0.015694, 4),
        "brake_lights_switch": bool(u8(data, 4) & 0x04),
        "brake_pressure_raw": brake_raw * 128,
        "brake_position_pct": round(min(brake_raw / 0.7, 100.0), 3),
        "brake_position_pct_user_scale": round(u8(data, 2) * 0.6, 3),
    }


def decode_0x13A(data: bytes) -> Dict[str, object]:
    return {
        "wheel_speed_fl_mph": round(bits_to_uint_le(data, 12, 13) * 0.015694, 4),
        "wheel_speed_fr_mph": round(bits_to_uint_le(data, 25, 13) * 0.015694, 4),
        "wheel_speed_rl_mph": round(bits_to_uint_le(data, 38, 13) * 0.015694, 4),
        "wheel_speed_rr_mph": round(bits_to_uint_le(data, 51, 13) * 0.015694, 4),
    }


def decode_0x13B(data: bytes) -> Dict[str, object]:
    lat = s8(data, 6) * 0.2
    lon = s8(data, 7) * -0.1
    return {
        "lateral_accel_g": round(lat, 3),
        "longitudinal_accel_g": round(lon, 3),
        "combined_accel_g": round((lat ** 2 + lon ** 2) ** 0.5, 3),
    }


def decode_0x228(data: bytes) -> Dict[str, object]:
    return {
        "reverse_gear": bool(u8(data, 2) & 0x01),
    }


def decode_0x241(data: bytes) -> Dict[str, object]:
    return {
        "clutch_position_pct": round((u8(data, 5) & 0x80) / 1.28, 3),
        "current_gear": bits_to_uint_le(data, 35, 3),
    }


def decode_0x328(data: bytes) -> Dict[str, object]:
    # User-supplied extra mapping.
    return {
        "race_mode": bool(extract_signal(data, 4, 6, 1, "motorola")),
    }


def decode_0x345(data: bytes) -> Dict[str, object]:
    return {
        "engine_oil_temp_c": u8(data, 3) - 40,
        "coolant_temp_c": u8(data, 4) - 40,
    }


def decode_0x390(data: bytes) -> Dict[str, object]:
    return {
        "air_temp_c": round(u8(data, 4) / 2.0 - 40.0, 3),
    }


def decode_0x393(data: bytes) -> Dict[str, object]:
    return {
        "fuel_level_pct": round(100.0 - (bits_to_uint_le(data, 32, 10) / 10.23), 3),
    }


def decode_0x3AC(data: bytes) -> Dict[str, object]:
    # User-supplied extra mappings.
    return {
        "side_lights": bool(extract_signal(data, 0, 0, 1, "motorola")),
        "headlights": bool(extract_signal(data, 0, 1, 1, "motorola")),
        "full_beam": bool(extract_signal(data, 0, 2, 1, "motorola")),
        "handbrake": bool(extract_signal(data, 1, 5, 1, "motorola")),
    }


def decode_0x6E2(data: bytes) -> Dict[str, object]:
    tpms_light = bool((u8(data, 2) >> 5) & 1)

    def psi_value(byte_value: int) -> Optional[int]:
        return None if byte_value == 0xFE else (byte_value >> 1)

    fl_psi = psi_value(u8(data, 3))
    fr_psi = psi_value(u8(data, 4))
    rl_psi = psi_value(u8(data, 5))
    rr_psi = psi_value(u8(data, 6))

    return {
        "tpms_light_on": tpms_light,
        "tpms_fl_low": bool(u8(data, 3) & 1),
        "tpms_fr_low": bool(u8(data, 4) & 1),
        "tpms_rl_low": bool(u8(data, 5) & 1),
        "tpms_rr_low": bool(u8(data, 6) & 1),
        "tpms_fl_psi": fl_psi,
        "tpms_fr_psi": fr_psi,
        "tpms_rl_psi": rl_psi,
        "tpms_rr_psi": rr_psi,
        "tpms_fl_kpa": None if fl_psi is None else round(fl_psi * 6.8948, 3),
        "tpms_fr_kpa": None if fr_psi is None else round(fr_psi * 6.8948, 3),
        "tpms_rl_kpa": None if rl_psi is None else round(rl_psi * 6.8948, 3),
        "tpms_rr_kpa": None if rr_psi is None else round(rr_psi * 6.8948, 3),
    }


DECODERS = {
    0x40: decode_0x40,
    0x138: decode_0x138,
    0x139: decode_0x139,
    0x13A: decode_0x13A,
    0x13B: decode_0x13B,
    0x228: decode_0x228,
    0x241: decode_0x241,
    0x328: decode_0x328,
    0x345: decode_0x345,
    0x390: decode_0x390,
    0x393: decode_0x393,
    0x3AC: decode_0x3AC,
    0x6E2: decode_0x6E2,
}


def decode_frame(frame: Frame) -> Optional[Dict[str, object]]:
    timestamp, can_id, dlc, data = frame
    decoder = DECODERS.get(can_id)
    if decoder is None:
        return None

    decoded = decoder(data)
    row: Dict[str, object] = {
        "timestamp": timestamp,
        "can_id_hex": f"0x{can_id:03X}",
        "can_id_dec": can_id,
        "dlc": dlc,
        "raw_hex": " ".join(f"{b:02X}" for b in data),
    }
    row.update(decoded)
    return row


def iter_frames(path: Path) -> Iterable[Frame]:
    with path.open("r", encoding="utf-8", errors="replace") as handle:
        for line in handle:
            frame = parse_line(line)
            if frame is not None:
                yield frame


def collect_fieldnames(rows: Iterable[Dict[str, object]]) -> List[str]:
    base = ["timestamp", "can_id_hex", "can_id_dec", "dlc", "raw_hex"]
    seen = set(base)
    ordered = list(base)

    for row in rows:
        for key in row.keys():
            if key not in seen:
                seen.add(key)
                ordered.append(key)

    return ordered


def main() -> None:
    parser = argparse.ArgumentParser(description="Decode GR86 raw CAN log to CSV.")
    parser.add_argument("input_log", type=Path, help="Path to raw_can.log")
    parser.add_argument("output_csv", type=Path, nargs="?", help="Output CSV path")
    args = parser.parse_args()

    input_path: Path = args.input_log
    output_path: Path = args.output_csv or input_path.with_name(input_path.stem + "_decoded.csv")

    total_bytes = input_path.stat().st_size
    processed_bytes = 0
    rows: List[Dict[str, object]] = []
    frame_count = 0
    decoded_count = 0
    last_report = time.time()

    print(f"Reading {input_path} ({total_bytes:,} bytes)...")

    with input_path.open("r", encoding="utf-8", errors="replace") as handle:
        for line in handle:
            processed_bytes += len(line.encode("utf-8", errors="replace"))
            frame = parse_line(line)
            if frame is None:
                continue

            frame_count += 1
            decoded = decode_frame(frame)
            if decoded is not None:
                rows.append(decoded)
                decoded_count += 1

            now = time.time()
            if now - last_report >= 1.0:
                pct = (processed_bytes / total_bytes * 100.0) if total_bytes else 100.0
                print(
                    f"Progress: {pct:6.2f}% | "
                    f"frames read: {frame_count:,} | "
                    f"decoded rows: {decoded_count:,}",
                    flush=True,
                )
                last_report = now

    fieldnames = collect_fieldnames(rows)

    print(f"Writing CSV to {output_path} ...")
    with output_path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    print(
        f"Done. Read {frame_count:,} frames, decoded {decoded_count:,} rows, "
        f"wrote {output_path}"
    )


if __name__ == "__main__":
    main()
