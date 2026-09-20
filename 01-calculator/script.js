const display = document.getElementById("display");

let expression = "";

function render() {
  display.textContent = expression === "" ? "0" : expression;
}

function safeEval(expr) {
  if (!/^[0-9+\-*/%.\s]+$/.test(expr)) {
    throw new Error("Geçersiz ifade");
  }
  // eslint-disable-next-line no-new-func
  return Function(`"use strict"; return (${expr})`)();
}

document.querySelectorAll(".calc-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    if (action === "clear") {
      expression = "";
    } else if (action === "backspace") {
      expression = expression.slice(0, -1);
    } else if (action === "num") {
      expression += btn.dataset.value;
    } else if (action === "op") {
      if (expression === "" && btn.dataset.value !== "-") return;
      expression += btn.dataset.value;
    } else if (action === "equals") {
      try {
        const result = safeEval(expression);
        expression = String(result);
      } catch (e) {
        expression = "Hata";
      }
    }

    render();
  });
});

render();
