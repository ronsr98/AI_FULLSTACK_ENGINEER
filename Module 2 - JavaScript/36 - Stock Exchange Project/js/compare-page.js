// compare page wiring (step 11).
const api = new Api(CONFIG);

new Marquee(document.getElementById("marquee"), api).start();

// ?symbols=AAPL,MSFT,GOOGL  -> capped at 3
const symbols = (getParam("symbols") || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)
  .slice(0, 3);

const compare = new Compare(document.getElementById("compare"), api);

if (symbols.length) {
  compare.load(symbols);
} else {
  document.getElementById("compare").innerHTML = `<div class="error">No companies selected to compare.</div>`;
}
