const currentTimeEl = document.getElementById("currentTime");
const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarmBtn");
const cancelAlarmBtn = document.getElementById("cancelAlarmBtn");
const statusEl = document.getElementById("status");

let alarmTime = null;
let alarmTriggered = false;
let audioCtx = null;

function pad(n) {
  return String(n).padStart(2, "0");
}

function currentTimeString() {
  const now = new Date();
  return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function playBeep() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  } catch {
    // sessizce yoksay (tarayıcı desteklemiyor olabilir)
  }
}

function tick() {
  const nowStr = currentTimeString();
  currentTimeEl.textContent = nowStr;

  if (alarmTime && !alarmTriggered && nowStr === alarmTime) {
    alarmTriggered = true;
    statusEl.classList.remove("empty");
    statusEl.innerHTML = "⏰ <strong>Alarm! Zamanı geldi!</strong>";
    playBeep();
  }
}

setAlarmBtn.addEventListener("click", () => {
  if (!alarmTimeInput.value) return;
  alarmTime = alarmTimeInput.value.length === 5 ? `${alarmTimeInput.value}:00` : alarmTimeInput.value;
  alarmTriggered = false;
  statusEl.classList.remove("empty");
  statusEl.textContent = `Alarm ${alarmTime} için kuruldu. Bekleniyor...`;
});

cancelAlarmBtn.addEventListener("click", () => {
  alarmTime = null;
  alarmTriggered = false;
  statusEl.classList.add("empty");
  statusEl.textContent = "Alarm kurulmadı.";
});

tick();
setInterval(tick, 1000);
