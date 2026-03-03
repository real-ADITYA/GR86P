import json
import subprocess
from pathlib import Path
from tempfile import template

MODEL = "gemma2:2b"
ROOT = Path(__file__).resolve().parent

# reads text file from the same directory as the script
def read_text(name: str) -> str:
    return (ROOT / name).read_text(encoding="utf-8")

# reads JSON file from the same directory as the script
def read_json(name: str) -> dict:
    return json.loads((ROOT / name).read_text(encoding="utf-8"))

# builds the prompt to be sent to the model
def build_prompt(template: str, vehicle_state: dict, car_profile: dict, user_utterance: str) -> str:
    return (
        template
        .replace("{VEHICLE_STATE_JSON}", json.dumps(vehicle_state, indent=2))
        .replace("{CAR_PROFILE_JSON}", json.dumps(car_profile, indent=2))
        .replace("{USER_UTTERANCE}", user_utterance.strip())
    )

# sends the prompt to the Ollama model and returns the response
def ask_ollama(prompt: str) -> str:
    result = subprocess.run(["ollama", "run", MODEL], input=prompt, text=True, encoding="utf-8", capture_output=True)
    # error handling if ollama fails
    if result.returncode != 0:
        err = (result.stderr or "").strip()
        raise RuntimeError(err if err else "Ollama command failed")
    return result.stdout.strip()

# ensures response is ASCII
def ascii_only(s: str) -> str:
    return s.encode("ascii", errors="ignore").decode("ascii").strip()

def main() -> None:
    template = read_text("prompt.txt")
    vehicle_state = read_json("telemetry_sample.json")
    car_profile = read_json("car_profile.json")

    print("GR86P text harness")
    print(f"Model: {MODEL}")
    print("Type a question. Type 'exit' to quit.")

    while True:
        user = input("\nYou> ").strip()
        if not user:
            continue
        if user.lower() in {"exit", "quit"}:
            break

        prompt = build_prompt(template, vehicle_state, car_profile, user)
        answer = ask_ollama(prompt)
        answer = ascii_only(answer)
        print(f"\nGR86P> {answer}")


if __name__ == "__main__":
    main()