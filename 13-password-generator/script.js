const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{};:,.<>?";

const lengthInput = document.getElementById("length");
const lengthLabel = document.getElementById("lengthLabel");
const useDigits = document.getElementById("useDigits");
const useSymbols = document.getElementById("useSymbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const resultEl = document.getElementById("result");

function randomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generatePassword(length, digits, symbols) {
  let pool = LETTERS;
  const required = [randomChar(LETTERS)];

  if (digits) {
    pool += DIGITS;
    required.push(randomChar(DIGITS));
  }
  if (symbols) {
    pool += SYMBOLS;
    required.push(randomChar(SYMBOLS));
  }

  const remaining = Math.max(0, length - required.length);
  const chars = required.concat(
    Array.from({ length: remaining }, () => randomChar(pool))
  );

  for (let i = chars.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.slice(0, length).join("");
}

lengthInput.addEventListener("input", () => {
  lengthLabel.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthInput.value, 10);
  const password = generatePassword(length, useDigits.checked, useSymbols.checked);
  resultEl.classList.remove("empty");
  resultEl.style.fontFamily = "monospace";
  resultEl.style.fontSize = "1.05rem";
  resultEl.style.wordBreak = "break-all";
  resultEl.textContent = password;
});

copyBtn.addEventListener("click", async () => {
  const text = resultEl.textContent;
  if (!text || resultEl.classList.contains("empty")) return;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Kopyalandı!";
    setTimeout(() => (copyBtn.textContent = "Kopyala"), 1200);
  } catch {
    copyBtn.textContent = "Kopyalanamadı";
  }
});

generateBtn.click();
