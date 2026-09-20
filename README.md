# Stuproject — 20 Python Projesi

Öğrenmek, eğlenmek ve portfolyoya eklemek için 20 küçük Python projesi. Her proje kendi klasöründe, bağımsız çalışan bir CLI script'i **ve** tarayıcıda çalışan güzel bir web arayüzü (`index.html`) olarak yer alır.

## Web arayüzü

Tüm projelerin ortak, karanlık temalı bir arayüzü var. Tarayıcıda `index.html` dosyasını açarak (ya da basit bir HTTP sunucusuyla) hepsine göz atabilirsin:

```bash
python3 -m http.server 8000
# sonra tarayıcıda http://localhost:8000 adresini aç
```

| # | Proje | Klasör |
|---|-------|--------|
| 1 | Calculator | [01-calculator](01-calculator) |
| 2 | To-Do List (CLI) | [02-todo-list-cli](02-todo-list-cli) |
| 3 | Dice Roller | [03-dice-roller](03-dice-roller) |
| 4 | Countdown Timer | [04-countdown-timer](04-countdown-timer) |
| 5 | Number Guessing Game | [05-number-guessing-game](05-number-guessing-game) |
| 6 | Quiz App | [06-quiz-app](06-quiz-app) |
| 7 | Tip Calculator | [07-tip-calculator](07-tip-calculator) |
| 8 | Mad Libs Generator | [08-mad-libs-generator](08-mad-libs-generator) |
| 9 | Currency Converter | [09-currency-converter](09-currency-converter) |
| 10 | Rock Paper Scissors | [10-rock-paper-scissors](10-rock-paper-scissors) |
| 11 | Digital Clock | [11-digital-clock](11-digital-clock) |
| 12 | BMI Calculator | [12-bmi-calculator](12-bmi-calculator) |
| 13 | Password Generator | [13-password-generator](13-password-generator) |
| 14 | Hangman Game | [14-hangman-game](14-hangman-game) |
| 15 | Alarm Clock | [15-alarm-clock](15-alarm-clock) |
| 16 | Weather App (API) | [16-weather-app](16-weather-app) |
| 17 | Random Joke Generator | [17-random-joke-generator](17-random-joke-generator) |
| 18 | File Renamer Tool | [18-file-renamer-tool](18-file-renamer-tool) |
| 19 | YouTube Video Downloader | [19-youtube-video-downloader](19-youtube-video-downloader) |
| 20 | Email Splitter | [20-email-splitter](20-email-splitter) |

## Gereksinimler

Çoğu proje sadece Python 3 standart kütüphanesini kullanır. `requests` (Weather App) ve `yt-dlp` (YouTube Downloader) gibi harici bağımlılık gerektiren projelerin kendi klasöründe `requirements.txt` dosyası bulunur.

```bash
python3 --version  # Python 3.8+
```

Her projeyi kendi klasörüne girip çalıştırabilirsiniz, örneğin:

```bash
cd 01-calculator
python3 calculator.py
```

## Lisans

Bu projeler öğrenim amaçlı hazırlanmıştır ve serbestçe kullanılabilir.
