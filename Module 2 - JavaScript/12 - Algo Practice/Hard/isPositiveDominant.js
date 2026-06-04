/*
An array is positive dominant if it contains strictly more unique positive values than unique negative values.

Write a function that returns true if an array is positive dominant.

Examples
[1, 1, 1, 1, -3, -4] ➞ false
// there is only 1 unique positive value (1)
// there are 2 unique negative values (-3, -4)

[5, 99, 832, -3, -4] ➞ true

[5, 0] ➞ true

[0, -4, -1] ➞ false
Notes
0 neither counts as a positive nor a negative value.
*/

// more unique positives than unique negatives
function isPositiveDominant(arr) {
  const pos = new Set(), neg = new Set();
  for (const n of arr) {
    if (n > 0) pos.add(n);
    else if (n < 0) neg.add(n);
  }
  return pos.size > neg.size;
}

exports.solution = isPositiveDominant;
