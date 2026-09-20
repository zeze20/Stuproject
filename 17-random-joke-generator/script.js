const JOKES = [
  "Bugün çok ciddisin, galiba Netflix'ten yeni çıktın.",
  "Programcılar neden karanlıkta çalışır? Çünkü ışık böcekleri (bug) çeker.",
  "Bir array bara girer, barmen 'index out of bounds' der.",
  "En sevdiğim sayı sistemi ikili sistem, çünkü sadece 10 tür sayı var: 0 ve 1.",
  "Neden yazılımcılar doğayı sevmez? Çünkü çok fazla bug var.",
  "Bilgisayarım bana 'stack overflow' dedi, ben de ona 'sen de öylesin' dedim.",
];

const resultEl = document.getElementById("result");
const jokeBtn = document.getElementById("jokeBtn");

let lastIndex = -1;

function showJoke() {
  let index;
  do {
    index = Math.floor(Math.random() * JOKES.length);
  } while (index === lastIndex && JOKES.length > 1);
  lastIndex = index;
  resultEl.textContent = JOKES[index];
}

jokeBtn.addEventListener("click", showJoke);
showJoke();
