/*
Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*/

// true if the digits form consecutive rising numbers
function ascending(str) {
  for (let len = 1; len <= Math.floor(str.length / 2); len++) {
    let num = parseInt(str.slice(0, len), 10); // guess the first number
    let built = String(num);
    let count = 1;
    while (built.length < str.length) {
      num++;
      built += String(num);
      count++;
    }
    if (built === str && count >= 2) return true;
  }
  return false;
}

exports.solution = ascending;
