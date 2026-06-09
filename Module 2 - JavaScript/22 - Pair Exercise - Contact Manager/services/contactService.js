// Pure logic on a contacts array. No file access and no console output here.

// Add a contact. Throws if the email already exists.
function addContact(contacts, contact) {
  if (contacts.some((c) => c.email === contact.email)) {
    throw new Error("Contact with this email already exists");
  }
  contacts.push(contact);
  return contact;
}

// Delete a contact by email. Throws if not found. Returns the removed contact.
function deleteContact(contacts, email) {
  const index = contacts.findIndex((c) => c.email === email);
  if (index === -1) {
    throw new Error("No contact found with email: " + email);
  }
  return contacts.splice(index, 1)[0];
}

// Return contacts whose name or email contains the query (case-insensitive).
function searchContacts(contacts, query) {
  const q = query.toLowerCase();
  return contacts.filter(
    (c) => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
  );
}

module.exports = { addContact, deleteContact, searchContacts };
