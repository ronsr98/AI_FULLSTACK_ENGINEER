const { handleCommand } = require("./commands/commandHandler");

// process.argv is [node, contacts.js, command, ...args]
const [command, ...args] = process.argv.slice(2);

handleCommand(command, args);
