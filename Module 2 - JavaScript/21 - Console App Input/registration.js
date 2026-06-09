// Exercise 3: collect user info with readline, then print a summary.
// Run: node registration.js

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// turn rl.question (callback) into something we can await
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

(async () => {
  const name = await ask("Name: ");
  const email = await ask("Email: ");
  const age = await ask("Age: ");
  const color = await ask("Favorite Color: ");

  console.log("\nRegistration Summary:");
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Age: " + age);
  console.log("Favorite Color: " + color);

  rl.close();
})();
