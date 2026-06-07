// Big O - Time Complexity - practice.
// Exercises 1-5 and 9 are analysis (answers in comments). 6-8 are code.

/*
Exercise 1: O(n)        - one loop over the operations.
Exercise 2: O(log n)    - i doubles each step (i = i * 2), so it grows logarithmically.
Exercise 3: O(n)        - filter is O(n), then a loop over the results is O(n); getHype is O(1).
Exercise 4: O(n * m)    - n students, and for each one we loop its m answers.
Exercise 5: O(n)        - sendEmails loops the n recipients (the async call doesn't change it).
Exercise 9: O(1) is the flat line, O(log n) the curve that flattens out,
            O(n) the straight diagonal, O(n^2) the steep upward curve.
*/

// Exercise 6: print if there's a duplicate, in O(n)
const findDuplicates = function (arr) {
  const seen = {}; // numbers we've already passed
  for (const n of arr) {
    if (seen[n]) {
      console.log("there is a duplicate");
      return;
    }
    seen[n] = true;
  }
};
findDuplicates([1, 2, 3, 2]); // there is a duplicate
findDuplicates([1, 2, 3]); // (nothing)

// Exercise 7: store employees by id so lookup is O(1)
const employees = {
  ax01: { name: "Ray", age: 28, salary: 1300 },
  qs84: { name: "Lucius", age: 31, salary: 840 },
  bg33: { name: "Taylor", age: 18, salary: 2700 },
};
const findEmployeeSalary = function (employeeID) {
  return employees[employeeID].salary; // O(1)
};
console.log(findEmployeeSalary("bg33")); // 2700

// Exercise 8: binary search on a sorted array, O(log n)
const findIndex = function (numbers, num) {
  let lo = 0;
  let hi = numbers.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (numbers[mid] === num) return mid;
    if (numbers[mid] < num) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
};
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987];
console.log(findIndex(numbers, 2630)); // 86
