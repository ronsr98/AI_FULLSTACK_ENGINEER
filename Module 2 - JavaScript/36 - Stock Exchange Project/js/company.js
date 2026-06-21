// company page wiring (step 2 / 9).
const api = new Api(CONFIG);

new Marquee(document.getElementById("marquee"), api).start();

const symbol = getParam("symbol");
const info = new CompanyInfo(document.getElementById("company"), api);

if (symbol) {
  info.load(symbol);
} else {
  document.getElementById("company").innerHTML = `<div class="error">No symbol in the url.</div>`;
}
