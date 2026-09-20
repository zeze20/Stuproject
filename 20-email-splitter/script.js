const EMAIL_PATTERN = /^(?<username>[^@]+)@(?<domain>[^.]+)\.(?<tld>.+)$/;

const emailInput = document.getElementById("emailInput");
const resultEl = document.getElementById("result");

function splitEmail(email) {
  const match = EMAIL_PATTERN.exec(email.trim());
  if (!match) return null;
  return match.groups;
}

function update() {
  const email = emailInput.value;
  if (!email) {
    resultEl.classList.add("empty");
    resultEl.textContent = "Bir e-posta adresi gir.";
    return;
  }

  const parts = splitEmail(email);
  resultEl.classList.remove("empty");

  if (!parts) {
    resultEl.innerHTML = `<span style="color: var(--danger);">Geçersiz e-posta adresi.</span>`;
    return;
  }

  resultEl.innerHTML = `
    <div>Kullanıcı adı: <strong>${parts.username}</strong></div>
    <div>Alan adı: <strong>${parts.domain}</strong></div>
    <div>Uzantı: <strong>${parts.tld}</strong></div>
  `;
}

emailInput.addEventListener("input", update);
update();
