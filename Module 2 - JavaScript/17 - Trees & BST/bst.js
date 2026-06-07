// Trees & Binary Search Trees - practice.
// BSNode: each node holds a value and up to two children (left < value <= right).

class BSNode {
  constructor(value = null) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  // add a value into the right spot
  insertNode(value) {
    if (this.value === null) {
      this.value = value;
      return;
    }
    if (value < this.value) {
      if (this.leftChild) this.leftChild.insertNode(value);
      else this.leftChild = new BSNode(value);
    } else {
      if (this.rightChild) this.rightChild.insertNode(value);
      else this.rightChild = new BSNode(value);
    }
  }

  // Exercise 1: true/false if value is in the tree (recursive, case sensitive)
  findNode(value) {
    if (value === this.value) return true;
    if (value < this.value) return this.leftChild ? this.leftChild.findNode(value) : false;
    return this.rightChild ? this.rightChild.findNode(value) : false;
  }

  // path of values from the root down to value (value included)
  getPath(value) {
    const path = [];
    let node = this;
    while (node) {
      path.push(node.value);
      if (value === node.value) break;
      node = value < node.value ? node.leftChild : node.rightChild;
    }
    return path;
  }

  // Exercise 2: closest ancestor shared by both values
  findCommonParent(v1, v2) {
    const p1 = this.getPath(v1);
    const p2 = this.getPath(v2);
    let common = null;
    for (let i = 0; i < Math.min(p1.length, p2.length); i++) {
      if (p1[i] !== p2[i]) break;
      if (p1[i] !== v1 && p1[i] !== v2) common = p1[i]; // a node isn't its own parent
    }
    return common;
  }

  // Exercise 3: remove a value and return the (possibly new) subtree root.
  // call it from the root: tree.removeNode(tree, value)
  removeNode(node, value) {
    if (!node) return null;
    if (value < node.value) {
      node.leftChild = this.removeNode(node.leftChild, value);
    } else if (value > node.value) {
      node.rightChild = this.removeNode(node.rightChild, value);
    } else {
      // found it
      if (!node.leftChild && !node.rightChild) return null; // no children
      if (!node.leftChild) return node.rightChild; // one child
      if (!node.rightChild) return node.leftChild; // one child
      // two children: take the max value on the left, then delete it from the left
      let maxLeft = node.leftChild;
      while (maxLeft.rightChild) maxLeft = maxLeft.rightChild;
      node.value = maxLeft.value;
      node.leftChild = this.removeNode(node.leftChild, maxLeft.value);
    }
    return node;
  }
}

// --- Exercise 1 checks ---
const letters = ["H", "E", "S", "G", "L", "Y", "I"];
const bsTree = new BSNode();
letters.forEach((l) => bsTree.insertNode(l));
console.log(bsTree.findNode("H")); // true
console.log(bsTree.findNode("G")); // true
console.log(bsTree.findNode("Z")); // false
console.log(bsTree.findNode("F")); // false
console.log(bsTree.findNode("y")); // false (case sensitive)

// --- Exercise 2 checks ---
const tree2 = new BSNode();
["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"].forEach((l) => tree2.insertNode(l));
console.log(tree2.findCommonParent("B", "I")); // H
console.log(tree2.findCommonParent("B", "G")); // E
console.log(tree2.findCommonParent("B", "L")); // J
console.log(tree2.findCommonParent("L", "Y")); // R
console.log(tree2.findCommonParent("E", "H")); // J

// --- Exercise 3 checks ---
const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let oneChild = new BSNode();
numbers.forEach((n) => oneChild.insertNode(n));
oneChild.removeNode(oneChild, 9); // 9 had one child (12) -> 12 takes its place
console.log("removed 9, found?", oneChild.findNode(9)); // false

let twoChildren = new BSNode();
numbers.forEach((n) => twoChildren.insertNode(n));
twoChildren.removeNode(twoChildren, 8); // root with two children -> new root value 5
console.log("new root after removing 8:", twoChildren.value); // 5
console.log("removed 8, found?", twoChildren.findNode(8)); // false
