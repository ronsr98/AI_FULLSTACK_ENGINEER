// thin wrapper around the Financial Modeling Prep API.
// if there's no api key in config, it quietly falls back to the mock data,
// so every page still works out of the box.
class Api {
  constructor(config) {
    this.key = config.API_KEY;
    this.base = config.BASE;
    this.useMock = !this.key;
  }

  // build a url and attach the apikey to it.
  url(path, params = {}) {
    const query = new URLSearchParams({ ...params, apikey: this.key });
    return `${this.base}${path}?${query.toString()}`;
  }

  // step 1 - search NASDAQ companies, 10 results.
  async search(query) {
    if (this.useMock) return MockApi.search(query);
    const res = await fetch(this.url("/search", { query, limit: 10, exchange: "NASDAQ" }));
    if (!res.ok) throw new Error("Search failed (HTTP " + res.status + ")");
    return res.json();
  }

  // step 3.1 - one symbol or many (comma separated) in a single request.
  async profile(symbols) {
    const list = Array.isArray(symbols) ? symbols : [symbols];
    if (this.useMock) return MockApi.profile(list);
    const res = await fetch(this.url(`/profile/${list.join(",")}`));
    if (!res.ok) throw new Error("Profile failed (HTTP " + res.status + ")");
    const data = await res.json();
    // make sure every profile has a percentage we can render.
    return data.map((p) => ({
      ...p,
      changesPercentage:
        p.changesPercentage ??
        (p.changes && p.price ? (p.changes / (p.price - p.changes)) * 100 : 0),
    }));
  }

  // step 2 - historical line data for the chart.
  async historical(symbol) {
    if (this.useMock) return MockApi.historical(symbol);
    const res = await fetch(this.url(`/historical-price-full/${symbol}`, { serietype: "line" }));
    if (!res.ok) throw new Error("History failed (HTTP " + res.status + ")");
    return res.json();
  }
}
