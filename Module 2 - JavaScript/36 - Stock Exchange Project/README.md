# Stock Exchange Project

A multipage stock exchange website built on the Financial Modeling Prep API.

## Run it
Just open `index.html` in a browser. It works out of the box on built-in mock data, so you can review every feature without an API key or burning the 250-calls-a-day limit.

To use real live data, paste your FMP key into `js/config.js`:
```js
const CONFIG = { API_KEY: "your-key-here", BASE: "https://financialmodelingprep.com/api/v3" };
```
The app uses the key automatically when it's set, and falls back to mock data when it's empty.

## Pages
- **index.html** – search NASDAQ companies (logo, name, symbol, % change), highlight, compare bar, scrolling ticker.
- **company.html?symbol=AAPL** – company profile, price with % change (green/red), price-history chart (Chart.js).
- **compare.html?symbols=AAPL,MSFT,GOOGL** – up to 3 companies side by side.

## Structure (steps 1–11)
| File | Step | Role |
|------|------|------|
| `js/SearchForm.js` | 6 | search box (+ debounced live search, step 2.1) |
| `js/SearchResult.js` | 1,3,7,8 | results list, highlight, compare button |
| `js/CompanyInfo.js` | 2,9 | profile + chart |
| `js/Marquee.js` | 4,5 | CSS-animated ticker (no `<marquee>` tag) |
| `js/CompareList.js` | 10 | compare bar (localStorage, max 3) |
| `js/Compare.js` | 11 | comparison page |
| `js/Api.js` | – | API wrapper, multi-symbol (step 3.1), mock fallback |

Built for the **Fullstack AI Engineer** course.
