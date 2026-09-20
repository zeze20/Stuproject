"""Geri sayım başlatan basit bir zamanlayıcı (Countdown Timer)."""

import sys
import time


def countdown(seconds):
    while seconds >= 0:
        mins, secs = divmod(seconds, 60)
        timer = f"{mins:02d}:{secs:02d}"
        print(f"\r{timer}", end="", flush=True)
        time.sleep(1)
        seconds -= 1
    print("\nSüre doldu! ⏰")


def main():
    print("=== Geri Sayım Zamanlayıcısı ===")
    try:
        total_seconds = int(input("Kaç saniye geri sayım yapılsın? "))
        if total_seconds < 0:
            raise ValueError
    except ValueError:
        print("Lütfen pozitif bir tam sayı girin.")
        sys.exit(1)

    countdown(total_seconds)


if __name__ == "__main__":
    main()
