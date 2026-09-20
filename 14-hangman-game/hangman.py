"""Kelime tahmin etme oyunu (Hangman Game)."""

import random

WORDS = ["python", "hayalet", "bilgisayar", "klavye", "yazilim", "internet"]

MAX_ATTEMPTS = 6


def display_word(word, guessed_letters):
    return " ".join(letter if letter in guessed_letters else "_" for letter in word)


def main():
    print("=== Adam Asmaca (Hangman) ===")
    word = random.choice(WORDS)
    guessed_letters = set()
    wrong_attempts = 0

    while wrong_attempts < MAX_ATTEMPTS:
        print(f"\nKelime: {display_word(word, guessed_letters)}")
        print(f"Yanlış tahmin hakkı: {MAX_ATTEMPTS - wrong_attempts}")

        if all(letter in guessed_letters for letter in word):
            print("\nTebrikler, kelimeyi buldunuz!")
            return

        guess = input("Bir harf tahmin edin: ").strip().lower()
        if len(guess) != 1 or not guess.isalpha():
            print("Lütfen tek bir harf girin.")
            continue

        if guess in guessed_letters:
            print("Bu harfi zaten denediniz.")
            continue

        guessed_letters.add(guess)
        if guess not in word:
            wrong_attempts += 1
            print("Yanlış tahmin!")

    print(f"\nKaybettiniz! Kelime: {word}")


if __name__ == "__main__":
    main()
