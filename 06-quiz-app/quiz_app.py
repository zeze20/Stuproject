"""Çoktan seçmeli soru-cevap uygulaması (Quiz App)."""

QUESTIONS = [
    {
        "question": "Python'da liste tanımlamak için hangi karakter kullanılır?",
        "options": {"A": "{}", "B": "[]", "C": "()", "D": "<>"},
        "answer": "B",
    },
    {
        "question": "HTML neyin kısaltmasıdır?",
        "options": {
            "A": "HyperText Markup Language",
            "B": "HighText Machine Language",
            "C": "HyperText Making Language",
            "D": "HyperTool Multi Language",
        },
        "answer": "A",
    },
    {
        "question": "Dünyanın en büyük gezegeni hangisidir?",
        "options": {"A": "Dünya", "B": "Mars", "C": "Jüpiter", "D": "Venüs"},
        "answer": "C",
    },
    {
        "question": "1 + 1 * 2 işleminin sonucu kaçtır?",
        "options": {"A": "2", "B": "3", "C": "4", "D": "6"},
        "answer": "B",
    },
    {
        "question": "Git komutlarından hangisi değişiklikleri kaydeder?",
        "options": {"A": "git clone", "B": "git push", "C": "git commit", "D": "git pull"},
        "answer": "C",
    },
]


def run_quiz(questions):
    score = 0
    total = len(questions)

    for i, q in enumerate(questions, start=1):
        print(f"\nSoru {i}/{total}: {q['question']}")
        for key, option in q["options"].items():
            print(f"  {key}) {option}")

        answer = input("Cevabınız: ").strip().upper()
        if answer == q["answer"]:
            print("Doğru!")
            score += 1
        else:
            print(f"Yanlış. Doğru cevap: {q['answer']}")

    print(f"\nQuiz bitti! Skor: {score}/{total}")


def main():
    print("=== Quiz Uygulaması ===")
    run_quiz(QUESTIONS)


if __name__ == "__main__":
    main()
