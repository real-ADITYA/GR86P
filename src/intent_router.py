import json

def load_intents(path):
    with open(path) as f:
        return json.load(f)

def route_intent(text, intents):
    text_lower = text.lower()
    for name, data in intents.items():
        for kw in data["keywords"]:
            if kw in text_lower:
                return {
                    "name": name,
                    "window_sec": data["window_sec"]
                }
    return {"name": "unknown", "window_sec": 60}