const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultEl = document.getElementById("result");

function classify(bmi) {
  if (bmi < 18.5) return { label: "Zayıf", cls: "warn" };
  if (bmi < 25) return { label: "Normal", cls: "" };
  if (bmi < 30) return { label: "Fazla kilolu", cls: "warn" };
  return { label: "Obez", cls: "warn" };
}

function update() {
  const weight = Math.max(1, parseFloat(weightInput.value) || 0);
  const height = Math.max(1, parseFloat(heightInput.value) || 0);
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  const { label, cls } = classify(bmi);

  resultEl.innerHTML = `
    BMI değerin: <strong>${bmi.toFixed(2)}</strong>
    <div style="margin-top: 0.5rem;"><span class="pill ${cls}">${label}</span></div>
  `;
}

[weightInput, heightInput].forEach((el) => el.addEventListener("input", update));
update();
