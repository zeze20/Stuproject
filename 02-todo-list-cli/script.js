const STORAGE_KEY = "todo-list-items";

const listEl = document.getElementById("todoList");
const inputEl = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const emptyHint = document.getElementById("emptyHint");

function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function render() {
  const todos = loadTodos();
  listEl.innerHTML = "";
  emptyHint.style.display = todos.length === 0 ? "block" : "none";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "list-item" + (todo.done ? " done" : "");

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.addEventListener("click", () => {
      todo.done = !todo.done;
      saveTodos(todos);
      render();
    });

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn-ghost";
    removeBtn.textContent = "Sil";
    removeBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos(todos);
      render();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    listEl.appendChild(li);
  });
}

function addTodo() {
  const text = inputEl.value.trim();
  if (!text) return;
  const todos = loadTodos();
  todos.push({ text, done: false });
  saveTodos(todos);
  inputEl.value = "";
  render();
}

addBtn.addEventListener("click", addTodo);
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

render();
