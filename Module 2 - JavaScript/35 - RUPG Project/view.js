// View - everything that touches the DOM. Doesn't know where the data came from.
class View {
  $(sel) {
    return document.querySelector(sel);
  }

  // "pikachu" -> "Pikachu"
  properCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  // show some html in the status area and hide the profile
  showStatus(html) {
    this.$("#status").innerHTML = html;
    this.$("#status").classList.remove("hidden");
    this.$("#profile").classList.add("hidden");
  }

  // spinner while we're fetching
  showLoading() {
    this.showStatus(`<div class="spinner"></div><p>Summoning a random human...</p>`);
  }

  // friendly message if an API fails
  renderError(message) {
    this.showStatus(`<div class="error">😵 ${message}. Try again!</div>`);
  }

  // html for a single friend in the friends list
  friendCard({ firstName, lastName, picture }) {
    return `
      <div class="friend">
        <img src="${picture}" alt="${firstName}">
        <span>${firstName} ${lastName}</span>
      </div>`;
  }

  // fill the whole page with one user's data
  render({ main, quote, pokemon, about, friends }) {
    this.$("#avatar").src = main.picture;
    this.$("#full-name").textContent = `${main.firstName} ${main.lastName}`;
    this.$("#location").textContent = `📍 ${main.city}, ${main.state}`;

    this.$("#quote").textContent = `"${quote}"`;

    this.$("#pokemon-img").src = pokemon.image;
    this.$("#pokemon-img").alt = pokemon.name;
    this.$("#pokemon-name").textContent = this.properCase(pokemon.name);
    // show the shiny badge + glow only when the pokemon is shiny
    this.$("#shiny-badge").classList.toggle("hidden", !pokemon.isShiny);
    this.$("#pokemon-frame").classList.toggle("shiny", pokemon.isShiny);

    this.$("#about").textContent = about;
    this.$("#friends").innerHTML = friends.map((f) => this.friendCard(f)).join("");

    this.$("#status").classList.add("hidden");
    this.$("#profile").classList.remove("hidden");
  }

  // rebuild the saved-users dropdown (for the load feature)
  updateDropdown(names) {
    const select = this.$("#saved-users");
    select.disabled = names.length === 0;
    select.innerHTML = names.length
      ? names.map((name) => `<option>${name}</option>`).join("")
      : `<option value="">No saved users</option>`;
  }
}
