"""Basit dört işlem hesap makinesi (Calculator)."""


def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    if b == 0:
        raise ValueError("Sıfıra bölünemez.")
    return a / b


OPERATIONS = {
    "1": ("Toplama (+)", add),
    "2": ("Çıkarma (-)", subtract),
    "3": ("Çarpma (*)", multiply),
    "4": ("Bölme (/)", divide),
}


def main():
    print("=== Hesap Makinesi ===")
    while True:
        for key, (label, _) in OPERATIONS.items():
            print(f"{key}. {label}")
        print("q. Çıkış")

        choice = input("Seçiminiz: ").strip().lower()
        if choice == "q":
            print("Görüşürüz!")
            break

        if choice not in OPERATIONS:
            print("Geçersiz seçim, tekrar deneyin.\n")
            continue

        try:
            a = float(input("Birinci sayı: "))
            b = float(input("İkinci sayı: "))
            label, func = OPERATIONS[choice]
            result = func(a, b)
            print(f"Sonuç ({label}): {result}\n")
        except ValueError as e:
            print(f"Hata: {e}\n")


if __name__ == "__main__":
    main()
