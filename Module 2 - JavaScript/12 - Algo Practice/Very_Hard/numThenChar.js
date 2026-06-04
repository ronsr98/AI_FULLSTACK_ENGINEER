/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
 [1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]
]) ➞ [
 [1, 2, 3, 4, 5, 6],
 [7, 8, "a"],
 ["b", "c"], ["d", "e", "f"]
]

numThenChar([
 [1, 2, 4.4, "f", "a", "b"],
 [0], [0.5, "d","X",3,"s"],
 ["f", "e", 8],
 ["p","Y","Z"],
 [12,18]
]) ➞ [
 [0, 0.5, 1, 2, 3, 4.4],
 [8],
 [12, 18, "X", "Y", "Z"],
 ["a", "b", "d"],
 ["e", "f", "f"],
 ["p", "s"]
]
Notes
Test cases will containg integer and float numbers and single letters.
*/

// sorted numbers then letters, original shape kept
function numThenChar(arrs) {
  const flat = arrs.flat();
  const nums = flat.filter((x) => typeof x === "number").sort((a, b) => a - b);
  const chars = flat.filter((x) => typeof x === "string").sort();
  const combined = [...nums, ...chars];
  const result = [];
  let idx = 0;
  for (const row of arrs) {
    result.push(combined.slice(idx, idx + row.length)); // refill same-size row
    idx += row.length;
  }
  return result;
}

exports.solution = numThenChar;
