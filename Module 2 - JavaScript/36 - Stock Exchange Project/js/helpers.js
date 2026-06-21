// small shared helpers used across the pages.

// wait until the user stops typing before firing (step 2.1 - live search).
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// escape user text so it can't break the regex below.
function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// wrap every match of `query` inside the text with <mark> (step 7 - highlight).
function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${escapeRegExp(query)})`, "ig");
  return String(text).replace(re, "<mark>$1</mark>");
}

// read a value from the url query string (e.g. ?symbol=AAPL).
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// format a percentage with a sign and the right up/down class.
function changeView(pct) {
  const value = Number(pct) || 0;
  return {
    cls: value >= 0 ? "up" : "down",
    text: (value >= 0 ? "+" : "") + value.toFixed(2) + "%",
  };
}
