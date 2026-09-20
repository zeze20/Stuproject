const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tipPercent");
const tipLabel = document.getElementById("tipPercentLabel");
const peopleInput = document.getElementById("people");
const resultEl = document.getElementById("result");

function format(n) {
  return n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function update() {
  const bill = Math.max(0, parseFloat(billInput.value) || 0);
  const tipPercent = parseInt(tipInput.value, 10);
  const people = Math.max(1, parseInt(peopleInput.value, 10) || 1);

  tipLabel.textContent = tipPercent;

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;
  const perPerson = total / people;

  resultEl.innerHTML = `
    <div>Bahşiş: <strong>${format(tipAmount)}</strong></div>
    <div>Toplam: <strong>${format(total)}</strong></div>
    <div>Kişi başı: <strong>${format(perPerson)}</strong></div>
  `;
}

[billInput, tipInput, peopleInput].forEach((el) => el.addEventListener("input", update));
update();
