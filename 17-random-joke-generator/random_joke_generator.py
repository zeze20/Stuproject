"""Rastgele espri üreten uygulama (Random Joke Generator)."""

import random

JOKES = [
    "Bugün çok ciddisin, galiba Netflix'ten yeni çıktın.",
    "Programcılar neden karanlıkta çalışır? Çünkü ışık böcekleri (bug) çeker.",
    "Bir array bara girer, barmen 'index out of bounds' der.",
    "En sevdiğim sayı sistemi ikili sistem, çünkü sadece 10 tür sayı var: 0 ve 1.",
    "Neden yazılımcılar doğayı sevmez? Çünkü çok fazla bug var.",
    "Bilgisayarım bana 'stack overflow' dedi, ben de ona 'sen de öylesin' dedim.",
]


def get_random_joke():
    return random.choice(JOKES)


def main():
    print("=== Rastgele Espri Üreteci ===")
    while True:
        print(f"\n{get_random_joke()}")
        again = input("\nBaşka bir espri ister misin? (e/h): ").strip().lower()
        if again != "e":
            print("Görüşürüz!")
            break


if __name__ == "__main__":
    main()
