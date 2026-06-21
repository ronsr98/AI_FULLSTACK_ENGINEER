// step 6 + 3 + 7 + 8 - the results list.
// shows logo + name + symbol + change, highlights the query, and has a compare button.
class SearchResult {
  constructor(root, { onCompare }) {
    this.root = root;
    this.onCompare = onCompare; // step 8 - fires with the full company object
    this.companies = [];
    this.query = "";
  }

  showLoading() {
    this.root.innerHTML = `<div class="loading">Searching...</div>`;
  }

  render(companies, query) {
    this.companies = companies;
    this.query = query;

    if (!companies.length) {
      this.root.innerHTML = `<div class="empty">No companies found.</div>`;
      return;
    }

    this.root.innerHTML = companies.map((c) => this.itemHtml(c)).join("");

    // wire up the compare buttons. stopPropagation so clicking it
    // doesn't also follow the link to the company page.
    this.root.querySelectorAll(".compare-add").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const company = this.companies.find((c) => c.symbol === btn.dataset.symbol);
        this.onCompare(company);
      });
    });
  }

  itemHtml(c) {
    const change = changeView(c.changesPercentage);
    return `
      <a class="result" href="company.html?symbol=${c.symbol}">
        <img class="result-logo" src="${c.image}" alt="" onerror="this.style.visibility='hidden'">
        <div class="result-main">
          <div class="result-name">${highlight(c.companyName, this.query)}</div>
          <div class="result-symbol">${highlight(c.symbol, this.query)}</div>
        </div>
        <div class="result-change ${change.cls}">${change.text}</div>
        <button class="compare-add" data-symbol="${c.symbol}">+ Compare</button>
      </a>`;
  }
}
