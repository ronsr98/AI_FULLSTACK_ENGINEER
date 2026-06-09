# Pair Exercise - Contact Manager

A command-line contact manager focused on **error handling**.
Built in a modular way — logic is separated from the UI.

## Structure
```
contact-manager/
├── contacts.js               # entry point (reads process.argv)
├── commands/
│   └── commandHandler.js     # command parsing + all console output (UI)
├── services/
│   └── contactService.js     # pure logic: add / delete / search
└── utils/
    ├── validation.js         # custom ValidationError + email check
    └── fileUtils.js          # load/save the JSON file + error handling
```

## Commands
```bash
node contacts.js add "name" "email" "phone"   # add a contact
node contacts.js list                         # list all contacts
node contacts.js search "query"               # search by name or email
node contacts.js delete "email"               # delete by email
node contacts.js help                         # show help
```

## Error handling covered
- Invalid email (must contain `@`) — custom `ValidationError`
- Missing arguments / unknown command
- Missing contacts file (creates a new list)
- Corrupted contacts file (invalid JSON)
- Duplicate email on add / contact not found on delete
- Write failures when saving

Contacts are stored in `contacts.json` (created automatically on the first add).
