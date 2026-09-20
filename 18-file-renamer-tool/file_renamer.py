"""Dosya isimlerini toplu değiştirme aracı (File Renamer Tool)."""

import os
import sys


def rename_files(folder, old_text, new_text, dry_run=False):
    renamed = []
    for filename in os.listdir(folder):
        if old_text in filename:
            new_filename = filename.replace(old_text, new_text)
            src = os.path.join(folder, filename)
            dst = os.path.join(folder, new_filename)
            if not dry_run:
                os.rename(src, dst)
            renamed.append((filename, new_filename))
    return renamed


def main():
    print("=== Dosya İsim Değiştirme Aracı ===")
    folder = input("Klasör yolu: ").strip()
    if not os.path.isdir(folder):
        print("Geçersiz klasör yolu.")
        sys.exit(1)

    old_text = input("Değiştirilecek metin: ").strip()
    new_text = input("Yeni metin: ").strip()

    preview = rename_files(folder, old_text, new_text, dry_run=True)
    if not preview:
        print("Eşleşen dosya bulunamadı.")
        return

    print("\nÖnizleme:")
    for old_name, new_name in preview:
        print(f"  {old_name} -> {new_name}")

    confirm = input("\nDevam edilsin mi? (e/h): ").strip().lower()
    if confirm == "e":
        rename_files(folder, old_text, new_text, dry_run=False)
        print("Dosyalar yeniden adlandırıldı.")
    else:
        print("İşlem iptal edildi.")


if __name__ == "__main__":
    main()
