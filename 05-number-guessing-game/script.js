const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const resultEl = document.getElementById("result");
const attemptsEl = document.getElementById("attempts");
const newGameBtn = document.getElementById("newGameBtn");

let secret = randomSecret();
let attempts = 0;
let won = false;

function randomSecret() {
  return Math.floor(Math.random() * 100) + 1;
}

function showMessage(text, isWin) {
  resultEl.classList.remove("empty");
  resultEl.innerHTML = isWin ? `🎉 <strong>${text}</strong>` : text;
}

function makeGuess() {
  if (won) return;
  const guess = parseInt(guessInput.value, 10);
  if (Number.isNaN(guess) || guess < 1 || guess > 100) {
    showMessage("Lütfen 1-100 arasında bir sayı gir.");
    return;
  }

  attempts += 1;
  attemptsEl.textContent = attempts;

  if (guess < secret) {
    showMessage("Daha büyük bir sayı dene. ⬆️");
  } else if (guess > secret) {
    showMessage("Daha küçük bir sayı dene. ⬇️");
  } else {
    won = true;
    showMessage(`Doğru bildin! Sayı ${secret} idi. (${attempts} denemede)`, true);
  }

  guessInput.value = "";
  guessInput.focus();
}

guessBtn.addEventListener("click", makeGuess);
guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") makeGuess();
});

newGameBtn.addEventListener("click", () => {
  secret = randomSecret();
  attempts = 0;
  won = false;
  attemptsEl.textContent = "0";
  resultEl.classList.add("empty");
  resultEl.textContent = "Bir sayı gir ve tahmin et.";
  guessInput.value = "";
});
