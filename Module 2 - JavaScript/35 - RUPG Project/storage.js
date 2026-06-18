// Storage - saves/loads user pages in localStorage (Save/Load + multiple users extension).
class Storage {
  constructor(key = "rupg_saved_users") {
    this.key = key;
  }

  // all saved users, keyed by full name
  getAll() {
    return JSON.parse(localStorage.getItem(this.key)) || {};
  }

  // save the current page under the user's name, returns that name
  save(userData) {
    const all = this.getAll();
    const fullName = `${userData.main.firstName} ${userData.main.lastName}`;
    all[fullName] = userData;
    localStorage.setItem(this.key, JSON.stringify(all));
    return fullName;
  }

  // load a saved page by name (or null if not found)
  load(fullName) {
    return this.getAll()[fullName] ?? null;
  }

  // names of all saved users (for the dropdown)
  names() {
    return Object.keys(this.getAll());
  }
}
