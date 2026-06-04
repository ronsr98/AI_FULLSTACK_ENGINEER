/*
Write a function that accepts an integer N and returns an N * N spiral matrix.

Examples
matrix(2) ➞ [
  [1, 2],
  [4, 3]
]

matrix(3) ➞ [
  [1, 2, 3],
  [8  ,9, 4],
  [7, 6, 5]
]

matrix(4) ➞ [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
]
*/

// n x n matrix filled in a clockwise spiral
function matrix(n) {
  const res = Array.from({ length: n }, () => Array(n).fill(0));
  let top = 0, bottom = n - 1, left = 0, right = n - 1, num = 1;
  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) res[top][c] = num++;
    top++;
    for (let r = top; r <= bottom; r++) res[r][right] = num++;
    right--;
    for (let c = right; c >= left; c--) res[bottom][c] = num++;
    bottom--;
    for (let r = bottom; r >= top; r--) res[r][left] = num++;
    left++;
  }
  return res;
}

exports.solution = matrix;
