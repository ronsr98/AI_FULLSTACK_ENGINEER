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
| `11 - Closures & Modules`       | Closures ו‑Modules               | StringFormatter, Bank (משתנה פרטי), SongsManager (module pattern) |
| `12 - Algo Practice`            | תרגול אלגוריתמי                  | 52 בעיות (Easy/Medium/Hard/Very_Hard) עם בדיקות Jest — כולן עוברות |
| `13 - Data Structures`          | מבני נתונים                      | `UniqueArray` (exists ב‑O(1), תומך גם באובייקטים) |
| `14 - Big O`                    | סיבוכיות זמן                     | ניתוח סיבוכיות + findDuplicates O(n), lookup O(1), binary search O(log n) |
| `15 - Matrices`                 | מטריצות                          | `Matrix`, `EmployeeMatrix`, `TicTacToe` (repo עם המחלקות ב‑`src/`) |
| `16 - Recursion`                | רקורסיה                          | findFactorial, reverseString, swap (repo עם הקוד ב‑`src/app.js`) |
| `17 - Trees & BST`              | עצים ועצי חיפוש בינ׳             | `BSNode` — insertNode, findNode, findCommonParent, removeNode |
| `18 - Error Handling`           | טיפול בשגיאות                    | `safeJsonParse` (try/catch), `readFileWithErrorHandling` (שגיאות fs לפי קוד) |
| `19 - Git Branches`             | ענפים ב‑git                      | תרגול 14 הצעדים — `commands.md` עם כל הפקודות |
| `20 - Git Collaboration`        | עבודה משותפת ב‑git               | החלק שלי (Partner B): שרת Express עם `/message` + README וקישור לריפו המשותף |
| `21 - Console App Input`        | קלט באפליקציית קונסול           | calculator (`process.argv`), quiz (`prompt-sync`), registration (`readline`), banking (תפריט) |
| `22 - Pair Exercise - Contact Manager` | תרגיל זוגי — מנהל אנשי קשר | CLI עם error handling, מבנה מודולרי (utils/services/commands), custom errors |

> נושאי ה‑Scope, ה‑Quizzes, ו‑GitHub Projects תורגלו בנפרד (ניתוח עצמי / טופס / פעולה ב‑GitHub) ואינם דורשים הגשת קובץ.

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
node "11 - Closures & Modules/closures-modules.js"
node "13 - Data Structures/data-structures.js"
node "14 - Big O/big-o.js"
node "17 - Trees & BST/bst.js"
```

תרגול ה‑Algo (`12 - Algo Practice`) רץ עם Jest:

```bash
cd "12 - Algo Practice"
npm install
npx jest                      # כל הבעיות
npm run test-sudokuValidator  # בעיה בודדת
```

> הערה: ב‑`08 - Array Methods` שני תרגילים (9 ו‑10) מחזירים תוצאה שונה מ"הפלט הצפוי" שמופיע בחומר הקורס — הקוד נכון מתמטית, והפער מצוין בהערות בתוך הקובץ.

נבנה כחלק מקורס **Fullstack AI Engineer**.
