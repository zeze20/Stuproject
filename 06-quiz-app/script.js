const QUESTIONS = [
  {
    question: "Python'da liste tanımlamak için hangi karakter kullanılır?",
    options: { A: "{}", B: "[]", C: "()", D: "<>" },
    answer: "B",
  },
  {
    question: "HTML neyin kısaltmasıdır?",
    options: {
      A: "HyperText Markup Language",
      B: "HighText Machine Language",
      C: "HyperText Making Language",
      D: "HyperTool Multi Language",
    },
    answer: "A",
  },
  {
    question: "Dünyanın en büyük gezegeni hangisidir?",
    options: { A: "Dünya", B: "Mars", C: "Jüpiter", D: "Venüs" },
    answer: "C",
  },
  {
    question: "1 + 1 * 2 işleminin sonucu kaçtır?",
    options: { A: "2", B: "3", C: "4", D: "6" },
    answer: "B",
  },
  {
    question: "Git komutlarından hangisi değişiklikleri kaydeder?",
    options: { A: "git clone", B: "git push", C: "git commit", D: "git pull" },
    answer: "C",
  },
];

const quizBody = document.getElementById("quizBody");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

let current = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  const q = QUESTIONS[current];
  progressText.textContent = `Soru ${current + 1}/${QUESTIONS.length}`;
  progressFill.style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
  answered = false;

  quizBody.innerHTML = `
    <p style="font-weight: 600; margin-bottom: 1rem;">${q.question}</p>
    <div class="list" id="options"></div>
  `;

  const optionsEl = document.getElementById("options");
  Object.entries(q.options).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = "btn-secondary";
    btn.style.textAlign = "left";
    btn.style.width = "100%";
    btn.textContent = `${key}) ${label}`;
    btn.addEventListener("click", () => selectAnswer(key, btn));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(key, btn) {
  if (answered) return;
  answered = true;
  const q = QUESTIONS[current];
  const correct = key === q.answer;
  if (correct) score += 1;

  btn.style.borderColor = correct ? "var(--accent-3)" : "var(--danger)";
  btn.style.background = correct ? "rgba(52,211,153,0.18)" : "rgba(255,107,107,0.18)";

  setTimeout(() => {
    current += 1;
    if (current < QUESTIONS.length) {
      renderQuestion();
    } else {
      showFinalScore();
    }
  }, 700);
}

function showFinalScore() {
  progressFill.style.width = "100%";
  progressText.textContent = "Tamamlandı";
  quizBody.innerHTML = `
    <div class="result">
      Quiz bitti! Skorun: <strong>${score}/${QUESTIONS.length}</strong>
    </div>
    <button class="btn-primary" id="restartBtn">Tekrar Başla</button>
  `;
  document.getElementById("restartBtn").addEventListener("click", () => {
    current = 0;
    score = 0;
    renderQuestion();
  });
}

renderQuestion();
