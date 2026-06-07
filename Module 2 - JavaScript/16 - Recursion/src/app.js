/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

// Exercise 1: factorial, recursively
const findFactorial = function (n) {
  if (n <= 1) return 1; // base case
  return n * findFactorial(n - 1);
}

// Exercise 2: reverse a string, recursively
const reverseString = function (str) {
  if (str === "") return ""; // base case
  return reverseString(str.slice(1)) + str[0];
}

// Exercise 3: move every item from a into b, recursively
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function (a, b) {
  if (a.length === 0) return; // base case
  b.push(a.shift()); // take the first item out of a and into b
  swap(a, b);
}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }
