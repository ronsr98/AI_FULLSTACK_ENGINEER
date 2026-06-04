/*
Create the function that takes an array with objects and returns the sum of people's budgets.

Examples
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]) ➞ 62600
*/

// sum of everyone's budget
function getBudgets(people) {
  return people.reduce((sum, p) => sum + p.budget, 0);
}

exports.solution = getBudgets;
