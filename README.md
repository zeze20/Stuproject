# Stuproject — 20 Python Projesi

Öğrenmek, eğlenmek ve portfolyoya eklemek için hazırlanmış 20 küçük proje. Her proje kendi klasöründe, hem bir Python (CLI) script'i hem de tarayıcıda çalışan bir web arayüzü (`index.html`) olarak yer alır.

## Projeler ve konuları

| # | Proje | Konusu | Klasör |
|---|-------|--------|--------|
| 1 | Calculator | Toplama, çıkarma, çarpma, bölme yapan hesap makinesi | [01-calculator](01-calculator) |
| 2 | To-Do List | Görev ekleyip tamamlayabildiğin yapılacaklar listesi | [02-todo-list-cli](02-todo-list-cli) |
| 3 | Dice Roller | 1-6 arası rastgele sayı üreten zar atma simülasyonu | [03-dice-roller](03-dice-roller) |
| 4 | Countdown Timer | Girilen süreden geriye doğru sayan zamanlayıcı | [04-countdown-timer](04-countdown-timer) |
| 5 | Number Guessing Game | Bilgisayarın tuttuğu sayıyı tahmin etme oyunu | [05-number-guessing-game](05-number-guessing-game) |
| 6 | Quiz App | Çoktan seçmeli sorularla puan toplayan quiz | [06-quiz-app](06-quiz-app) |
| 7 | Tip Calculator | Hesaba göre bahşiş ve kişi başı tutarı hesaplama | [07-tip-calculator](07-tip-calculator) |
| 8 | Mad Libs Generator | Girilen kelimelerle komik bir hikaye üretme | [08-mad-libs-generator](08-mad-libs-generator) |
| 9 | Currency Converter | Sabit kurlarla döviz çevirme | [09-currency-converter](09-currency-converter) |
| 10 | Rock Paper Scissors | Bilgisayara karşı taş kağıt makas oyunu | [10-rock-paper-scissors](10-rock-paper-scissors) |
| 11 | Digital Clock | Anlık saati gösteren dijital saat | [11-digital-clock](11-digital-clock) |
| 12 | BMI Calculator | Boy ve kiloya göre vücut kitle indeksi hesaplama | [12-bmi-calculator](12-bmi-calculator) |
| 13 | Password Generator | Güçlü, rastgele şifre üretme | [13-password-generator](13-password-generator) |
| 14 | Hangman Game | Harf tahmin ederek kelime bulma oyunu (adam asmaca) | [14-hangman-game](14-hangman-game) |
| 15 | Alarm Clock | Belirlenen saatte uyarı veren alarm | [15-alarm-clock](15-alarm-clock) |
| 16 | Weather App | API ile şehir bazlı hava durumu sorgulama | [16-weather-app](16-weather-app) |
| 17 | Random Joke Generator | Rastgele espri gösteren uygulama | [17-random-joke-generator](17-random-joke-generator) |
| 18 | File Renamer Tool | Bir klasördeki dosyaların isimlerini toplu değiştirme | [18-file-renamer-tool](18-file-renamer-tool) |
| 19 | YouTube Video Downloader | YouTube video linkinden indirme aracı | [19-youtube-video-downloader](19-youtube-video-downloader) |
| 20 | Email Splitter | E-posta adresini kullanıcı adı/alan adı/uzantı olarak ayırma | [20-email-splitter](20-email-splitter) |

## Nasıl çalıştırılır

### 1. Web arayüzü ile (en kolay yol)

Kurulum gerekmez, sadece dosyayı çift tıklayıp tarayıcıda aç.

1. İstediğin proje klasörüne gir (örn. `01-calculator`)
2. İçindeki `index.html` dosyasına çift tıkla, tarayıcıda açılacaktır

Tüm projelerin listesini görmek için kök dizindeki `index.html` dosyasını aç.

### 2. Python (CLI) ile

Bilgisayarında [Python 3](https://www.python.org/downloads/) kurulu olmalı.

1. Terminali aç, proje klasörüne gir:
   ```bash
   cd 01-calculator
   ```
2. Script'i çalıştır:
   ```bash
   python3 calculator.py
   ```

Her klasördeki `.py` dosyasının adı farklıdır (örn. `todo.py`, `dice_roller.py`) — ilgili projenin klasöründeki dosya adını kullan.

> `requests` (Weather App) ve `yt-dlp` (YouTube Downloader) gibi ek kütüphane gerektiren projelerde önce şunu çalıştır:
> ```bash
> pip install -r requirements.txt
> ```

## Lisans

Bu projeler öğrenim amaçlı hazırlanmıştır ve serbestçe kullanılabilir.
