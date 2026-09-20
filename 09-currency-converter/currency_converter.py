"""Döviz çevirici uygulaması (Currency Converter).

Not: Sabit (offline) kur tablosu kullanır; internet bağlantısı gerekmez.
Güncel kurlar için değerleri kendinize göre güncelleyebilirsiniz.
"""

# 1 birim -> USD cinsinden değer
RATES_TO_USD = {
    "USD": 1.0,
    "EUR": 1.08,
    "TRY": 0.029,
    "GBP": 1.27,
    "JPY": 0.0067,
}


def convert(amount, from_currency, to_currency):
    if from_currency not in RATES_TO_USD or to_currency not in RATES_TO_USD:
        raise ValueError("Desteklenmeyen para birimi.")
    usd_amount = amount * RATES_TO_USD[from_currency]
    return usd_amount / RATES_TO_USD[to_currency]


def main():
    print("=== Döviz Çevirici ===")
    print(f"Desteklenen para birimleri: {', '.join(RATES_TO_USD)}")

    while True:
        from_currency = input("Kaynak para birimi (çıkmak için q): ").strip().upper()
        if from_currency == "Q":
            print("Görüşürüz!")
            break

        to_currency = input("Hedef para birimi: ").strip().upper()

        try:
            amount = float(input("Miktar: "))
            result = convert(amount, from_currency, to_currency)
            print(f"{amount} {from_currency} = {result:.2f} {to_currency}\n")
        except ValueError as e:
            print(f"Hata: {e}\n")


if __name__ == "__main__":
    main()
