// Controller - wires the service, the view and storage together and handles clicks.
class Controller {
  constructor(service, view, storage) {
    this.service = service;
    this.view = view;
    this.storage = storage;
    this.current = null; // the user page currently on screen
  }

  $(sel) {
    return document.querySelector(sel);
  }

  // hook up the buttons and show the first random page
  init() {
    this.$("#generate").addEventListener("click", () => this.generate());
    this.$("#save").addEventListener("click", () => this.save());
    this.$("#load").addEventListener("click", () => this.load());

    this.view.updateDropdown(this.storage.names());
    this.generate();
  }

  // resolve once the image has loaded (resolve on error too so we never get stuck)
  preload(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = img.onerror = resolve;
      img.src = url;
    });
  }

  // preload the images first so everything appears at once instead of popping in one by one
  async show(data) {
    const images = [data.main.picture, data.pokemon.image, ...data.friends.map((f) => f.picture)];
    await Promise.all(images.map((url) => this.preload(url)));
    this.view.render(data);
  }

  // build a brand new random user page
  async generate() {
    this.view.showLoading();
    try {
      this.current = await this.service.getRandomUserPage();
      await this.show(this.current);
    } catch (err) {
      this.view.renderError(err.message);
    }
  }

  // save the current page to localStorage
  save() {
    if (!this.current) return;
    const name = this.storage.save(this.current);
    this.view.updateDropdown(this.storage.names());
    this.$("#saved-users").value = name;
  }

  // load the user selected in the dropdown
  async load() {
    const name = this.$("#saved-users").value;
    if (!name) return;
    this.current = this.storage.load(name);
    this.view.showLoading();
    await this.show(this.current);
  }
}

const app = new Controller(new RUPGService(), new View(), new Storage());
app.init();
