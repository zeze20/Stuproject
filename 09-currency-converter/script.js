const RATES_TO_USD = {
  USD: 1.0,
  EUR: 1.08,
  TRY: 0.029,
  GBP: 1.27,
  JPY: 0.0067,
};

const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const resultEl = document.getElementById("result");

Object.keys(RATES_TO_USD).forEach((code) => {
  const opt1 = document.createElement("option");
  opt1.value = code;
  opt1.textContent = code;
  fromSelect.appendChild(opt1);

  const opt2 = document.createElement("option");
  opt2.value = code;
  opt2.textContent = code;
  toSelect.appendChild(opt2);
});

fromSelect.value = "USD";
toSelect.value = "TRY";

function convert(amount, from, to) {
  const usdAmount = amount * RATES_TO_USD[from];
  return usdAmount / RATES_TO_USD[to];
}

function update() {
  const amount = Math.max(0, parseFloat(amountInput.value) || 0);
  const from = fromSelect.value;
  const to = toSelect.value;
  const result = convert(amount, from, to);

  resultEl.innerHTML = `${amount} ${from} = <strong>${result.toFixed(2)} ${to}</strong>`;
}

[amountInput, fromSelect, toSelect].forEach((el) => el.addEventListener("input", update));
update();
