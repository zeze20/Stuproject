const CHOICES = ["taş", "kağıt", "makas"];
const EMOJI = { "taş": "🪨", "kağıt": "📄", "makas": "✂️" };
const BEATS = { "taş": "makas", "kağıt": "taş", "makas": "kağıt" };

const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function decideWinner(player, computer) {
  if (player === computer) return "berabere";
  return BEATS[player] === computer ? "oyuncu" : "bilgisayar";
}

document.querySelectorAll(".choice-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = btn.dataset.choice;
    const computer = CHOICES[Math.floor(Math.random() * 3)];
    const winner = decideWinner(player, computer);

    resultEl.classList.remove("empty");

    if (winner === "berabere") {
      resultEl.innerHTML = `Sen: ${EMOJI[player]} vs Bilgisayar: ${EMOJI[computer]} — Berabere!`;
    } else if (winner === "oyuncu") {
      playerScore += 1;
      playerScoreEl.textContent = playerScore;
      resultEl.innerHTML = `Sen: ${EMOJI[player]} vs Bilgisayar: ${EMOJI[computer]} — <strong>Kazandın! 🎉</strong>`;
    } else {
      computerScore += 1;
      computerScoreEl.textContent = computerScore;
      resultEl.innerHTML = `Sen: ${EMOJI[player]} vs Bilgisayar: ${EMOJI[computer]} — Kaybettin.`;
    }
  });
});
