"""Güçlü ve rastgele şifre üreten araç (Password Generator)."""

import random
import string


def generate_password(length=12, use_digits=True, use_symbols=True):
    letters = string.ascii_letters
    digits = string.digits if use_digits else ""
    symbols = string.punctuation if use_symbols else ""

    pool = letters + digits + symbols
    if not pool:
        raise ValueError("Karakter havuzu boş olamaz.")

    password = [random.choice(letters)]
    if use_digits:
        password.append(random.choice(digits))
    if use_symbols:
        password.append(random.choice(symbols))

    remaining = length - len(password)
    password += [random.choice(pool) for _ in range(remaining)]
    random.shuffle(password)
    return "".join(password[:length])


def main():
    print("=== Şifre Üreteci ===")
    try:
        length = int(input("Şifre uzunluğu (varsayılan 12): ") or "12")
        if length < 4:
            raise ValueError
    except ValueError:
        print("Lütfen en az 4 karakterlik geçerli bir uzunluk girin.")
        return

    use_digits = input("Rakam içersin mi? (E/h): ").strip().lower() != "h"
    use_symbols = input("Sembol içersin mi? (E/h): ").strip().lower() != "h"

    password = generate_password(length, use_digits, use_symbols)
    print(f"\nÜretilen şifre: {password}")


if __name__ == "__main__":
    main()
