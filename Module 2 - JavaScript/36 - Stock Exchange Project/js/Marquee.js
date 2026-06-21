// step 4 + 5 - the scrolling stock ticker at the top of every page.
// takes the element to live in, and renders itself. animation is pure CSS (no <marquee> tag).
class Marquee {
  constructor(root, api) {
    this.root = root;
    this.api = api;
    this.symbols = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "META", "NVDA", "NFLX", "AMD", "INTC"];
  }

  async start() {
    try {
      const profiles = await this.api.profile(this.symbols);
      this.render(profiles);
    } catch (err) {
      // a broken ticker shouldn't break the page - just hide it.
      this.root.innerHTML = "";
    }
  }

  render(profiles) {
    const items = profiles.map((p) => {
      const change = changeView(p.changesPercentage);
      return `<span class="ticker-item">
        <b>${p.symbol}</b> $${Number(p.price).toFixed(2)}
        <span class="${change.cls}">${change.text}</span>
      </span>`;
    }).join("");

    // print the items twice so the loop scrolls seamlessly.
    this.root.innerHTML = `<div class="ticker"><div class="ticker-track">${items}${items}</div></div>`;
  }
}
