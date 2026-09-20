const STORAGE_KEY = "weather-app-api-key";

const apiKeyInput = document.getElementById("apiKey");
const cityInput = document.getElementById("city");
const fetchBtn = document.getElementById("fetchBtn");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("errorMsg");

apiKeyInput.value = localStorage.getItem(STORAGE_KEY) || "";

async function getWeather() {
  const apiKey = apiKeyInput.value.trim();
  const city = cityInput.value.trim();
  errorEl.textContent = "";

  if (!apiKey) {
    errorEl.textContent = "Lütfen bir API anahtarı gir.";
    return;
  }
  if (!city) {
    errorEl.textContent = "Lütfen bir şehir adı gir.";
    return;
  }

  localStorage.setItem(STORAGE_KEY, apiKey);
  fetchBtn.disabled = true;
  fetchBtn.textContent = "Getiriliyor...";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${encodeURIComponent(apiKey)}&units=metric&lang=tr`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Hava durumu alınamadı.");
    }

    resultEl.classList.remove("empty");
    resultEl.innerHTML = `
      <div style="font-size: 1.1rem; font-weight: 600;">${data.name}</div>
      <div>Durum: ${data.weather[0].description}</div>
      <div>Sıcaklık: <strong>${data.main.temp}°C</strong> (hissedilen: ${data.main.feels_like}°C)</div>
      <div>Nem: %${data.main.humidity}</div>
    `;
  } catch (err) {
    errorEl.textContent = `Hata: ${err.message}`;
  } finally {
    fetchBtn.disabled = false;
    fetchBtn.textContent = "Hava Durumunu Getir";
  }
}

fetchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeather();
});
