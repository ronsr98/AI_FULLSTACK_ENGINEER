// All exercises live as methods on this one class (per the instructions).
class Exercises {
  // Ex1 - true if n is even
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }

  // Ex2 - removes at least one element from arr
  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }

  // Ex3 - strips out ! # . , ' from the string
  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }

  // Ex4 (TDD) - validate an array of booleans
  validate(arr) {
    if (!Array.isArray(arr) || !arr.some((x) => typeof x === "boolean")) {
      return { error: "Need at least one boolean" };
    }
    const trues = arr.filter((x) => x === true).length;
    const falses = arr.filter((x) => x === false).length;
    return trues > falses;
  }

  // Extension - a method that uses push (we test that push was called)
  add(x, y) {
    let stuff = [];
    stuff.push(x, y);
  }
}

module.exports = Exercises;
