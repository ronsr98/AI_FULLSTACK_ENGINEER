const fs = require("fs");

const FILE = "contacts.json";

// Read and parse the contacts file.
// Throws an error with .code "ENOENT" if it's missing, or "CORRUPT" if the JSON is invalid.
function loadContacts() {
  const raw = fs.readFileSync(FILE, "utf8"); // throws ENOENT if the file doesn't exist
  try {
    return JSON.parse(raw);
  } catch (err) {
    const corrupt = new Error("Contacts file is corrupted");
    corrupt.code = "CORRUPT";
    throw corrupt;
  }
}

// Save the contacts array to the file. Throws on a write failure.
function saveContacts(contacts) {
  try {
    fs.writeFileSync(FILE, JSON.stringify(contacts, null, 2));
  } catch (err) {
    const fail = new Error("Failed to write contacts file: " + err.message);
    fail.code = "WRITE_FAIL";
    throw fail;
  }
}

module.exports = { loadContacts, saveContacts, FILE };
