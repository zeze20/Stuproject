"""Gerçek zamanlı dijital saat (Digital Clock)."""

import time
from datetime import datetime


def main():
    print("=== Dijital Saat ===")
    print("Durdurmak için Ctrl+C tuşlayın.\n")
    try:
        while True:
            now = datetime.now().strftime("%H:%M:%S")
            print(f"\r{now}", end="", flush=True)
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nGörüşürüz!")


if __name__ == "__main__":
    main()
