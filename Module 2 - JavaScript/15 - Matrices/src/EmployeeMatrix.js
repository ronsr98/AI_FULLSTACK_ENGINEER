/* Write your code below */

const Matrix = require("./Matrix");

// EmployeeMatrix stores employee rows: [_id, name, department, salary]
class EmployeeMatrix extends Matrix {
  constructor() {
    super(); // starts empty; loadData fills it
  }

  // turn an array of objects into rows of their values
  loadData(salaryData) {
    this.matrix = salaryData.map((obj) => Object.values(obj));
  }

  // names of everyone in a department - O(n)
  getEmployees(department) {
    return this.matrix.filter((row) => row[2] === department).map((row) => row[1]);
  }

  // total salary for a department - O(n)
  getTotalSalary(department) {
    return this.matrix
      .filter((row) => row[2] === department)
      .reduce((sum, row) => sum + row[3], 0);
  }

  // name of the highest paid - one pass, O(n)
  findRichest() {
    let richest = this.matrix[0];
    for (const row of this.matrix) {
      if (row[3] > richest[3]) richest = row;
    }
    return richest[1];
  }
}

/* Do not remove the exports below */
module.exports = EmployeeMatrix
