// step 11 - the compare page. shows the picked companies side by side.
class Compare {
  constructor(root, api) {
    this.root = root;
    this.api = api;
  }

  async load(symbols) {
    this.root.innerHTML = `<div class="loading">Loading comparison...</div>`;
    try {
      const profiles = await this.api.profile(symbols); // one multi-symbol request
      if (!profiles.length) {
        this.root.innerHTML = `<div class="error">Nothing to compare.</div>`;
        return;
      }
      this.render(profiles);
    } catch (err) {
      this.root.innerHTML = `<div class="error">${err.message}</div>`;
    }
  }

  render(profiles) {
    this.root.innerHTML = `<div class="compare-grid">${profiles.map((p) => this.card(p)).join("")}</div>`;
  }

  card(p) {
    const change = changeView(p.changesPercentage);
    return `
      <div class="compare-card">
        <img src="${p.image}" alt="" onerror="this.style.display='none'">
        <h2>${p.companyName}</h2>
        <div class="symbol">${p.symbol}</div>
        <div class="price">$${Number(p.price).toFixed(2)}</div>
        <div class="${change.cls} big-change">${change.text}</div>
        <p class="mini-desc">${(p.description || "").slice(0, 160)}...</p>
        <a class="details-link" href="company.html?symbol=${p.symbol}">View details &rarr;</a>
      </div>`;
  }
}
