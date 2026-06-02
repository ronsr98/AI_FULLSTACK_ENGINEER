// ===================================================================
// Module 2 - JavaScript | Arrays
// Goal: turn [1..10] into [0, 1, 4, 5, 1]
// ===================================================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. delete the second and third elements (the values 2 and 3)
numbers.splice(1, 2);          // -> [1, 4, 5, 6, 7, 8, 9, 10]

// 2. change the fourth element to 1 (index 3, which is currently 6)
numbers[3] = 1;                // -> [1, 4, 5, 1, 7, 8, 9, 10]

// 3. delete the last 4 elements
numbers.splice(-4, 4);         // -> [1, 4, 5, 1]

// 4. add another element 0 to the beginning of the array
numbers.unshift(0);            // -> [0, 1, 4, 5, 1]

// 5. print the modified array
console.log(numbers);          // [ 0, 1, 4, 5, 1 ]
