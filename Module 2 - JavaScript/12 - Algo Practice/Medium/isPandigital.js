/*
A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

Examples
isPandigital(98140723568910) ➞ true

isPandigital(90864523148909) ➞ false
// 7 is missing.

isPandigital(112233445566778899) ➞ false
*/

// true if the number contains every digit 0-9
function isPandigital(num) {
  const digits = new Set(String(num));
  for (let d = 0; d <= 9; d++) {
    if (!digits.has(String(d))) return false;
  }
  return true;
}

exports.solution = isPandigital;
