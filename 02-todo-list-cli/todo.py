"""Komut satırından çalışan basit yapılacaklar listesi (To-Do List CLI)."""

import json
import os

DATA_FILE = os.path.join(os.path.dirname(__file__), "todos.json")


def load_todos():
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_todos(todos):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(todos, f, ensure_ascii=False, indent=2)


def print_todos(todos):
    if not todos:
        print("Liste boş.")
        return
    for i, todo in enumerate(todos, start=1):
        status = "x" if todo["done"] else " "
        print(f"[{status}] {i}. {todo['text']}")


def main():
    todos = load_todos()
    menu = """
=== Yapılacaklar Listesi ===
1. Listele
2. Ekle
3. Tamamlandı olarak işaretle
4. Sil
5. Çıkış
"""
    while True:
        print(menu)
        choice = input("Seçiminiz: ").strip()

        if choice == "1":
            print_todos(todos)
        elif choice == "2":
            text = input("Yeni görev: ").strip()
            if text:
                todos.append({"text": text, "done": False})
                save_todos(todos)
                print("Eklendi.")
        elif choice == "3":
            print_todos(todos)
            try:
                idx = int(input("Tamamlanan görev numarası: ")) - 1
                todos[idx]["done"] = True
                save_todos(todos)
                print("Güncellendi.")
            except (ValueError, IndexError):
                print("Geçersiz numara.")
        elif choice == "4":
            print_todos(todos)
            try:
                idx = int(input("Silinecek görev numarası: ")) - 1
                removed = todos.pop(idx)
                save_todos(todos)
                print(f"Silindi: {removed['text']}")
            except (ValueError, IndexError):
                print("Geçersiz numara.")
        elif choice == "5":
            print("Görüşürüz!")
            break
        else:
            print("Geçersiz seçim.")


if __name__ == "__main__":
    main()
