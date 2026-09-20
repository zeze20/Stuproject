const pickFolderBtn = document.getElementById("pickFolderBtn");
const folderNameEl = document.getElementById("folderName");
const oldTextInput = document.getElementById("oldText");
const newTextInput = document.getElementById("newText");
const previewBtn = document.getElementById("previewBtn");
const previewList = document.getElementById("previewList");
const renameBtn = document.getElementById("renameBtn");
const errorMsg = document.getElementById("errorMsg");

let dirHandle = null;
let matches = [];

const supported = "showDirectoryPicker" in window;

if (!supported) {
  errorMsg.textContent =
    "Bu tarayıcı File System Access API'yi desteklemiyor. Chrome veya Edge kullanmayı deneyin, ya da klasik CLI script'i (file_renamer.py) kullanın.";
  pickFolderBtn.disabled = true;
}

pickFolderBtn.addEventListener("click", async () => {
  try {
    dirHandle = await window.showDirectoryPicker();
    folderNameEl.textContent = `Seçilen klasör: ${dirHandle.name}`;
    errorMsg.textContent = "";
  } catch {
    // kullanıcı iptal etti
  }
});

async function listFiles() {
  const files = [];
  for await (const [name, handle] of dirHandle.entries()) {
    if (handle.kind === "file") files.push(name);
  }
  return files;
}

previewBtn.addEventListener("click", async () => {
  errorMsg.textContent = "";
  previewList.innerHTML = "";
  renameBtn.style.display = "none";

  if (!dirHandle) {
    errorMsg.textContent = "Önce bir klasör seç.";
    return;
  }

  const oldText = oldTextInput.value;
  const newText = newTextInput.value;

  if (!oldText) {
    errorMsg.textContent = "Değiştirilecek metni gir.";
    return;
  }

  const files = await listFiles();
  matches = files
    .filter((name) => name.includes(oldText))
    .map((name) => ({ oldName: name, newName: name.split(oldText).join(newText) }));

  if (matches.length === 0) {
    previewList.innerHTML = "<li class='hint'>Eşleşen dosya bulunamadı.</li>";
    return;
  }

  matches.forEach(({ oldName, newName }) => {
    const li = document.createElement("li");
    li.className = "list-item";
    li.innerHTML = `<span>${oldName} → <strong>${newName}</strong></span>`;
    previewList.appendChild(li);
  });

  renameBtn.style.display = "block";
});

renameBtn.addEventListener("click", async () => {
  errorMsg.textContent = "";
  try {
    for (const { oldName, newName } of matches) {
      const fileHandle = await dirHandle.getFileHandle(oldName);
      const file = await fileHandle.getFile();
      const newHandle = await dirHandle.getFileHandle(newName, { create: true });
      const writable = await newHandle.createWritable();
      await writable.write(await file.arrayBuffer());
      await writable.close();
      await dirHandle.removeEntry(oldName);
    }
    renameBtn.style.display = "none";
    previewList.innerHTML = "<li class='hint'>Dosyalar yeniden adlandırıldı. ✅</li>";
  } catch (err) {
    errorMsg.textContent = `Hata: ${err.message}`;
  }
});
