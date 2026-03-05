import requests

def call_ollama(host, model, system_prompt, user_prompt):
    response = requests.post(
        f"{host}/api/generate",
        json={
            "model": model,
            "system": system_prompt,
            "prompt": user_prompt,
            "stream": False
        }
    )

    return response.json()["response"]