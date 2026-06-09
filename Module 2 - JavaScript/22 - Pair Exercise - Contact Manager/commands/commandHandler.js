const { loadContacts, saveContacts, FILE } = require("../utils/fileUtils");
const { validateEmail } = require("../utils/validation");
const { addContact, deleteContact, searchContacts } = require("../services/contactService");

// Loads the contacts and prints the loading messages (UI layer).
// Returns the array, or null if the file is corrupted (so the caller stops).
function loadWithMessages() {
  console.log(`Loading contacts from ${FILE}...`);
  try {
    const contacts = loadContacts();
    console.log(`✓ Loaded ${contacts.length} contacts`);
    return contacts;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("✗ File not found - creating new contact list");
      return [];
    }
    if (err.code === "CORRUPT") {
      console.log("✗ Error: Contacts file is corrupted");
      return null;
    }
    console.log("✗ Error: " + err.message);
    return null;
  }
}

function printContacts(contacts) {
  contacts.forEach((c, i) => {
    console.log(`${i + 1}. ${c.name} - ${c.email} - ${c.phone}`);
  });
}

function showHelp() {
  console.log(`Usage: node contacts.js [command] [arguments]

Commands:
  add "name" "email" "phone"  - Add a new contact
  list                        - List all contacts
  search "query"              - Search contacts by name or email
  delete "email"              - Delete contact by email
  help                        - Show this help message

Examples:
  node contacts.js add "John Doe" "john@example.com" "555-123-4567"
  node contacts.js search "john"
  node contacts.js delete "john@example.com"`);
}

function handleAdd(args) {
  const [name, email, phone] = args;
  if (!name || !email || !phone) {
    console.log("✗ Error: Missing arguments for add command");
    console.log('Usage: node contacts.js add "name" "email" "phone"');
    return;
  }
  try {
    validateEmail(email);
  } catch (err) {
    console.log("✗ Error: " + err.message);
    return;
  }
  const contacts = loadWithMessages();
  if (contacts === null) return;
  try {
    addContact(contacts, { name, email, phone });
    console.log("✓ Contact added: " + name);
    saveContacts(contacts);
    console.log(`✓ Contacts saved to ${FILE}`);
  } catch (err) {
    console.log("✗ Error: " + err.message);
  }
}

function handleList() {
  const contacts = loadWithMessages();
  if (contacts === null) return;
  console.log("\n=== All Contacts ===");
  if (contacts.length === 0) {
    console.log("No contacts yet");
  } else {
    printContacts(contacts);
  }
}

function handleSearch(args) {
  const [query] = args;
  if (!query) {
    console.log("✗ Error: Missing search query");
    console.log('Usage: node contacts.js search "query"');
    return;
  }
  const contacts = loadWithMessages();
  if (contacts === null) return;
  const results = searchContacts(contacts, query);
  console.log(`\n=== Search Results for "${query}" ===`);
  if (results.length === 0) {
    console.log(`No contacts found matching "${query}"`);
  } else {
    printContacts(results);
  }
}

function handleDelete(args) {
  const [email] = args;
  if (!email) {
    console.log("✗ Error: Missing email for delete command");
    console.log('Usage: node contacts.js delete "email"');
    return;
  }
  const contacts = loadWithMessages();
  if (contacts === null) return;
  try {
    const removed = deleteContact(contacts, email);
    console.log("✓ Contact deleted: " + removed.name);
    saveContacts(contacts);
    console.log(`✓ Contacts saved to ${FILE}`);
  } catch (err) {
    console.log("✗ Error: " + err.message);
  }
}

// Parse the command and route it to the right handler.
function handleCommand(command, args) {
  switch (command) {
    case "add": return handleAdd(args);
    case "list": return handleList();
    case "search": return handleSearch(args);
    case "delete": return handleDelete(args);
    case "help": return showHelp();
    case undefined:
      console.log("✗ Error: No command provided");
      console.log("Usage: node contacts.js [add|list|search|delete|help] [arguments]");
      return;
    default:
      console.log(`✗ Error: Unknown command '${command}'`);
      console.log("Usage: node contacts.js [add|list|search|delete|help] [arguments]");
  }
}

module.exports = { handleCommand };
