const urlInput = document.getElementById("urlInput");
const checkBtn = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");

const YOUTUBE_PATTERN = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/i;

checkBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();
  resultEl.classList.remove("empty");

  if (!YOUTUBE_PATTERN.test(url)) {
    resultEl.innerHTML = "Geçerli bir YouTube video URL'si gir (youtube.com/watch?v=... veya youtu.be/...).";
    return;
  }

  const command = `python3 youtube_downloader.py`;
  resultEl.innerHTML = `
    <div>URL geçerli görünüyor. ✅</div>
    <div style="margin-top: 0.6rem;">Terminalde şunu çalıştır ve URL'yi yapıştır:</div>
    <pre style="background: var(--surface); padding: 0.6rem; border-radius: 8px; overflow-x: auto; margin-top: 0.4rem;">${command}</pre>
  `;
});

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkBtn.click();
});
