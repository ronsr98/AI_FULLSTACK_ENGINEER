// step 10 - the little "compare bar" that sits above the title.
// keeps the picked symbols in localStorage so they survive page navigation.
class CompareList {
  constructor(root) {
    this.root = root;
    this.key = "compareSymbols";
    this.max = 3; // step 11 (bonus) - cap the comparison at 3
    this.symbols = JSON.parse(localStorage.getItem(this.key) || "[]");
    this.render();
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.symbols));
  }

  add(company) {
    if (!company || this.symbols.includes(company.symbol)) return;
    if (this.symbols.length >= this.max) {
      alert(`You can compare up to ${this.max} companies.`);
      return;
    }
    this.symbols.push(company.symbol);
    this.save();
    this.render();
  }

  remove(symbol) {
    this.symbols = this.symbols.filter((s) => s !== symbol);
    this.save();
    this.render();
  }

  render() {
    if (!this.symbols.length) {
      this.root.innerHTML = "";
      return;
    }

    this.root.innerHTML = `
      <div class="compare-bar">
        <span class="compare-label">Comparing:</span>
        ${this.symbols.map((s) => `<button class="chip" data-symbol="${s}">${s} &times;</button>`).join("")}
        <a class="compare-go" href="compare.html?symbols=${this.symbols.join(",")}">Compare ${this.symbols.length} &rarr;</a>
      </div>`;

    this.root.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => this.remove(btn.dataset.symbol));
    });
  }
}
