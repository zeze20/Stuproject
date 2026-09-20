"""Kullanıcının kelimeleriyle komik hikaye oluşturan uygulama (Mad Libs Generator)."""


def get_words():
    prompts = [
        ("isim", "Bir isim (özel isim): "),
        ("hayvan", "Bir hayvan: "),
        ("sifat", "Bir sıfat: "),
        ("fiil", "Bir fiil (-mek/-mak): "),
        ("yer", "Bir yer adı: "),
        ("sayi", "Bir sayı: "),
        ("yiyecek", "Bir yiyecek: "),
    ]
    words = {}
    for key, prompt in prompts:
        words[key] = input(prompt).strip()
    return words


def build_story(words):
    return (
        f"Bugün {words['isim']}, {words['yer']}'de yürüyüş yaparken "
        f"{words['sayi']} tane {words['sifat']} {words['hayvan']} ile karşılaştı.\n"
        f"Hep birlikte {words['fiil']} kararı aldılar ve sonunda "
        f"lezzetli bir {words['yiyecek']} yiyerek günü kutladılar."
    )


def main():
    print("=== Mad Libs Generator ===")
    words = get_words()
    print("\nHikayeniz:\n")
    print(build_story(words))


if __name__ == "__main__":
    main()
