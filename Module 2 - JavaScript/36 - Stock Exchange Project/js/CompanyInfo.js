// step 9 - everything the company page needs, wrapped in one class.
// loads the profile first, then the chart, each with its own loading state.
class CompanyInfo {
  constructor(root, api) {
    this.root = root;
    this.api = api;
  }

  showLoading() {
    this.root.innerHTML = `<div class="loading">Loading company...</div>`;
  }

  async load(symbol) {
    this.showLoading();
    try {
      const [profile] = await this.api.profile(symbol);
      if (!profile) {
        this.root.innerHTML = `<div class="error">Company "${symbol}" not found.</div>`;
        return;
      }
      this.renderProfile(profile);
      // chart comes after - it's a second request.
      const history = await this.api.historical(symbol);
      this.renderChart(history);
    } catch (err) {
      this.root.innerHTML = `<div class="error">${err.message}</div>`;
    }
  }

  renderProfile(p) {
    const change = changeView(p.changesPercentage);
    this.root.innerHTML = `
      <div class="company">
        <div class="company-head">
          <img class="company-logo" src="${p.image}" alt="" onerror="this.style.display='none'">
          <div class="company-meta">
            <h1 class="company-name">${p.companyName} <span class="company-symbol">${p.symbol}</span></h1>
            <div class="company-price">
              $${Number(p.price).toFixed(2)}
              <span class="${change.cls}">${change.text}</span>
            </div>
            <a class="company-link" href="${p.website}" target="_blank" rel="noopener">${p.website}</a>
          </div>
        </div>
        <p class="company-desc">${p.description || ""}</p>
        <div class="chart-card">
          <h3>Price history</h3>
          <canvas id="price-chart"></canvas>
        </div>
      </div>`;
  }

  renderChart(history) {
    const rows = (history.historical || []).slice().reverse(); // oldest -> newest for the x axis
    const labels = rows.map((r) => r.date);
    const prices = rows.map((r) => r.close ?? r.price);

    new Chart(document.getElementById("price-chart"), {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Close price",
          data: prices,
          borderColor: "#2a9d8f",
          backgroundColor: "rgba(42, 157, 143, 0.12)",
          fill: true,
          pointRadius: 0,
          borderWidth: 2,
          tension: 0.25,
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { ticks: { maxTicksLimit: 8 } } },
      },
    });
  }
}
