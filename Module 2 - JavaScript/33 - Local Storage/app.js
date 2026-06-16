// Local Storage practice - "wisdom".
// Load whatever was saved before (or start empty).
let wisdom = JSON.parse(localStorage.getItem("wisdom")) || [];

function save() {
  localStorage.setItem("wisdom", JSON.stringify(wisdom));
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  wisdom.forEach((item) => {
    const div = document.createElement("div");
    div.className = "wisdom";
    div.textContent = item.text;

    const x = document.createElement("span");
    x.className = "x";
    x.textContent = "x";
    x.addEventListener("click", () => {
      wisdom = wisdom.filter((w) => w.id !== item.id); // delete this specific one
      save();
      render();
    });

    div.appendChild(x);
    list.appendChild(div);
  });
}

document.getElementById("add").addEventListener("click", () => {
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (!text) return;
  wisdom.push({ id: Date.now(), text });
  // on every other click (when the list length is even) save to Local Storage
  if (wisdom.length % 2 === 0) save();
  input.value = "";
  render();
});

document.getElementById("clear").addEventListener("click", () => {
  wisdom = [];
  localStorage.removeItem("wisdom"); // remove wisdom entirely from Local Storage
  render();
});

// show whatever was loaded from Local Storage on refresh
render();
