/* Write your code below */

const Matrix = require("./Matrix");

// A 3x3 tic-tac-toe board built on top of Matrix.
class TicTacToe extends Matrix {
  constructor() {
    super();
  }

  // 3x3 board full of dots
  loadBoard() {
    this.matrix = [];
    for (let r = 0; r < 3; r++) this.matrix.push([".", ".", "."]);
  }

  // place a mark, then check for a winning column
  play(rowNum, columnNum, player) {
    const mark = player === 1 ? "x" : "o";
    this.alter(rowNum, columnNum, mark);
    for (let c = 0; c < 3; c++) {
      if (
        this.matrix[0][c] !== "." &&
        this.matrix[0][c] === this.matrix[1][c] &&
        this.matrix[1][c] === this.matrix[2][c]
      ) {
        console.log("Congratulations Player " + player);
      }
    }
  }
}

/* Do not remove the exports below */
module.exports = TicTacToe
