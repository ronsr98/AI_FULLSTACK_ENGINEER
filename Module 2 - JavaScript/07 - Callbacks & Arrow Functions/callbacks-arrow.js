// Module 2 - JavaScript | Callbacks & Arrow Functions - Exercises

// ---------- Exercise 1: Callbacks - pushPull ----------
console.log("--- Exercise 1: pushPull ---");
const push = function () {
  console.log("pushing it!");
};
const pull = function () {
  console.log("pulling it!");
};

// pushPull receives a function and invokes it
const pushPull = function (action) {
  action();
};

pushPull(push); // "pushing it!"
pushPull(pull); // "pulling it!"

// ---------- Exercise 2: Callbacks - getTime ----------
console.log("\n--- Exercise 2: getTime ---");
const returnTime = function (time) {
  console.log("The current time is: " + time);
};

// getTime takes a function and calls it with an argument (the current time)
const getTime = function (callback) {
  const time = new Date();
  callback(time);
};

getTime(returnTime);

// ---------- Exercise 3: Callbacks - the missing logData ----------
console.log("\n--- Exercise 3: missing function ---");
// The original code calls displayData(console.error, logData, "I like to party"),
// but `logData` was never defined -> ReferenceError: logData is not defined.
// We only ADD the missing function (a callback that logs the data).
const logData = function (data) {
  console.log(data);
};

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party");

// ---------- Exercise 4: Arrow Functions - sum of three (one line) ----------
console.log("\n--- Exercise 4: sum of three ---");
const sumThree = (a, b, c) => a + b + c;
console.log(sumThree(2, 3, 5)); // 10

// ---------- Exercise 5: Arrow Functions - capitalize (one line) ----------
console.log("\n--- Exercise 5: capitalize ---");
const capitalize = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

console.log(capitalize("bOb"));      // Bob
console.log(capitalize("TAYLOR"));   // Taylor
console.log(capitalize("feliSHIA")); // Felishia

// ---------- Exercise 6: Arrow Functions - commentOnWeather (one line) ----------
console.log("\n--- Exercise 6: commentOnWeather ---");
const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (temp) => "It's " + determineWeather(temp);

console.log(commentOnWeather(30)); // It's hot
console.log(commentOnWeather(22)); // It's cold
