"""Taş kağıt makas oyunu (Rock Paper Scissors)."""

import random

CHOICES = ["taş", "kağıt", "makas"]

BEATS = {
    "taş": "makas",
    "kağıt": "taş",
    "makas": "kağıt",
}


def get_computer_choice():
    return random.choice(CHOICES)


def decide_winner(player, computer):
    if player == computer:
        return "berabere"
    if BEATS[player] == computer:
        return "oyuncu"
    return "bilgisayar"


def main():
    print("=== Taş Kağıt Makas ===")
    score = {"oyuncu": 0, "bilgisayar": 0}

    while True:
        player = input("Seçiminiz (taş/kağıt/makas, çıkmak için q): ").strip().lower()
        if player == "q":
            break
        if player not in CHOICES:
            print("Geçersiz seçim.\n")
            continue

        computer = get_computer_choice()
        print(f"Bilgisayar: {computer}")

        result = decide_winner(player, computer)
        if result == "berabere":
            print("Berabere!\n")
        else:
            score[result] += 1
            print(f"Kazanan: {result}\n")

    print(f"Son skor -> Oyuncu: {score['oyuncu']} | Bilgisayar: {score['bilgisayar']}")
    print("Görüşürüz!")


if __name__ == "__main__":
    main()
