import json
from intent_router import load_intents, route_intent
from context_builder import build_context
from prompt_builder import build_prompt
from ollama_client import call_ollama

def load_device():
    with open("config/device.json") as f:
        return json.load(f)

def main():
    device = load_device()
    intents = load_intents("config/intents.json")

    while True:
        user_input = input("You> ")

        intent = route_intent(user_input, intents)

        context = build_context(user_input)
        context["user_request"]["intent"] = intent

        system_prompt, user_prompt = build_prompt(user_input, context)

        reply = call_ollama(
            device["ollama"]["host"],
            device["ollama"]["model"],
            system_prompt,
            user_prompt
        )

        print("\nGR86P>", reply.strip(), "\n")

if __name__ == "__main__":
    main()