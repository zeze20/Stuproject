"""Bilgisayarın tuttuğu sayıyı tahmin etme oyunu (Number Guessing Game)."""

import random


def play_round(lower=1, upper=100):
    secret = random.randint(lower, upper)
    attempts = 0

    print(f"\n{lower} ile {upper} arasında bir sayı tuttum. Tahmin et!")
    while True:
        raw = input("Tahminin: ").strip()
        try:
            guess = int(raw)
        except ValueError:
            print("Lütfen bir sayı gir.")
            continue

        attempts += 1
        if guess < secret:
            print("Daha büyük bir sayı dene.")
        elif guess > secret:
            print("Daha küçük bir sayı dene.")
        else:
            print(f"Tebrikler! Doğru bildin: {secret} ({attempts} denemede)")
            return


def main():
    print("=== Sayı Tahmin Oyunu ===")
    while True:
        play_round()
        again = input("Tekrar oynamak ister misin? (e/h): ").strip().lower()
        if again != "e":
            print("Görüşürüz!")
            break


if __name__ == "__main__":
    main()
