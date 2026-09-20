const WORDS = ["python", "hayalet", "bilgisayar", "klavye", "yazilim", "internet"];
const MAX_ATTEMPTS = 6;
const ALPHABET = "abcçdefgğhıijklmnoöprsştuüvyz".split("");

const wordDisplay = document.getElementById("wordDisplay");
const attemptsLeftEl = document.getElementById("attemptsLeft");
const keyboardEl = document.getElementById("keyboard");
const resultEl = document.getElementById("result");
const newWordBtn = document.getElementById("newWordBtn");

let word = "";
let guessed = new Set();
let wrongAttempts = 0;
let over = false;

function renderWord() {
  wordDisplay.textContent = word
    .split("")
    .map((ch) => (guessed.has(ch) ? ch : "_"))
    .join(" ");
}

function renderKeyboard() {
  keyboardEl.innerHTML = "";
  ALPHABET.forEach((letter) => {
    const btn = document.createElement("button");
    btn.className = "key-btn";
    btn.textContent = letter;
    btn.disabled = guessed.has(letter) || over;

    if (guessed.has(letter)) {
      btn.classList.add(word.includes(letter) ? "correct" : "wrong");
    }

    btn.addEventListener("click", () => guess(letter));
    keyboardEl.appendChild(btn);
  });
}

function guess(letter) {
  if (over || guessed.has(letter)) return;
  guessed.add(letter);

  if (!word.includes(letter)) {
    wrongAttempts += 1;
    attemptsLeftEl.textContent = MAX_ATTEMPTS - wrongAttempts;
  }

  renderWord();
  renderKeyboard();
  checkStatus();
}

function checkStatus() {
  const won = word.split("").every((ch) => guessed.has(ch));
  resultEl.classList.remove("empty");

  if (won) {
    over = true;
    resultEl.innerHTML = "🎉 <strong>Tebrikler, kelimeyi buldun!</strong>";
    renderKeyboard();
  } else if (wrongAttempts >= MAX_ATTEMPTS) {
    over = true;
    resultEl.innerHTML = `Kaybettin! Kelime: <strong>${word}</strong>`;
    renderKeyboard();
  } else {
    resultEl.textContent = "Bir harf seç.";
  }
}

function newGame() {
  word = WORDS[Math.floor(Math.random() * WORDS.length)];
  guessed = new Set();
  wrongAttempts = 0;
  over = false;
  attemptsLeftEl.textContent = MAX_ATTEMPTS;
  resultEl.classList.add("empty");
  resultEl.textContent = "Bir harf seç.";
  renderWord();
  renderKeyboard();
}

newWordBtn.addEventListener("click", newGame);
newGame();
