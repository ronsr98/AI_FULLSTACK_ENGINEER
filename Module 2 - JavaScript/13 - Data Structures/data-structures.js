// Data Structures - practice.
// UniqueArray: like an array but only keeps unique items. exists() is O(1).
// This version handles any type (Exercise 2); it also covers Exercise 1 (primitives).

class UniqueArray {
  constructor() {
    this.items = []; // keeps order
    this.seen = new Set(); // keys for O(1) lookup
  }

  // objects need a string key, since {x:3} !== {x:3}
  key(item) {
    return item !== null && typeof item === "object" ? JSON.stringify(item) : item;
  }

  // add only if not already in
  add(item) {
    const k = this.key(item);
    if (!this.seen.has(k)) {
      this.seen.add(k);
      this.items.push(item);
    }
  }

  showAll() {
    console.log(this.items);
  }

  // O(1)
  exists(item) {
    return this.seen.has(this.key(item));
  }

  // item at index, or -1
  get(index) {
    return index >= 0 && index < this.items.length ? this.items[index] : -1;
  }
}

// --- checks ---
const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); // ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); // ["toy"]
console.log(uniqueStuff.exists("toy")); // true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); // "hydrogen"

// works with objects too (Exercise 2)
const objs = new UniqueArray();
objs.add({ x: 3 });
objs.add({ x: 3 });
objs.showAll(); // [ { x: 3 } ] - the duplicate object is ignored
console.log(objs.exists({ x: 3 })); // true
