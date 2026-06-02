// ===================================================================
// Module 2 - JavaScript | Conditional Statements
// ===================================================================

// ---------- Exercise 1: Basic Age Check ----------
console.log("--- Exercise 1: Age Check ---");
let age = 20;
if (age >= 18) {
  console.log("You are old enough to vote.");
} else {
  console.log("Sorry, you are too young to vote.");
}

// ---------- Exercise 2: Grade Classification ----------
console.log("\n--- Exercise 2: Grade ---");
let score = 85;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`Score ${score} -> Grade ${grade}`);

// ---------- Exercise 3: Weather Decision Making ----------
console.log("\n--- Exercise 3: Weather ---");
let temperature = 20;
let weather = "sunny";
let activity;

if (weather === "sunny") {
  if (temperature > 24) {
    activity = "Go to the beach";
  } else if (temperature >= 15) {        // 15 - 24
    activity = "Go for a walk";
  } else {                               // below 15
    activity = "Stay inside and read";
  }
} else if (weather === "rainy") {
  activity = "Watch a movie indoors";
} else if (weather === "cloudy") {
  if (temperature > 21) {
    activity = "Go hiking";
  } else {                               // 21 or below
    activity = "Visit a museum";
  }
}
console.log(`Weather: ${weather}, Temp: ${temperature}C -> ${activity}`);

// ---------- Exercise 4: Multiple Condition Validator ----------
console.log("\n--- Exercise 4: Account Validator ---");
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
  console.log("Account created successfully!");
} else {
  if (usernameLength < 5) console.log("Error: Username must be at least 5 characters.");
  if (passwordLength < 8) console.log("Error: Password must be at least 8 characters.");
  if (userAge < 13) console.log("Error: You must be 13 or older.");
}

// ---------- Exercise 5: Complex Business Logic (discount) ----------
console.log("\n--- Exercise 5: Discount ---");
let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday ... 6 = Saturday
const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;

let discount;
if (customerType === "vip") {
  discount = 0.20;                                  // VIP: always 20%
} else if (customerType === "premium") {
  discount = isWeekend ? 0.15 : 0.10;               // premium: 15% weekend / 10% weekday
} else { // regular
  discount = purchaseAmount > 100 ? 0.10            // regular: tiered by amount
           : purchaseAmount > 50  ? 0.05
           : 0;
}
console.log(`${customerType} customer, $${purchaseAmount}, ${isWeekend ? "weekend" : "weekday"} -> ${discount * 100}% off`);
console.log(`Final price: $${(purchaseAmount * (1 - discount)).toFixed(2)}`);

// ---------- Exercise 6: Leap Year Calculator ----------
console.log("\n--- Exercise 6: Leap Year ---");
let year = 2024;
let isLeap;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    isLeap = year % 400 === 0;   // divisible by 100 => must also be divisible by 400
  } else {
    isLeap = true;
  }
} else {
  isLeap = false;
}
console.log(`${year} is ${isLeap ? "a leap year" : "not a leap year"}.`);

// quick check against the given examples:
for (const y of [2024, 1900, 2000, 2023]) {
  const leap = y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
  console.log(`${y} -> ${leap ? "leap" : "not leap"}`);
}
