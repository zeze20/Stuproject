const clockEl = document.getElementById("clock");
const dateEl = document.getElementById("dateText");

function pad(n) {
  return String(n).padStart(2, "0");
}

function update() {
  const now = new Date();
  clockEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  dateEl.textContent = now.toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

update();
setInterval(update, 1000);
