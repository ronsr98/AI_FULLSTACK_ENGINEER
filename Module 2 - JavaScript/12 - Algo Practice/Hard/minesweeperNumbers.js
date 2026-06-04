/*
Create a function that takes an array representation of a Minesweeper board, and returns another board where the value of each cell is the amount of its neighbouring mines.

Examples
The input may look like this:

[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]
The 0 represents an empty space. The 1 represents a mine.

You will have to replace each mine with a 9 and each empty space with the number of adjacent mines, the output will look like this:

[
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]
Notes
Since in the output the numbers 0-8 are used to determine the amount of adjacent mines, the number 9 will be used to identify the mines instead.
A wikipedia page explaining how Minesweeper works is available in the Resources tab
*/

// board with mine counts (9 = mine)
function minesweeperNumbers(board) {
  if (board.length === 0) return [];
  const rows = board.length, cols = board[0].length;
  const result = board.map((r) => r.slice());
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 1) { result[i][j] = 9; continue; }
      let count = 0; // mines around this cell
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          if (di === 0 && dj === 0) continue;
          const ni = i + di, nj = j + dj;
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && board[ni][nj] === 1) count++;
        }
      }
      result[i][j] = count;
    }
  }
  return result;
}

exports.solution = minesweeperNumbers;
