"""Belirtilen saatte alarm çalan uygulama (Alarm Clock)."""

import time
from datetime import datetime


def wait_for_alarm(alarm_time):
    print(f"Alarm {alarm_time} için ayarlandı. Bekleniyor...")
    while True:
        now = datetime.now().strftime("%H:%M:%S")
        if now == alarm_time:
            print("\a⏰ Alarm! Zamanı geldi! ⏰")
            break
        time.sleep(1)


def main():
    print("=== Alarm Saati ===")
    alarm_time = input("Alarm saatini girin (HH:MM:SS formatında): ").strip()

    try:
        datetime.strptime(alarm_time, "%H:%M:%S")
    except ValueError:
        print("Geçersiz saat formatı. Örnek: 14:30:00")
        return

    try:
        wait_for_alarm(alarm_time)
    except KeyboardInterrupt:
        print("\nAlarm iptal edildi.")


if __name__ == "__main__":
    main()
