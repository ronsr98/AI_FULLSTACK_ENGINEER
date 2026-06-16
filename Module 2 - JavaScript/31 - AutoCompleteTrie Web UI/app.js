// Wires the AutoCompleteTrie to the page: add words, live suggestions, errors.
const trie = new AutoCompleteTrie();
const words = []; // just for showing the dictionary

const input = document.getElementById("wordInput");
const addBtn = document.getElementById("addBtn");
const suggestions = document.getElementById("suggestions");
const message = document.getElementById("message");
const dictionary = document.getElementById("dictionary");

function showMessage(text, isError) {
  message.textContent = text;
  message.style.color = isError ? "#e74c3c" : "#27ae60";
}

function renderDictionary() {
  dictionary.innerHTML =
    "<strong>Dictionary:</strong> " + (words.length ? words.join(", ") : "(empty)");
}

// Add a word (with error handling)
addBtn.addEventListener("click", () => {
  const word = input.value.trim().toLowerCase();
  if (!word) {
    showMessage("Please type a word to add", true);
    return;
  }
  if (trie.findWord(word)) {
    showMessage(`'${word}' is already in the dictionary`, true);
    return;
  }
  trie.addWord(word);
  words.push(word);
  renderDictionary();
  showMessage(`Added '${word}'`, false);
  input.value = "";
  suggestions.innerHTML = "";
});

// Live suggestions as the user types
input.addEventListener("input", () => {
  const prefix = input.value.trim().toLowerCase();
  suggestions.innerHTML = "";
  if (!prefix) return;

  const matches = trie.predictWords(prefix);
  if (matches.length === 0) {
    const li = document.createElement("li");
    li.className = "no-match";
    li.textContent = "No suggestions";
    suggestions.appendChild(li);
    return;
  }
  matches.forEach((word) => {
    const li = document.createElement("li");
    li.textContent = word;
    li.addEventListener("click", () => {
      input.value = word;
      suggestions.innerHTML = "";
    });
    suggestions.appendChild(li);
  });
});
