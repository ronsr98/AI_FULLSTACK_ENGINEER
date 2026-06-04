/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/

// least common multiple of a and b
function lastCommonMultiple(a, b) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return (a * b) / gcd(a, b);
}

exports.solution = lastCommonMultiple;
