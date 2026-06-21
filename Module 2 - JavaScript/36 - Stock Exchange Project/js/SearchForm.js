// step 6 - the search box, on its own. it knows nothing about results,
// it just calls back with whatever the user typed.
class SearchForm {
  constructor(root, onSearch) {
    this.root = root;
    this.onSearch = onSearch;
    this.render();
  }

  render() {
    this.root.innerHTML = `
      <div class="search-box">
        <input id="search-input" type="text" placeholder="Search NASDAQ companies..." autocomplete="off">
        <button id="search-btn">Search</button>
      </div>`;

    const input = this.root.querySelector("#search-input");
    const button = this.root.querySelector("#search-btn");

    button.addEventListener("click", () => this.fire(input.value));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.fire(input.value);
    });

    // step 2.1 (bonus) - search as you type, debounced so we don't spam the api.
    input.addEventListener("input", debounce((e) => this.fire(e.target.value), 400));
  }

  fire(value) {
    const query = value.trim();
    if (query) this.onSearch(query);
  }
}
