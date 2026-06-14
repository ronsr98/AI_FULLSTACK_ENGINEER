const readline = require("readline");
const AutoCompleteTrie = require("./AutoCompleteTrie");

const trie = new AutoCompleteTrie();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

function showHelp() {
  console.log("Commands:");
  console.log("  add <word>        - Add word to dictionary");
  console.log("  find <word>       - Check if word exists");
  console.log("  complete <prefix> - Get completions");
  console.log("  help              - Show this message");
  console.log("  exit              - Quit program");
}

console.log("=== AutoComplete Trie Console ===");
console.log("Type 'help' for commands\n");
rl.prompt();

rl.on("line", (line) => {
  const [command, ...rest] = line.trim().split(" ");
  const arg = rest.join(" ").toLowerCase();

  switch (command) {
    case "add":
      trie.addWord(arg);
      console.log(`✓ Added '${arg}' to dictionary`);
      break;
    case "find":
      if (trie.findWord(arg)) console.log(`✓ '${arg}' exists in dictionary`);
      else console.log(`✗ '${arg}' not found in dictionary`);
      break;
    case "complete": {
      const words = trie.predictWords(arg);
      if (words.length) console.log(`Suggestions for '${arg}': ${words.join(", ")}`);
      else console.log(`No suggestions for '${arg}'`);
      break;
    }
    case "help":
      showHelp();
      break;
    case "exit":
      console.log("Goodbye!");
      rl.close();
      return;
    case "":
      break;
    default:
      console.log(`Unknown command '${command}' - type 'help'`);
  }
  rl.prompt();
});
