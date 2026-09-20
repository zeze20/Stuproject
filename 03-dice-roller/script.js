const DICE_FACES = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const countInput = document.getElementById("diceCount");
const rollBtn = document.getElementById("rollBtn");
const resultEl = document.getElementById("result");

function rollDice(n) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 6) + 1);
}

rollBtn.addEventListener("click", () => {
  const n = Math.max(1, Math.min(12, parseInt(countInput.value, 10) || 1));
  countInput.value = n;

  const results = rollDice(n);
  const faces = results.map((r) => DICE_FACES[r - 1]).join(" ");
  const total = results.reduce((a, b) => a + b, 0);

  resultEl.classList.remove("empty");
  resultEl.innerHTML = `
    <div style="font-size: 2rem; letter-spacing: 0.3rem;">${faces}</div>
    <div style="margin-top: 0.5rem;">Sonuçlar: ${results.join(", ")}</div>
    <div>Toplam: <strong>${total}</strong></div>
  `;
});
