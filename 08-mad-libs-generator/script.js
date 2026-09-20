const fields = ["isim", "hayvan", "sifat", "fiil", "yer", "sayi", "yiyecek"];
const resultEl = document.getElementById("result");

document.getElementById("generateBtn").addEventListener("click", () => {
  const words = {};
  let missing = false;

  fields.forEach((id) => {
    const value = document.getElementById(id).value.trim();
    if (!value) missing = true;
    words[id] = value || `[${id}]`;
  });

  const story = `
    Bugün ${words.isim}, ${words.yer}'de yürüyüş yaparken
    ${words.sayi} tane ${words.sifat} ${words.hayvan} ile karşılaştı.
    Hep birlikte ${words.fiil} kararı aldılar ve sonunda
    lezzetli bir ${words.yiyecek} yiyerek günü kutladılar.
  `.trim();

  resultEl.classList.remove("empty");
  resultEl.textContent = story;

  if (missing) {
    resultEl.textContent += "\n\n(Boş bırakılan alanlar köşeli parantez içinde gösterildi.)";
  }
});
