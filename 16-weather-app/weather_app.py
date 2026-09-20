"""Hava durumu bilgilerini API ile çeken uygulama (Weather App).

OpenWeatherMap API kullanır: https://openweathermap.org/api
Kullanmadan önce ücretsiz bir API anahtarı alıp OWM_API_KEY ortam
değişkenine ayarlamanız gerekir.

    export OWM_API_KEY="senin_api_anahtarin"
"""

import os
import sys

import requests

API_URL = "https://api.openweathermap.org/data/2.5/weather"


def get_weather(city, api_key):
    params = {
        "q": city,
        "appid": api_key,
        "units": "metric",
        "lang": "tr",
    }
    response = requests.get(API_URL, params=params, timeout=10)
    response.raise_for_status()
    return response.json()


def print_weather(data):
    name = data.get("name", "Bilinmiyor")
    weather = data["weather"][0]["description"]
    temp = data["main"]["temp"]
    feels_like = data["main"]["feels_like"]
    humidity = data["main"]["humidity"]

    print(f"\n{name} için hava durumu:")
    print(f"  Durum: {weather}")
    print(f"  Sıcaklık: {temp}°C (hissedilen: {feels_like}°C)")
    print(f"  Nem: %{humidity}")


def main():
    api_key = os.environ.get("OWM_API_KEY")
    if not api_key:
        print("Hata: OWM_API_KEY ortam değişkeni ayarlanmamış.")
        print('Ayarlamak için: export OWM_API_KEY="senin_api_anahtarin"')
        sys.exit(1)

    print("=== Hava Durumu Uygulaması ===")
    city = input("Şehir adı: ").strip()

    try:
        data = get_weather(city, api_key)
        print_weather(data)
    except requests.exceptions.RequestException as e:
        print(f"Hava durumu alınamadı: {e}")


if __name__ == "__main__":
    main()
