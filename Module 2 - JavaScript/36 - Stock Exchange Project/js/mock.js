// built-in fake "api" so the whole site works with no key and no network.
// the logo images are public FMP urls that load without a key, so it still looks real.

const MOCK_COMPANIES = [
  { symbol: "AAPL",  companyName: "Apple Inc.",            price: 229.87, changesPercentage: 1.24,  website: "https://www.apple.com",     description: "Apple designs, manufactures and markets smartphones, computers, tablets, wearables and accessories, and sells a range of related services." },
  { symbol: "MSFT",  companyName: "Microsoft Corporation", price: 426.13, changesPercentage: 0.78,  website: "https://www.microsoft.com", description: "Microsoft develops and supports software, services, devices and solutions worldwide, including Windows, Office, Azure and Xbox." },
  { symbol: "GOOGL", companyName: "Alphabet Inc.",         price: 168.42, changesPercentage: -0.53, website: "https://abc.xyz",           description: "Alphabet is the parent company of Google, providing search, advertising, cloud, Android, YouTube and other technology products." },
  { symbol: "AMZN",  companyName: "Amazon.com, Inc.",      price: 186.29, changesPercentage: 2.11,  website: "https://www.amazon.com",    description: "Amazon is an online retailer and cloud provider offering e-commerce, AWS cloud services, devices, and streaming media." },
  { symbol: "TSLA",  companyName: "Tesla, Inc.",           price: 248.50, changesPercentage: -1.87, website: "https://www.tesla.com",     description: "Tesla designs, manufactures and sells electric vehicles and clean energy generation and storage systems." },
  { symbol: "META",  companyName: "Meta Platforms, Inc.",  price: 563.27, changesPercentage: 0.95,  website: "https://about.meta.com",    description: "Meta builds technologies that help people connect, including Facebook, Instagram, WhatsApp, Messenger and Reality Labs." },
  { symbol: "NVDA",  companyName: "NVIDIA Corporation",    price: 135.58, changesPercentage: 3.42,  website: "https://www.nvidia.com",    description: "NVIDIA designs graphics processing units and system-on-chip units for gaming, data center, AI and automotive markets." },
  { symbol: "NFLX",  companyName: "Netflix, Inc.",         price: 701.35, changesPercentage: -0.34, website: "https://www.netflix.com",   description: "Netflix is a streaming entertainment service offering TV series, films and games to members across the world." },
  { symbol: "AMD",   companyName: "Advanced Micro Devices",price: 152.88, changesPercentage: 1.66,  website: "https://www.amd.com",       description: "AMD designs high-performance computing, graphics and visualization technologies for data centers, PCs and gaming." },
  { symbol: "INTC",  companyName: "Intel Corporation",     price: 23.41,  changesPercentage: -2.05, website: "https://www.intel.com",     description: "Intel designs and manufactures microprocessors, chipsets and other semiconductor components for computing and communications." },
];

// attach a logo url + a derived absolute change to each company.
MOCK_COMPANIES.forEach((c) => {
  c.image = `https://financialmodelingprep.com/image-stock/${c.symbol}.png`;
  c.changes = +(c.price * (c.changesPercentage / 100)).toFixed(2);
});

// build a stable-ish price history so the chart looks believable.
function mockHistory(symbol, base) {
  // tiny seeded random so the same symbol draws the same chart every reload.
  let seed = [...symbol].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const out = [];
  let price = base;
  const today = new Date();
  for (let i = 120; i >= 0; i--) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    price = Math.max(1, price + (rand() - 0.48) * base * 0.03);
    out.push({ date: day.toISOString().slice(0, 10), close: +price.toFixed(2) });
  }
  return out.reverse(); // newest first, like the real endpoint
}

const MockApi = {
  // search endpoint shape: { symbol, name, exchangeShortName, ... }
  search(query) {
    const q = query.toLowerCase();
    return MOCK_COMPANIES
      .filter((c) => c.symbol.toLowerCase().includes(q) || c.companyName.toLowerCase().includes(q))
      .slice(0, 10)
      .map((c) => ({ symbol: c.symbol, name: c.companyName, exchangeShortName: "NASDAQ", currency: "USD" }));
  },

  // profile endpoint shape: array of company objects (supports multi-symbol).
  profile(symbols) {
    return symbols
      .map((s) => MOCK_COMPANIES.find((c) => c.symbol === s))
      .filter(Boolean)
      .map((c) => ({ ...c }));
  },

  // historical endpoint shape: { symbol, historical: [{ date, close }] }
  historical(symbol) {
    const c = MOCK_COMPANIES.find((x) => x.symbol === symbol);
    return { symbol, historical: mockHistory(symbol, c ? c.price : 100) };
  },
};
