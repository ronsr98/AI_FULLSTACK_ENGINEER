// Exercise 4: a menu-driven banking app that loops until you exit.
// Needs prompt-sync:  npm install prompt-sync
// Run: node banking.js

const prompt = require("prompt-sync")();

let balance = 100;
let running = true;

while (running) {
  console.log("\n=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");
  const choice = prompt("Choose option (1-4): ");

  if (choice === "1") {
    console.log("Balance: $" + balance);
  } else if (choice === "2") {
    const amount = Number(prompt("Enter amount to deposit: $"));
    if (amount > 0) {
      balance += amount;
      console.log("New balance: $" + balance);
    } else {
      console.log("Please enter a positive number");
    }
  } else if (choice === "3") {
    const amount = Number(prompt("Enter amount to withdraw: $"));
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      console.log("New balance: $" + balance);
    } else {
      console.log("Invalid amount");
    }
  } else if (choice === "4") {
    running = false;
    console.log("Goodbye!");
  } else {
    console.log("Invalid choice, pick 1-4");
  }
}
