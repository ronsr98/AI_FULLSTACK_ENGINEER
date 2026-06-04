/*
Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:

Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.
Examples
sudokuValidator([
 [1, 5, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ true

sudokuValidator([
 [1, 1, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ false
*/

// true if every row, column and 3x3 box holds 1-9
function sudokuValidator(board) {
  const valid = (group) => {
    const s = new Set(group);
    return s.size === 9 && [...s].every((n) => n >= 1 && n <= 9);
  };
  for (let i = 0; i < 9; i++) {
    if (!valid(board[i])) return false; // row
    if (!valid(board.map((r) => r[i]))) return false; // column
  }
  for (let bi = 0; bi < 9; bi += 3) {
    for (let bj = 0; bj < 9; bj += 3) {
      const box = [];
      for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) box.push(board[bi + i][bj + j]);
      if (!valid(box)) return false;
    }
  }
  return true;
}

exports.solution = sudokuValidator;
