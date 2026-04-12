from __future__ import annotations

# for formatting
def u16_le(b: bytes, i: int) -> int:
    return b[i] | (b[i + 1] << 8)

def s16_le(b: bytes, i: int) -> int:
    v = u16_le(b, i)
    return v - 65536 if v >= 32768 else v

def bits_le(data: bytes, start: int, length: int) -> int:
    val = 0
    for i, byte in enumerate(data):
        val |= byte << (8 * i)
    mask = (1 << length) - 1
    return (val >> start) & mask

def clamp(v: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, v))

# the class which decodes the can message into these fields
class Decoder:
    # instanciate them as null aka 'None'
    def __init__(self):
        self.latest = {
            "rpm": None,
            "speed_mph": None,
            "throttle_pct": None,
            "brake_pct": None,
            "steering_angle_deg": None,
            "gear": None,
            "neutral": None,
            "reverse": None,
            "fuel_level_pct": None,
            "coolant_temp_c": None,
            "oil_temp_c": None,
        }

    # decode the raw can message (assisted with LLM and known CANBUS knowledgebase online)
    def decode(self, arb_id: int, data: bytes) -> dict:
        updates = {}

        if arb_id == 0x040 and len(data) >= 5:
            updates["rpm"] = bits_le(data, 16, 14)
            updates["neutral"] = bool(data[3] & 0x80)
            updates["throttle_pct"] = round(data[4] / 2.55, 1)

        elif arb_id == 0x138 and len(data) >= 4:
            updates["steering_angle_deg"] = round(s16_le(data, 2) * -0.1, 1)

        elif arb_id == 0x139 and len(data) >= 6:
            updates["speed_mph"] = round(bits_le(data, 16, 13) * 0.015694, 2)
            updates["brake_pct"] = round(clamp((data[5] * 128) / 4096.0 * 100.0, 0, 100), 1)

        elif arb_id == 0x228 and len(data) >= 3:
            updates["reverse"] = bool(data[2] & 0x01)

        elif arb_id == 0x241 and len(data) >= 6:
            updates["gear"] = bits_le(data, 35, 3)

        elif arb_id == 0x345 and len(data) >= 5:
            updates["oil_temp_c"] = data[3] - 40
            updates["coolant_temp_c"] = data[4] - 40

        elif arb_id == 0x393 and len(data) >= 6:
            updates["fuel_level_pct"] = round(100.0 - (bits_le(data, 32, 10) / 10.23), 1)

        self.latest.update(updates)
        return updates
