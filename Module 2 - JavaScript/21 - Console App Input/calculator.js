// Exercise 1: a calculator that reads its input from the command line.
// Run: node calculator.js 10 + 5

// process.argv is [node, file, ...args]; skip the first two
const [, , a, op, b] = process.argv;
const n1 = Number(a);
const n2 = Number(b);

let result;
switch (op) {
  case "+": result = n1 + n2; break;
  case "-": result = n1 - n2; break;
  case "*": result = n1 * n2; break;
  case "/": result = n2 === 0 ? "Can't divide by 0!" : n1 / n2; break;
  default:
    console.log("Invalid operation: " + op);
    process.exit(1);
}

console.log(n1 + " " + op + " " + n2 + " = " + result);
