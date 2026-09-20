const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const doneMsg = document.getElementById("doneMsg");

let remaining = 30;
let timerId = null;

function format(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateDisplay() {
  display.textContent = format(remaining);
}

function tick() {
  remaining -= 1;
  updateDisplay();
  if (remaining <= 0) {
    clearInterval(timerId);
    timerId = null;
    doneMsg.textContent = "⏰ Süre doldu!";
    startBtn.disabled = false;
    startBtn.textContent = "Başlat";
  }
}

startBtn.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    startBtn.textContent = "Başlat";
    return;
  }

  if (remaining <= 0) {
    const m = Math.max(0, parseInt(minutesInput.value, 10) || 0);
    const s = Math.max(0, Math.min(59, parseInt(secondsInput.value, 10) || 0));
    remaining = m * 60 + s;
  }

  if (remaining <= 0) return;

  doneMsg.textContent = "";
  startBtn.textContent = "Duraklat";
  updateDisplay();
  timerId = setInterval(tick, 1000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  doneMsg.textContent = "";
  startBtn.textContent = "Başlat";
  const m = Math.max(0, parseInt(minutesInput.value, 10) || 0);
  const s = Math.max(0, Math.min(59, parseInt(secondsInput.value, 10) || 0));
  remaining = m * 60 + s;
  updateDisplay();
});

[minutesInput, secondsInput].forEach((el) =>
  el.addEventListener("change", () => {
    if (!timerId) resetBtn.click();
  })
);

updateDisplay();
