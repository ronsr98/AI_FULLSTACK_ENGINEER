/*
Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]
Notes
Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
*/

// prime factors in ascending order
function primeFactorize(n) {
  if (n === 1) return [];
  const factors = [];
  let d = 2;
  while (d * d <= n) {
    while (n % d === 0) {
      factors.push(d);
      n /= d;
    }
    d++;
  }
  if (n > 1) factors.push(n); // leftover prime
  return factors;
}

exports.solution = primeFactorize;
