# Module 2 - JavaScript

תרגילי ה‑JavaScript מהקורס, מאורגנים בתיקייה לכל נושא.
כל קובץ הוא סקריפט שרץ עם Node ומדפיס את הפלט ל‑console.

## תיקיות

| תיקייה                          | נושא                              | תוכן |
| ------------------------------- | --------------------------------- | ---- |
| `01 - Variables & Operators`    | משתנים, מזהים ואופרטורים           | Truthy/Falsey, מעקב אחרי ערכי משתנים |
| `02 - Conditionals`             | משפטי תנאי                         | בדיקת גיל, ציונים, מזג אוויר, ולידציה, הנחות, שנה מעוברת |
| `03 - Arrays`                   | מערכים                            | מניפולציה על מערך עד לתוצאה `[0, 1, 4, 5, 1]` |
| `04 - Objects`                  | אובייקטים                         | לוגיקת דייטים, ספרייה, מערכת הזמנות (כולל case‑insensitive), המטבח של ג'רלדין |
| `05 - Loops`                    | לולאות                            | בניית מערך אובייקטים, הדפסה, מחיקת פוסט/תגובה לפי `id`, מילון עם לולאה כפולה |
| `06 - Functions`                | פונקציות                          | isEven, checkExists, calculator, turnToKing, Armstrong, getSummary, ספירת מילים, spot check |
| `07 - Callbacks & Arrow Functions` | Callbacks ופונקציות חץ         | pushPull, getTime, callback חסר, sum, capitalize, commentOnWeather |
| `08 - Array Methods`            | מתודות מערך (ES6)                 | map / filter / find / every / forEach / reduce על נתוני משתמשים + inventory, ציונים, עגלת קניות |
| `09 - JS this`                  | המילה השמורה `this`              | תיקון שגיאות `this`, stealCoins, makeDrink ללא תנאים מקוננים + Extensions של בית קפה |

## איך מריצים

מתוך התיקייה של מודול 2:

```bash
node "01 - Variables & Operators/variables-operators.js"
node "02 - Conditionals/conditionals.js"
node "03 - Arrays/arrays.js"
node "04 - Objects/objects.js"
node "05 - Loops/loops.js"
node "06 - Functions/functions-exercises.js"
node "07 - Callbacks & Arrow Functions/callbacks-arrow.js"
node "08 - Array Methods/array-methods.js"
node "09 - JS this/js-this.js"
```

> הערה: ב‑`08 - Array Methods` שני תרגילים (9 ו‑10) מחזירים תוצאה שונה מ"הפלט הצפוי" שמופיע בחומר הקורס — הקוד נכון מתמטית, והפער מצוין בהערות בתוך הקובץ.

## העמקה

`Deep Dive - JavaScript/` — מדריך עומק עצמאי שלוקח מעבר לחומר הקורס: value vs reference, hoisting/TDZ, closures, `this` לעומק, reduce, coercion, prototypes, ו‑async + event loop. כולל `playground.js` שאפשר להריץ:
```bash
node "Deep Dive - JavaScript/playground.js"
```

נבנה כחלק מקורס **Fullstack AI Engineer**.
