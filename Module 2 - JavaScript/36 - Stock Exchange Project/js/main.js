// home page wiring - builds the pieces and connects their callbacks together (step 6).
const api = new Api(CONFIG);

// ticker on top (step 4/5)
new Marquee(document.getElementById("marquee"), api).start();

// the compare bar above the title (step 10)
const compareList = new CompareList(document.getElementById("compare-bar"));

// results list - when its compare button fires, push into the compare bar (step 8 -> 10)
const results = new SearchResult(document.getElementById("results"), {
  onCompare: (company) => compareList.add(company),
});

// search form - on search, fetch + enrich + render (steps 1, 3, 3.1)
new SearchForm(document.getElementById("search"), async (query) => {
  results.showLoading();
  try {
    const found = await api.search(query);
    const symbols = found.map((c) => c.symbol);

    // step 3.1 - grab all the profiles in a single multi-symbol request,
    // so we add logo + change without 10 separate calls.
    const profiles = symbols.length ? await api.profile(symbols) : [];

    const merged = found.map((f) => {
      const p = profiles.find((x) => x.symbol === f.symbol) || {};
      return {
        symbol: f.symbol,
        companyName: p.companyName || f.name,
        image: p.image,
        price: p.price,
        changesPercentage: p.changesPercentage,
      };
    });

    results.render(merged, query);
  } catch (err) {
    document.getElementById("results").innerHTML = `<div class="error">${err.message}</div>`;
  }
});
