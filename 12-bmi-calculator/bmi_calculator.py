"""Vücut kitle indeksi (BMI) hesaplayan araç."""


def calculate_bmi(weight_kg, height_cm):
    height_m = height_cm / 100
    return weight_kg / (height_m ** 2)


def classify_bmi(bmi):
    if bmi < 18.5:
        return "Zayıf"
    if bmi < 25:
        return "Normal"
    if bmi < 30:
        return "Fazla kilolu"
    return "Obez"


def main():
    print("=== BMI Hesaplayıcı ===")
    try:
        weight = float(input("Kilonuz (kg): "))
        height = float(input("Boyunuz (cm): "))
        if weight <= 0 or height <= 0:
            raise ValueError
    except ValueError:
        print("Lütfen geçerli değerler girin.")
        return

    bmi = calculate_bmi(weight, height)
    category = classify_bmi(bmi)
    print(f"\nBMI değeriniz: {bmi:.2f}")
    print(f"Kategori: {category}")


if __name__ == "__main__":
    main()
