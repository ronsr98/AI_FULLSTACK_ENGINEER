/*
Return the coordinates ([row, col]) of the element that differs from the rest.

Examples
whereIsWaldo([
 ["A", "A", "A"],
 ["A", "A", "A"],
 ["A", "B", "A"]
]) ➞ [ 2, 1]

whereIsWaldo([
 ["c", "c", "c", "c"],
 ["c", "c", "c", "d"]
]) ➞ [1, 3]

whereIsWaldo([
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["P", "O", "O", "O"],
 ["O", "O", "O", "O"]
]) ➞ [4, 0]
Notes
Rows and columns are 0-indexed.
*/

// [row, col] of the one odd cell
function whereIsWaldo(grid) {
  const counts = {};
  for (const row of grid) for (const c of row) counts[c] = (counts[c] || 0) + 1;
  const waldo = Object.keys(counts).find((k) => counts[k] === 1);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === waldo) return [i, j];
    }
  }
}

exports.solution = whereIsWaldo;
