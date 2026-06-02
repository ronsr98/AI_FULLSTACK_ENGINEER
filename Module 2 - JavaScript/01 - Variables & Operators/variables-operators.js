// ===================================================================
// Module 2 - JavaScript | Variables, Identifiers and Operators
// ===================================================================

// -------------------------------------------------------------------
// Exercise 1: Truthy or Falsey?
// For each expression we print whether its value is truthy or falsey.
// Boolean(x) converts any value to true/false based on its truthiness.
// -------------------------------------------------------------------
console.log("--- Exercise 1: Truthy / Falsey ---");

const expressions = [
  { code: '(5 > 2) && false',               value: (5 > 2) && false },
  { code: '!("knife" === "sword")',         value: !("knife" === "sword") },
  { code: '(1 < 2) || (-1 > -1) || !false', value: (1 < 2) || (-1 > -1) || !false },
  { code: '""',                             value: "" },
  { code: '(31 % 5) == "1"',                value: (31 % 5) == "1" },
  { code: '!!true',                         value: !!true },
  { code: '"5th Avenue" != "5th Avenue"',   value: "5th Avenue" != "5th Avenue" },
  { code: '52 !== "52"',                    value: 52 !== "52" },
  { code: '(undefined || null)',            value: (undefined || null) },
];

for (const expr of expressions) {
  const result = Boolean(expr.value) ? "TRUTHY" : "FALSEY";
  console.log(`${expr.code}  =>  ${result}`);
}

/*
Why each result:
(5 > 2) && false             -> FALSEY  true && false === false
!("knife" === "sword")       -> TRUTHY  false negated === true
(1 < 2) || ... || ...        -> TRUTHY  first part already true (short-circuit)
""                           -> FALSEY  empty string is one of the falsey values
(31 % 5) == "1"              -> TRUTHY  31 % 5 === 1, then 1 == "1" (loose) coerces "1" to 1
!!true                       -> TRUTHY  double negation returns the boolean itself
"5th Avenue" != "5th Avenue" -> FALSEY  identical strings, so "not equal" is false
52 !== "52"                  -> TRUTHY  strict: number vs string => different types
(undefined || null)          -> FALSEY  undefined is falsey => returns null, which is falsey
*/

// -------------------------------------------------------------------
// Exercise 2: What are the values of a, b and c at the end?
// -------------------------------------------------------------------
console.log("\n--- Exercise 2: Variable trace ---");

let a = 3;   // a = 3
let c = 0;   // c = 0
let b = a;   // b = 3   (copies the VALUE of a)
b = a;       // b = 3   (no change)
c = a;       // c = 3   (c stops being 0)
b = c;       // b = 3
a = b;       // a = 3

console.log("a =", a); // 3
console.log("b =", b); // 3
console.log("c =", c); // 3

// All three end up as 3. Numbers are primitives, so every assignment
// copies the value — the variables are not linked to each other.
