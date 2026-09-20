"""Zar atma simülasyonu (1-6 arası rastgele sayı üretir)."""

import random


def roll_dice(num_dice=1, sides=6):
    return [random.randint(1, sides) for _ in range(num_dice)]


def main():
    print("=== Zar Atma Oyunu ===")
    while True:
        raw = input("Kaç zar atmak istersiniz? (çıkmak için q): ").strip().lower()
        if raw == "q":
            print("Görüşürüz!")
            break

        try:
            num_dice = int(raw)
            if num_dice <= 0:
                raise ValueError
        except ValueError:
            print("Lütfen pozitif bir sayı girin.\n")
            continue

        results = roll_dice(num_dice)
        print(f"Sonuçlar: {results}")
        print(f"Toplam: {sum(results)}\n")


if __name__ == "__main__":
    main()
