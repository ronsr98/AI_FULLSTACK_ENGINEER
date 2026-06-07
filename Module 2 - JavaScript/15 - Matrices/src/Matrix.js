/* Write your code below */

// A matrix is just nested arrays. Built with sequential numbers 1..rows*cols.
class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.generateMatrix();
  }

  // fill this.matrix row by row
  generateMatrix() {
    this.matrix = [];
    let n = 1;
    for (let r = 0; r < this.rows; r++) {
      const row = [];
      for (let c = 0; c < this.cols; c++) row.push(n++);
      this.matrix.push(row);
    }
  }

  print() {
    for (const row of this.matrix) console.log(row.join("\t"));
  }

  get(row, col) {
    return this.matrix[row][col];
  }

  alter(row, col, value) {
    this.matrix[row][col] = value;
  }

  printColumn(col) {
    for (let r = 0; r < this.matrix.length; r++) console.log(this.matrix[r][col]);
  }

  printRow(row) {
    for (const value of this.matrix[row]) console.log(value);
  }

  // {x: col, y: row} of the first cell holding value
  findCoordinate(value) {
    for (let y = 0; y < this.matrix.length; y++) {
      for (let x = 0; x < this.matrix[y].length; x++) {
        if (this.matrix[y][x] === value) return { x, y };
      }
    }
  }
}

/* Do not remove the exports below */
module.exports = Matrix
