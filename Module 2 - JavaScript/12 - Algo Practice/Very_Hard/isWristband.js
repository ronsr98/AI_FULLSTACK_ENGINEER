/*
A wristband can have 4 patterns:

horizontal: each item in a row is identical.
vertical: each item in a column is identical.
diagonal left: each item is identical to the one on it's upper left or bottom right.
diagonal right: each item is identical to the one on it's upper right or bottom left.
You are shown an incomplete section of a wristband.

Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

Examples
isWristband([
 ["A", "A"],
 ["B", "B"],
 ["C", "C"]
]) ➞ true 
// Part of horizontal wristband.

isWristband([
 ["A", "B"],
 ["A", "B"],
 ["A", "B"]
]) ➞ true 
// Part of vertical wristband.

isWristband([
 ["A", "B", "C"],
 ["C", "A", "B"],
 ["B", "C", "A"],
 ["A", "B", "C"]
]) ➞ true
// Part of diagonal left wristband.

isWristband([
 ["A", "B", "C"],
 ["B", "C", "A"],
 ["C", "A", "B"],
 ["A", "B", "A"]
]) ➞ true
// Part of diagonal right wristband.
*/

// true if the grid matches one of the 4 patterns
function isWristband(grid) {
  const rows = grid.length, cols = grid[0].length;
  const horizontal = grid.every((row) => row.every((c) => c === row[0]));
  let vertical = true;
  for (let j = 0; j < cols; j++)
    for (let i = 1; i < rows; i++)
      if (grid[i][j] !== grid[0][j]) vertical = false;
  let diagLeft = true; // matches the upper-left neighbour
  for (let i = 1; i < rows; i++)
    for (let j = 1; j < cols; j++)
      if (grid[i][j] !== grid[i - 1][j - 1]) diagLeft = false;
  let diagRight = true; // matches the upper-right neighbour
  for (let i = 1; i < rows; i++)
    for (let j = 0; j < cols - 1; j++)
      if (grid[i][j] !== grid[i - 1][j + 1]) diagRight = false;
  return horizontal || vertical || diagLeft || diagRight;
}

exports.solution = isWristband;
