"""Bahşiş hesaplayan basit uygulama (Tip Calculator)."""


def calculate_tip(bill, tip_percent, num_people=1):
    tip_amount = bill * tip_percent / 100
    total = bill + tip_amount
    per_person = total / num_people
    return tip_amount, total, per_person


def main():
    print("=== Bahşiş Hesaplayıcı ===")
    try:
        bill = float(input("Toplam hesap tutarı: "))
        tip_percent = float(input("Bahşiş yüzdesi (örn: 15): "))
        num_people = int(input("Kaç kişi arasında paylaşılacak: ") or "1")
        if bill < 0 or tip_percent < 0 or num_people <= 0:
            raise ValueError
    except ValueError:
        print("Lütfen geçerli değerler girin.")
        return

    tip_amount, total, per_person = calculate_tip(bill, tip_percent, num_people)

    print(f"\nBahşiş: {tip_amount:.2f}")
    print(f"Toplam: {total:.2f}")
    print(f"Kişi başı: {per_person:.2f}")


if __name__ == "__main__":
    main()
