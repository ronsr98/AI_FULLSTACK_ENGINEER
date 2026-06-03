# Deep Dive — Mastering JavaScript

מדריך עומק שנועד לקחת אותך מ"יודע לכתוב JS" ל"מבין איך JS חושב".
ההסברים בעברית, הקוד והמונחים באנגלית (ככה תכיר את המונחים שתפגוש בכל מקום).

לצד הקובץ הזה יש `playground.js` — כל דוגמה מסומנת ב‑▶ אפשר להריץ ולראות בעיניים:
```bash
node "Deep Dive - JavaScript/playground.js"
```

> איך ללמוד מזה: אל תקרא רצוף. קרא סעיף, **נחש מה יודפס לפני שאתה מריץ**, ואז הרץ. הפער בין הניחוש לתוצאה הוא בדיוק המקום שבו אתה לומד.

## תוכן עניינים
1. [המודל המנטלי: ערכים, טיפוסים, ו‑value vs reference](#1)
2. [Scope, Hoisting ו‑TDZ — למה var זה מלכוד](#2)
3. [Closures — הרעיון שמפעיל חצי מ‑JS](#3)
4. [`this` — ארבעת הכללים, arrow, ו‑call/apply/bind](#4)
5. [Higher-Order Functions ושליטה ב‑reduce](#5)
6. [Type Coercion ושוויון — `==` מול `===`](#6)
7. [Prototypes — איך אובייקטים *באמת* עובדים](#7)
8. [Async: מ‑callbacks ל‑Promises ל‑async/await + ה‑Event Loop](#8)
9. [מלכודות נפוצות ומודלים מנטליים](#9)
10. [תרגילי אתגר (עם פתרונות)](#10)

---

<a name="1"></a>
## 1. המודל המנטלי: ערכים, טיפוסים, ו‑value vs reference

ב‑JavaScript יש **7 primitives**: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`. כל השאר (`{}`, `[]`, פונקציות) הוא **object**.

ההבדל הקריטי שרוב המתחילים מפספסים:

- **Primitives מועתקים by value** — כשאתה מעביר אותם, נוצר עותק.
- **Objects מועברים by reference** — מועברת *הפניה* לאותו אובייקט בזיכרון.

```js
let a = 10
let b = a      // b מקבל עותק של הערך
b = 20
console.log(a) // 10 — a לא הושפע

let arr1 = [1, 2, 3]
let arr2 = arr1   // arr2 מצביע לאותו מערך!
arr2.push(4)
console.log(arr1) // [1, 2, 3, 4] — שניהם אותו אובייקט
```

זו הסיבה ש‑`===` בין שני אובייקטים בודק **זהות** (אותו מקום בזיכרון), לא תוכן:
```js
console.log([1,2] === [1,2]) // false! שני מערכים שונים בזיכרון
let x = [1,2]
console.log(x === x)         // true
```

**מודל מנטלי:** דמיין שמשתנה של אובייקט הוא לא תיבה שמחזיקה את האובייקט, אלא **חוט שמחובר** לאובייקט. כמה חוטים יכולים להתחבר לאותו אובייקט.

### למה זה חשוב בפועל
זה המקור ל‑#1 הבאגים של מתחילים: "שיניתי משתנה אחד ופתאום השני השתנה". וזו הסיבה שב‑React וכו' מקפידים על **אי‑שינוי** (immutability) — יוצרים אובייקט חדש במקום לשנות קיים:
```js
// במקום לשנות:
user.age = 30
// יוצרים חדש (spread):
const updated = { ...user, age: 30 }
```

---

<a name="2"></a>
## 2. Scope, Hoisting ו‑TDZ — למה var זה מלכוד

**Scope** = איפה משתנה "נראה". ב‑JS יש:
- **Function scope** — `var` חי בכל הפונקציה.
- **Block scope** — `let`/`const` חיים רק בתוך ה‑`{}` שבו הוגדרו.

**Hoisting** = המנוע "מרים" הצהרות לראש ה‑scope לפני ההרצה. אבל לא כולם מורמים אותו דבר:

| מה | מורם? | זמין לפני השורה? |
|----|-------|------------------|
| `function declaration` | כן, כולל הגוף | כן — אפשר לקרוא לפונקציה לפני שהוגדרה |
| `var` | כן, אבל מאותחל ל‑`undefined` | "כן" אבל הערך `undefined` |
| `let` / `const` | כן, אבל **ב‑TDZ** | לא — זורק `ReferenceError` |

```js
console.log(sayHi())  // "hi" — function declarations מורמות במלואן
function sayHi() { return "hi" }

console.log(x)  // undefined (לא error!) — var מורם ומאותחל ל-undefined
var x = 5

console.log(y)  // ReferenceError: Cannot access 'y' before initialization
let y = 5
```

ה‑**TDZ (Temporal Dead Zone)** הוא הקטע בין תחילת ה‑scope לבין שורת ההגדרה של `let`/`const`. בקטע הזה המשתנה קיים אבל "אסור לגעת". זו תכונה טובה — היא תופסת באגים מוקדם.

### הכלל המעשי
> **השתמש ב‑`const` כברירת מחדל. עבור ל‑`let` רק כשאתה חייב לשנות ערך. אל תשתמש ב‑`var` אף פעם.**

`var` שובר block scope וגורם לבאגים (נראה דוגמה קלאסית בסעיף הבא).

---

<a name="3"></a>
## 3. Closures — הרעיון שמפעיל חצי מ‑JS

**Closure** = פונקציה "זוכרת" את ה‑scope שבו היא נוצרה, גם אחרי שה‑scope הזה הסתיים.

```js
function makeCounter() {
  let count = 0           // משתנה "פרטי"
  return function () {
    count++               // הפונקציה הפנימית זוכרת את count
    return count
  }
}

const counter = makeCounter()
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3
```

הפונקציה החיצונית `makeCounter` כבר סיימה לרוץ — ובכל זאת `count` שורד, כי הפונקציה הפנימית עדיין מחזיקה בו. זה closure.

**למה זה ענק:** closures מאפשרים:
- **משתנים פרטיים** (אין `private` ב‑JS קלאסי — closures זה הפתרון).
- **factory functions** שמייצרות פונקציות מותאמות.
- כל callback ש"זוכר" משתנים מסביבו (בלי זה async לא היה עובד).

### המלכוד הקלאסי: var בתוך לולאה
```js
// הבאג:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// מדפיס: 3, 3, 3   ← כולם חולקים את אותו i!

// התיקון: let יוצר i חדש לכל איטרציה
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// מדפיס: 0, 1, 2
```
זו ההדגמה הכי טובה למה block scope חשוב. עם `var` יש **i אחד** לכל הלולאה, וכל ה‑callbacks סוגרים עליו — וכשהם רצים (אחרי הלולאה) הוא כבר 3. עם `let` כל איטרציה מקבלת `i` משלה.

---

<a name="4"></a>
## 4. `this` — ארבעת הכללים, arrow, ו‑call/apply/bind

זה הנושא שהכי מבלבל, אבל יש לו **חוקים ברורים**. השאלה היחידה ש‑`this` שואל היא: **"איך הפונקציה נקראה?"** (לא איפה הוגדרה).

### ארבעת הכללים (לפי סדר עדיפות)
1. **`new`** — `this` הוא האובייקט החדש שנוצר.
2. **Explicit** — `call` / `apply` / `bind` קובעים `this` במפורש.
3. **Implicit** — אם נקראה כ‑`obj.method()`, אז `this === obj` (מי שלפני הנקודה).
4. **Default** — אחרת: `undefined` ב‑strict mode, או ה‑global object אחרת.

```js
const person = {
  name: "Ron",
  greet: function () { return "Hi, " + this.name }
}

console.log(person.greet())     // "Hi, Ron"  ← כלל 3: this = person

const greet = person.greet      // ניתקנו מהאובייקט!
console.log(greet())            // "Hi, undefined" ← כלל 4: this איבד את person
```

זו הנקודה החשובה: `this` נקבע **ברגע הקריאה**, לא בהגדרה. ברגע ש"ניתקת" מתודה מהאובייקט, היא מאבדת את ה‑`this`.

### call / apply / bind — שליטה ידנית ב‑this
```js
function introduce(greeting) { return greeting + ", I'm " + this.name }
const user = { name: "Maya" }

introduce.call(user, "Hello")    // "Hello, I'm Maya"  — call: ארגומנטים אחד-אחד
introduce.apply(user, ["Hey"])   // "Hey, I'm Maya"    — apply: ארגומנטים כמערך
const bound = introduce.bind(user)  // bind: מחזיר פונקציה חדשה עם this קבוע
bound("Yo")                      // "Yo, I'm Maya"
```
**זיכרון מהיר:** **c**all = **c**omma (פסיקים), **a**pply = **a**rray, **b**ind = **b**ound later (לא קוראת, מחזירה פונקציה).

### Arrow functions — אין להן this משלהן
חץ **לא** מקבל `this` לפי כללי הקריאה. במקום זה הוא **יורש את `this` מהמקום שבו נכתב** (lexical this). זה גם הסיבה שאסור להשתמש בחץ כמתודה של אובייקט:
```js
const obj = {
  name: "Dana",
  bad: () => "Hi " + this.name,        // חץ → this הוא לא obj! (יורש מבחוץ)
  good: function () { return "Hi " + this.name }  // רגיל → this = obj
}
console.log(obj.bad())  // "Hi undefined"
console.log(obj.good()) // "Hi Dana"
```
אבל חץ **מצוין** כ‑callback בתוך מתודה, כי הוא שומר על ה‑`this` של המתודה:
```js
const team = {
  name: "Avengers",
  members: ["Iron Man", "Thor"],
  list() {
    // חץ יורש את this של list → this.name עובד
    this.members.forEach(m => console.log(m + " is in " + this.name))
  }
}
team.list() // "Iron Man is in Avengers" ...
```

---

<a name="5"></a>
## 5. Higher-Order Functions ושליטה ב‑reduce

**Higher-Order Function** = פונקציה שמקבלת פונקציה או מחזירה פונקציה. זה כל מה ש‑`map`/`filter`/`reduce` הם.

### המפתח: לבחור את המתודה הנכונה
| רוצה... | השתמש ב... | מחזיר |
|---------|-----------|-------|
| לשנות כל איבר | `map` | מערך באותו אורך |
| לסנן איברים | `filter` | מערך קצר/שווה |
| למצוא איבר אחד | `find` | האיבר (או `undefined`) |
| לבדוק אם **כולם** מקיימים | `every` | boolean |
| לבדוק אם **לפחות אחד** | `some` | boolean |
| לעשות פעולה (side effect) | `forEach` | `undefined` |
| **לצמצם הכל לערך אחד** | `reduce` | מה שתרצה |

### reduce — האב של כולם
`reduce` יכול לחקות את כל השאר. הוא לוקח **accumulator** (התוצאה המצטברת) ו‑**current** (האיבר הנוכחי), ומחזיר את ה‑accumulator הבא:

```js
const nums = [1, 2, 3, 4]

// סכום
nums.reduce((acc, n) => acc + n, 0)              // 10

// map עם reduce
nums.reduce((acc, n) => [...acc, n * 2], [])     // [2, 4, 6, 8]

// קיבוץ (groupBy) — זה ה-superpower האמיתי של reduce
const people = [
  { name: "A", role: "dev" },
  { name: "B", role: "design" },
  { name: "C", role: "dev" },
]
people.reduce((groups, p) => {
  (groups[p.role] ||= []).push(p.name)  // אם אין מערך לתפקיד, צור אחד
  return groups
}, {})
// { dev: ["A", "C"], design: ["B"] }
```

> **טיפ:** הערך השני של `reduce` (אחרי הפסיק) הוא ה‑accumulator ההתחלתי. **תמיד ספק אותו.** השמטה שלו גורמת לבאגים על מערך ריק.

### Chaining ו‑immutability
מתודות מערך **לא משנות** את המקור — הן מחזירות מערך חדש. לכן אפשר לשרשר:
```js
const result = orders
  .filter(o => o.active)
  .map(o => o.total)
  .reduce((sum, t) => sum + t, 0)
```
זה קוד **declarative** — אתה אומר *מה* אתה רוצה, לא *איך* ללולאה. קריא וקל לבדיקה.

⚠️ יוצא דופן: `sort`, `reverse`, `splice` **כן משנים** את המקור! אם לא רוצים, העתק קודם: `[...arr].sort()`.

---

<a name="6"></a>
## 6. Type Coercion ושוויון — `==` מול `===`

JS ממיר טיפוסים אוטומטית (coercion). זה מקור הבדיחות על השפה — אבל יש בזה היגיון.

### תמיד `===` (strict), כמעט אף פעם לא `==`
- `===` בודק ערך **וגם** טיפוס, בלי המרות.
- `==` ממיר טיפוסים קודם — ואז קורים דברים מוזרים:
```js
0 == ""         // true  😱
0 == "0"        // true
"" == "0"       // false (!)
null == undefined  // true
[] == ![]       // true  (קלאסיקה של ראיונות)
```
**הכלל:** השתמש ב‑`===` תמיד. החריג היחיד הלגיטימי ל‑`==`: בדיקת `x == null` (תופסת גם `null` וגם `undefined` בבת אחת).

### Truthy / Falsey
ב‑context בוליאני (`if`, `&&`, `||`), כל ערך הופך ל‑true/false. יש בדיוק **8 falsey values**, וכל השאר truthy:
```
false, 0, -0, 0n, "", null, undefined, NaN
```
שים לב: `"0"`, `"false"`, `[]`, `{}` כולם **truthy**!

### אופרטורים שימושיים שנובעים מזה
```js
// || מחזיר את הראשון ה-truthy (ברירת מחדל)
const name = userInput || "Guest"

// ?? (nullish) — כמו || אבל רק ל-null/undefined (לא ל-0 או "")
const count = input ?? 0   // אם input הוא 0, נשאר 0 (|| היה הופך ל-0... אותו דבר כאן, אבל נסה input="")

// ?. (optional chaining) — גישה בטוחה לעומק
const city = user?.address?.city   // undefined במקום error אם משהו חסר
```
ההבדל בין `||` ל‑`??` קריטי: `0 || 5` → `5` (כי 0 falsey), אבל `0 ?? 5` → `0` (כי 0 הוא לא null). השתמש ב‑`??` כש‑0 או "" הם ערכים לגיטימיים.

---

<a name="7"></a>
## 7. Prototypes — איך אובייקטים *באמת* עובדים

ב‑JS אין מחלקות "אמיתיות" מתחת למכסה המנוע — יש **prototype chain**. כל אובייקט מצביע לאובייקט אחר (ה‑prototype שלו), וכשמחפשים property שלא קיים, JS מטפס בשרשרת.

```js
const arr = [1, 2, 3]
arr.push(4)  // מאיפה הגיע push? לא הגדרנו אותו!
// arr → Array.prototype (שם נמצא push, map, filter...) → Object.prototype → null
```

כשאתה כותב `arr.map(...)`, המנוע:
1. מחפש `map` על `arr` עצמו — לא נמצא.
2. עולה ל‑`Array.prototype` — נמצא! משתמש בו.

זה אומר שכל המערכים בעולם **חולקים** את אותה פונקציית `map` אחת. יעיל מאוד.

### class זה sugar מעל prototypes
```js
class Animal {
  constructor(name) { this.name = name }
  speak() { return this.name + " makes a sound" }
}
const dog = new Animal("Rex")
dog.speak()  // "Rex makes a sound"
```
מתחת למכסה, `speak` יושב על `Animal.prototype`, ו‑`dog` מצביע אליו. `class` רק נותן תחביר נעים יותר. הבנת ה‑prototype chain עוזרת להבין ירושה, `instanceof`, ולמה דברים עובדים כמו שהם.

---

<a name="8"></a>
## 8. Async: מ‑callbacks ל‑Promises ל‑async/await + ה‑Event Loop

זה הנושא שהקורס נגע בו (callbacks) — וכאן נכנסים לעומק.

### למה צריך async בכלל
JavaScript הוא **single-threaded** — חוט אחד, שורה אחת בכל רגע. אז איך הוא לא נתקע כשמחכים לרשת? התשובה: **ה‑Event Loop**.

### המודל המנטלי של ה‑Event Loop
יש שלושה חלקים:
1. **Call Stack** — הקוד שרץ עכשיו.
2. **Task Queue (macrotasks)** — callbacks של `setTimeout`, אירועי click וכו'.
3. **Microtask Queue** — callbacks של Promises (`.then`, `await`).

הכלל: המנוע מריץ את כל ה‑Call Stack עד הסוף, ואז **מרוקן את כל ה‑microtasks**, ורק אז לוקח task אחד מה‑macrotask queue. microtasks תמיד קודמים.

```js
console.log("1")
setTimeout(() => console.log("2"), 0)   // macrotask
Promise.resolve().then(() => console.log("3"))  // microtask
console.log("4")

// סדר ההדפסה: 1, 4, 3, 2
// 1,4 רצים מיד (sync). 3 (microtask) קודם ל-2 (macrotask), למרות ש-setTimeout הוא 0!
```
זו הסיבה ש‑`setTimeout(fn, 0)` לא רץ "מיד" — הוא נכנס לסוף התור.

### האבולוציה: callbacks → Promises → async/await

**1. Callbacks** (מה שלמדת) — עובד, אבל "callback hell" כשמקננים:
```js
getData(function (a) {
  getMore(a, function (b) {
    getEvenMore(b, function (c) { /* פירמידת הייסורים */ })
  })
})
```

**2. Promises** — אובייקט שמייצג ערך שיגיע בעתיד. שלושה מצבים: `pending` → `fulfilled` / `rejected`:
```js
fetch("/api/user")
  .then(res => res.json())
  .then(user => console.log(user))
  .catch(err => console.log("failed:", err))
```
שטוח במקום מקונן, ויש טיפול שגיאות מרוכז ב‑`.catch`.

**3. async/await** — sugar מעל Promises, נראה כמו קוד סינכרוני (הכי קריא):
```js
async function loadUser() {
  try {
    const res = await fetch("/api/user")  // "המתן" עד שה-Promise נפתר
    const user = await res.json()
    console.log(user)
  } catch (err) {
    console.log("failed:", err)
  }
}
```
`await` "עוצר" את הפונקציה עד שה‑Promise נפתר — בלי לחסום את שאר התוכנית. `async` תמיד מחזירה Promise.

> **מודל מנטלי:** Promise הוא קבלה. אתה מזמין (שולח בקשה), מקבל קבלה מיד (Promise ב‑pending), וממשיך בחיים. כשההזמנה מוכנה — ה‑callback ב‑`.then` רץ. `await` זה פשוט "אני מחכה ליד הדלפק עד שזה מוכן, אבל מרשה לאחרים לעבור".

---

<a name="9"></a>
## 9. מלכודות נפוצות ומודלים מנטליים

- **`NaN === NaN` הוא `false`.** השתמש ב‑`Number.isNaN(x)` כדי לבדוק.
- **`typeof null === "object"`** — באג היסטורי בשפה. לבדיקת null: `x === null`.
- **`0.1 + 0.2 !== 0.3`** (יוצא `0.30000000000000004`) — נקודה צפה. לכסף, עבוד באגורות (מספרים שלמים).
- **שינוי אובייקט שהועבר לפונקציה משנה את המקור** (by reference). אם לא רוצים — שכפל: `{...obj}` / `[...arr]`.
- **`forEach` לא ניתן לעצירה** (אין `break`). צריך לצאת מוקדם? השתמש ב‑`for...of` עם `break`, או `some`/`find`.
- **שכפול `{...obj}` הוא רדוד (shallow)** — אובייקטים מקוננים עדיין משותפים. לעומק: `structuredClone(obj)`.
- **`==` עם המרות** — שכח מזה, תמיד `===`.

### מודל מנטלי כולל
> JavaScript מריץ קוד סינכרוני שורה‑שורה. כשהוא נתקל במשהו אסינכרוני (timer, רשת), הוא מעביר אותו "הצידה" וממשיך. כשהחוט הראשי מתפנה, ה‑Event Loop מכניס בחזרה את ה‑callbacks שהבשילו — microtasks (Promises) קודם, אחר כך macrotasks (timers).

---

<a name="10"></a>
## 10. תרגילי אתגר (עם פתרונות)

נסה לפתור לבד לפני שאתה מציץ. הפתרונות נמצאים בסוף `playground.js` (מסומנים `▶ Challenge`).

**אתגר 1 — closure:** כתוב `makeAdder(x)` שמחזיר פונקציה שמוסיפה `x` למה שתעביר לה. `makeAdder(5)(3)` → `8`.

**אתגר 2 — this:** למה הקוד הבא מדפיס `undefined`, ואיך תתקן אותו בשתי דרכים שונות?
```js
const obj = { val: 42, get() { return this.val } }
const fn = obj.get
console.log(fn())
```

**אתגר 3 — reduce:** בהינתן `["a", "b", "a", "c", "b", "a"]`, החזר `{ a: 3, b: 2, c: 1 }` (ספירת תווים) — בשורה אחת עם reduce.

**אתגר 4 — async:** מה סדר ההדפסה?
```js
console.log("A")
setTimeout(() => console.log("B"), 0)
Promise.resolve().then(() => console.log("C"))
console.log("D")
```

**אתגר 5 — value vs reference:** מה ידפיס ולמה?
```js
function update(obj, num) {
  obj.x = 99
  num = 99
}
let o = { x: 1 }, n = 1
update(o, n)
console.log(o.x, n)
```

---

### מה הלאה — מסע השליטה
1. **תרגל** את התרגילים למעלה עד שהם טריוויאליים.
2. **בנה משהו אסינכרוני** — קרא ל‑API אמיתי עם `fetch` + `async/await`.
3. **קרא קוד של אחרים** וזהה: איפה closures? איפה `this` משתנה? איפה immutability?
4. **למד את הכלים:** ה‑debugger בדפדפן, `console.table`, breakpoints.
5. נושאים מתקדמים להמשך: Generators, `Map`/`Set`, modules (`import`/`export`), Error handling מתקדם, ו‑TypeScript (הצעד הטבעי הבא).

נבנה כהעמקה עצמית מעבר לחומר הקורס **Fullstack AI Engineer**.
