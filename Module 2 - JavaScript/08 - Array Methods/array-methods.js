// Module 2 - JavaScript | ES6 Array Methods - Exercises
// No loops are used anywhere below - only filter / map / find / some / every / forEach / reduce.

// The users data from https://jsonplaceholder.typicode.com/users
// (embedded so the script runs offline; JSON is valid JS).
let users = [
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz", address: { suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874" }, company: { name: "Romaguera-Crona" } },
  { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", address: { suite: "Suite 879", city: "Wisokyburgh", zipcode: "90566-7771" }, company: { name: "Deckow-Crist" } },
  { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net", address: { suite: "Suite 847", city: "McKenziehaven", zipcode: "59590-4157" }, company: { name: "Romaguera-Jacobson" } },
  { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org", address: { suite: "Apt. 692", city: "South Elvis", zipcode: "53919-4257" }, company: { name: "Robel-Corkery" } },
  { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca", address: { suite: "Suite 351", city: "Roscoeview", zipcode: "33263" }, company: { name: "Keebler LLC" } },
  { id: 6, name: "Mrs. Dennis Schulist", email: "Karley_Dach@jasper.info", address: { suite: "Apt. 950", city: "South Christy", zipcode: "23505-1337" }, company: { name: "Considine-Lockman" } },
  { id: 7, name: "Kurtis Weissnat", email: "Telly.Hoeger@billy.biz", address: { suite: "Suite 280", city: "Howemouth", zipcode: "58804-1099" }, company: { name: "Johns Group" } },
  { id: 8, name: "Nicholas Runolfsdottir V", email: "Sherwood@rosamond.me", address: { suite: "Suite 729", city: "Aliyaview", zipcode: "45169" }, company: { name: "Abernathy Group" } },
  { id: 9, name: "Glenna Reichert", email: "Chaim_McDermott@dana.io", address: { suite: "Suite 449", city: "Bartholomebury", zipcode: "76495-3109" }, company: { name: "Yost and Sons" } },
  { id: 10, name: "Clementina DuBuque", email: "Rey.Padberg@karina.biz", address: { suite: "Suite 198", city: "Lebsackbury", zipcode: "31428-2261" }, company: { name: "Hoeger LLC" } },
];

// ---------- Exercise 1: map to { email, companyName } ----------
console.log("--- Exercise 1: email + companyName ---");
const emailsAndCompanies = users.map((user) => ({
  email: user.email,
  companyName: user.company.name,
}));
console.log(emailsAndCompanies);

// ---------- Exercise 2: users whose zipcode starts with "5" ----------
console.log("\n--- Exercise 2: zipcode starts with 5 ---");
const zipStartsWith5 = users.filter((user) =>
  user.address.zipcode.startsWith("5")
);
console.log(zipStartsWith5); // objects with ids 3, 4, 7

// ---------- Exercise 3: chain filter + map to just the IDs ----------
console.log("\n--- Exercise 3: just the IDs ---");
const idsZipStartsWith5 = users
  .filter((user) => user.address.zipcode.startsWith("5"))
  .map((user) => user.id);
console.log(idsZipStartsWith5); // [3, 4, 7]

// ---------- Exercise 4: names that start with "C" ----------
console.log("\n--- Exercise 4: names starting with C ---");
const namesStartingWithC = users
  .map((user) => user.name)
  .filter((name) => name.startsWith("C"));
console.log(namesStartingWithC);
// ["Clementine Bauch", "Chelsey Dietrich", "Clementina DuBuque"]

// ---------- Exercise 5: do ALL users live in "South Christy"? ----------
console.log("\n--- Exercise 5: all in South Christy? ---");
const allInSouthChristy = users.every(
  (user) => user.address.city === "South Christy"
);
console.log(allInSouthChristy); // false

// ---------- Exercise 6: find user with suite "Apt. 950", log company name ----------
console.log("\n--- Exercise 6: find by suite ---");
const userInApt950 = users.find((user) => user.address.suite === "Apt. 950");
console.log(userInApt950.company.name); // "Considine-Lockman"

// ---------- Exercise 7: forEach with a named function ----------
console.log("\n--- Exercise 7: forEach + named function ---");
const describeUser = function (user) {
  console.log(
    user.name +
      " lives in " +
      user.address.city +
      ", and owns the company " +
      user.company.name
  );
};
users.forEach(describeUser);

// ===== From here on we no longer use the users array. =====

// ---------- Exercise 8: reduce - total inventory value ----------
console.log("\n--- Exercise 8: inventory value ---");
let inventory = [
  { name: "Laptop", price: 899.99, quantity: 5 },
  { name: "Mouse", price: 24.99, quantity: 12 },
  { name: "Keyboard", price: 79.99, quantity: 8 },
  { name: "Monitor", price: 249.99, quantity: 3 },
  { name: "Headphones", price: 149.99, quantity: 6 },
];
const totalInventoryValue = inventory.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
console.log(totalInventoryValue); // 7089.66

// ---------- Exercise 9: reduce - count letter grades ----------
console.log("\n--- Exercise 9: grade tally ---");
let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];
const gradeCounts = studentScores.reduce(
  (counts, score) => {
    if (score >= 90) counts.A++;
    else if (score >= 80) counts.B++;
    else if (score >= 70) counts.C++;
    else counts.F++;
    return counts;
  },
  { A: 0, B: 0, C: 0, F: 0 }
);
console.log(gradeCounts); // { A: 5, B: 6, C: 4, F: 0 }
// NOTE: the course's stated expected output is { A: 5, B: 7, C: 3, F: 0 },
// but counting the data by the scale (B: 80-89, C: 70-79) gives B: 6 and C: 4.
// The code above is correct; the expected output in the material is off.

// ---------- Exercise 10: reduce - cart total including tax ----------
console.log("\n--- Exercise 10: cart total with tax ---");
let cartItems = [
  { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
  { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
  { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
  { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
  { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 },
];
let taxRates = {
  clothing: 0.08, // 8% tax
  electronics: 0.1, // 10% tax
  food: 0.05, // 5% tax
};
const cartTotalWithTax = cartItems.reduce((total, item) => {
  const lineTotal = item.price * item.quantity;
  const withTax = lineTotal * (1 + taxRates[item.category]);
  return total + withTax;
}, 0);
console.log(cartTotalWithTax); // 1677.8641
// NOTE: the course's stated expected output is 1621.3292, but using the given
// data with the formula price * quantity * (1 + tax) the result is 1677.8641.
// The code above is correct; the expected number in the material is off.
