def load_text(path: str) -> str:
    # Force UTF-8 so Windows doesn't guess cp1252 and crash on pasted characters.
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def build_prompt(asr_text, context):
    import json

    system = load_text("config/prompts/system.txt")
    template = load_text("config/prompts/realtime_user.txt")

    user_prompt = (
        template
        .replace("{{asr_text}}", asr_text)
        .replace("{{context_json}}", json.dumps(context, indent=2))
    )
    return system, user_prompt