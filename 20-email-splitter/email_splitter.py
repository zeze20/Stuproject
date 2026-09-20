"""E-posta adreslerini parçalarına ayıran uygulama (Email Splitter)."""

import re

EMAIL_PATTERN = re.compile(r"^(?P<username>[^@]+)@(?P<domain>[^.]+)\.(?P<tld>.+)$")


def split_email(email):
    match = EMAIL_PATTERN.match(email.strip())
    if not match:
        raise ValueError("Geçersiz e-posta adresi.")
    return match.group("username"), match.group("domain"), match.group("tld")


def main():
    print("=== E-posta Adresi Ayırıcı ===")
    while True:
        email = input("E-posta adresi (çıkmak için q): ").strip()
        if email.lower() == "q":
            print("Görüşürüz!")
            break

        try:
            username, domain, tld = split_email(email)
            print(f"  Kullanıcı adı: {username}")
            print(f"  Alan adı: {domain}")
            print(f"  Uzantı: {tld}\n")
        except ValueError as e:
            print(f"Hata: {e}\n")


if __name__ == "__main__":
    main()
