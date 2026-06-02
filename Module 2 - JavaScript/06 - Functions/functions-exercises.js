// ===================================================================
// Module 2 - JavaScript | Functions - Exercises
// ===================================================================

// ---------- Exercise 1: isEven ----------
console.log("--- Exercise 1: isEven ---");
const isEven = function (num) {
  return num % 2 === 0;
};
console.log(isEven(4));  // true
console.log(isEven(7));  // false

// ---------- Exercise 2: print the odd numbers from an array ----------
console.log("\n--- Exercise 2: print odds ---");
const printOdds = function (numbers) {
  for (const num of numbers) {
    if (!isEven(num)) {       // reuse Exercise 1: odd means "not even"
      console.log(num);
    }
  }
};
printOdds([1, 2, 3, 4, 5, 6, 7]); // 1, 3, 5, 7

// ---------- Exercise 3: checkExists ----------
console.log("\n--- Exercise 3: checkExists ---");
const checkExists = function (arr, target) {
  for (const item of arr) {
    if (item === target) {
      return true;          // found it -> stop and return true
    }
  }
  return false;             // looped through everything, never found it
};
console.log(checkExists([1, 2, 3], 2)); // true
console.log(checkExists([1, 2, 3], 5)); // false

// ---------- Exercise 4: calculator object with methods ----------
console.log("\n--- Exercise 4: calculator ---");
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

const result1 = calculator.add(20, 1);      // 21
const result2 = calculator.subtract(30, 9); // 21
console.log(calculator.add(result1, result2)); // 42

// ---------- Exercise 5: turnToKing ----------
console.log("\n--- Exercise 5: turnToKing ---");
// Each helper is a one-liner, as the exercise suggests.
const increaseByNameLength = function (money, name) {
  return money * name.length;          // 100 * "MARTIN LUTHER".length(13) = 1300
};
const makeRegal = function (name) {
  return "His Royal Highness, " + name;
};

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);
  console.log(name + " has " + money + " gold coins");
};
turnToKing("martin luther", 100);
// -> "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// ---------- Exercise 6: 3-digit Armstrong numbers ----------
console.log("\n--- Exercise 6: Armstrong numbers ---");
const isArmstrong = function (num) {
  const digits = String(num).split("");      // e.g. 153 -> ["1","5","3"]
  const power = digits.length;                // 3 digits -> raise each to the 3rd power
  let sum = 0;
  for (const digit of digits) {
    sum += Number(digit) ** power;
  }
  return sum === num;
};

for (let n = 100; n <= 999; n++) {
  if (isArmstrong(n)) {
    console.log(n); // 153, 370, 371, 407
  }
}
