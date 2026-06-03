// Deep Dive — JavaScript Playground
// Run me:  node "Deep Dive - JavaScript/playground.js"
// Tip: before each section, guess the output, THEN read it. The gap is where you learn.

const line = (title) => console.log("\n========== " + title + " ==========")

// ========== 1. value vs reference ==========
line("1. value vs reference")
let a = 10
let b = a
b = 20
console.log("primitives copy by value:", a, b) // 10 20

let arr1 = [1, 2, 3]
let arr2 = arr1          // same array in memory
arr2.push(4)
console.log("objects share by reference:", arr1) // [1, 2, 3, 4]

console.log("[1,2] === [1,2] ?", [1, 2] === [1, 2]) // false — different objects
const safeCopy = { ...{ x: 1 }, x: 2 }
console.log("immutable update with spread:", safeCopy) // { x: 2 }


// ========== 2. hoisting & TDZ ==========
line("2. hoisting & TDZ")
console.log("function declaration before definition:", sayHi()) // "hi"
function sayHi() { return "hi" }

console.log("var is hoisted as undefined:", typeof hoistedVar) // "undefined"
var hoistedVar = 5

try {
  // accessing a let before its line throws (Temporal Dead Zone)
  console.log(tdzVar)
  let tdzVar = 1
} catch (err) {
  console.log("let in TDZ throws:", err.constructor.name) // ReferenceError
}


// ========== 3. closures ==========
line("3. closures")
function makeCounter() {
  let count = 0
  return () => ++count
}
const counter = makeCounter()
console.log("counter remembers state:", counter(), counter(), counter()) // 1 2 3

// the classic var-in-loop bug vs the let fix
const withVar = []
for (var i = 0; i < 3; i++) withVar.push(() => i)
console.log("var loop (all share one i):", withVar.map(f => f())) // [3, 3, 3]

const withLet = []
for (let j = 0; j < 3; j++) withLet.push(() => j)
console.log("let loop (one j per round):", withLet.map(f => f())) // [0, 1, 2]


// ========== 4. this ==========
line("4. this")
const person = {
  name: "Ron",
  greet: function () { return "Hi, " + this.name }
}
console.log("implicit (obj.method):", person.greet()) // Hi, Ron

const detached = person.greet
console.log("detached loses this:", detached()) // Hi, undefined

// explicit binding
function introduce(greeting) { return greeting + ", I'm " + this.name }
const maya = { name: "Maya" }
console.log("call:", introduce.call(maya, "Hello"))       // Hello, I'm Maya
console.log("apply:", introduce.apply(maya, ["Hey"]))     // Hey, I'm Maya
const bound = introduce.bind(maya)
console.log("bind:", bound("Yo"))                         // Yo, I'm Maya

// arrow inherits this from where it was written
const team = {
  name: "Avengers",
  members: ["Iron Man", "Thor"],
  list() { return this.members.map(m => m + " is in " + this.name) }
}
console.log("arrow keeps method's this:", team.list())


// ========== 5. higher-order functions & reduce ==========
line("5. higher-order functions & reduce")
const nums = [1, 2, 3, 4]
console.log("sum:", nums.reduce((acc, n) => acc + n, 0))            // 10
console.log("map via reduce:", nums.reduce((acc, n) => [...acc, n * 2], [])) // [2,4,6,8]

const people = [
  { name: "A", role: "dev" },
  { name: "B", role: "design" },
  { name: "C", role: "dev" },
]
const grouped = people.reduce((groups, p) => {
  (groups[p.role] ||= []).push(p.name)
  return groups
}, {})
console.log("groupBy with reduce:", grouped) // { dev: ['A','C'], design: ['B'] }

// chaining (each step returns a new array — the source is untouched)
const orders = [{ active: true, total: 50 }, { active: false, total: 99 }, { active: true, total: 20 }]
const revenue = orders.filter(o => o.active).map(o => o.total).reduce((s, t) => s + t, 0)
console.log("chained pipeline:", revenue) // 70


// ========== 6. coercion & equality ==========
line("6. coercion & equality")
console.log("0 == '' ?", 0 == "")        // true  (loose, coerces)
console.log("0 === '' ?", 0 === "")      // false (strict, no coercion)
console.log("falsey values:", [false, 0, "", null, undefined, NaN].map(Boolean)) // all false
console.log("'0' and [] are truthy:", Boolean("0"), Boolean([]))                  // true true
console.log("|| default:", ("" || "Guest"))   // Guest   (empty string is falsey)
console.log("?? keeps 0:", (0 ?? 5), "vs || drops it:", (0 || 5)) // 0 vs 5
const user = { address: { city: "Tel Aviv" } }
console.log("optional chaining:", user?.address?.city, user?.job?.title) // Tel Aviv undefined


// ========== 7. prototypes ==========
line("7. prototypes")
const list = [1, 2, 3]
console.log("push lives on Array.prototype:", Object.getPrototypeOf(list) === Array.prototype) // true

class Animal {
  constructor(name) { this.name = name }
  speak() { return this.name + " makes a sound" }
}
const dog = new Animal("Rex")
console.log("class instance:", dog.speak())                                  // Rex makes a sound
console.log("method lives on prototype:", dog.speak === Animal.prototype.speak) // true


// ========== 8. async & the event loop ==========
line("8. async & the event loop")
console.log("sync 1")
setTimeout(() => console.log("  [macrotask] setTimeout 0"), 0)
Promise.resolve().then(() => console.log("  [microtask] promise.then"))
console.log("sync 2")
// expected order: sync 1, sync 2, microtask, macrotask

// a tiny async/await demo with a fake "network" delay
const fakeFetch = (value, ms) =>
  new Promise(resolve => setTimeout(() => resolve(value), ms))

async function loadData() {
  console.log("  awaiting data...")
  const data = await fakeFetch("📦 data arrived", 50)
  console.log("  " + data)
}

// run the async demo, and only afterwards print the challenge solutions
loadData().then(runChallenges)


// ========== 10. challenge solutions ==========
function runChallenges() {
  line("10. challenge solutions")

  // ▶ Challenge 1 — closure
  const makeAdder = x => y => x + y
  console.log("C1 makeAdder(5)(3):", makeAdder(5)(3)) // 8

  // ▶ Challenge 2 — this (two fixes for the detached method)
  const obj = { val: 42, get() { return this.val } }
  const fnBound = obj.get.bind(obj)          // fix 1: bind
  console.log("C2 fix bind:", fnBound())     // 42
  console.log("C2 fix call:", obj.get.call(obj)) // fix 2: call → 42

  // ▶ Challenge 3 — reduce char count
  const chars = ["a", "b", "a", "c", "b", "a"]
  const counts = chars.reduce((acc, ch) => ((acc[ch] = (acc[ch] || 0) + 1), acc), {})
  console.log("C3 char counts:", counts) // { a: 3, b: 2, c: 1 }

  // ▶ Challenge 4 — async order is: A, D, C, B
  console.log("C4 order is: A, D, C, B (sync first, then microtask C, then macrotask B)")

  // ▶ Challenge 5 — value vs reference
  function update(o, num) { o.x = 99; num = 99 }
  let o = { x: 1 }, n = 1
  update(o, n)
  console.log("C5 result:", o.x, n) // 99 1 — object by reference, number by value
}
