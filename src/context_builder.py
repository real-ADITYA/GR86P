import json
from datetime import datetime

def load_json(path):
    with open(path) as f:
        return json.load(f)

def build_context(asr_text):
    device = load_json("config/device.json")
    policy = load_json("config/policies.json")
    metrics = load_json("state/metrics_snapshot.json")

    return {
        "schema_version": "gr86p.llm_input.v0.1",
        "mode": "realtime",
        "timestamp_utc": datetime.utcnow().isoformat() + "Z",
        "device": device,
        "user_request": {
            "asr_text": asr_text
        },
        **metrics,
        "guidance_policy": policy
    }