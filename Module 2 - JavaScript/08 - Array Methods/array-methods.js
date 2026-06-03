// The users array from https://jsonplaceholder.typicode.com/users
// (JSON is valid JS, so we just paste it into a variable). No loops are used below.
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
]


// Exercise 1
let emailsAndCompanies = users.map(user => ({ email: user.email, companyName: user.company.name }))
console.log(emailsAndCompanies)


// Exercise 2
let zipStartsWith5 = users.filter(user => user.address.zipcode.startsWith("5"))
console.log(zipStartsWith5) // the objects with ids 3, 4 and 7


// Exercise 3
let idsZipStartsWith5 = users
  .filter(user => user.address.zipcode.startsWith("5"))
  .map(user => user.id)
console.log(idsZipStartsWith5) // [3, 4, 7]


// Exercise 4
let namesStartingWithC = users
  .map(user => user.name)
  .filter(name => name.startsWith("C"))
console.log(namesStartingWithC) // ["Clementine Bauch", "Chelsey Dietrich", "Clementina DuBuque"]


// Exercise 5
let allInSouthChristy = users.every(user => user.address.city === "South Christy")
console.log(allInSouthChristy) // false


// Exercise 6
let userInApt950 = users.find(user => user.address.suite === "Apt. 950")
console.log(userInApt950.company.name) // Considine-Lockman


// Exercise 7
const describeUser = function (user) {
  console.log(user.name + " lives in " + user.address.city + ", and owns the company " + user.company.name)
}
users.forEach(describeUser)


// From here on we don't use the users array anymore.

// Exercise 8
let inventory = [
    { name: "Laptop", price: 899.99, quantity: 5 },
    { name: "Mouse", price: 24.99, quantity: 12 },
    { name: "Keyboard", price: 79.99, quantity: 8 },
    { name: "Monitor", price: 249.99, quantity: 3 },
    { name: "Headphones", price: 149.99, quantity: 6 }
]
let totalInventoryValue = inventory.reduce((total, item) => total + item.price * item.quantity, 0)
console.log(totalInventoryValue) // 7089.66


// Exercise 9
let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81]
let gradeCounts = studentScores.reduce((counts, score) => {
  if (score >= 90) counts.A++
  else if (score >= 80) counts.B++
  else if (score >= 70) counts.C++
  else counts.F++
  return counts
}, { A: 0, B: 0, C: 0, F: 0 })
console.log(gradeCounts) // { A: 5, B: 6, C: 4, F: 0 }
// the exercise says the expected output is { A: 5, B: 7, C: 3, F: 0 }, but that's a mistake -
// counting the scores by the scale (B: 80-89, C: 70-79) gives B: 6 and C: 4. our output is the correct one.


// Exercise 10
let cartItems = [
    { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
    { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
    { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
    { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
    { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
]

let taxRates = {
    clothing: 0.08,    // 8% tax
    electronics: 0.10, // 10% tax
    food: 0.05        // 5% tax
}

let cartTotalWithTax = cartItems.reduce((total, item) => {
  let lineTotal = item.price * item.quantity
  return total + lineTotal * (1 + taxRates[item.category])
}, 0)
console.log(cartTotalWithTax) // 1677.8641
// the exercise says the expected output is 1621.3292, but that's a mistake -
// with this data and price * quantity * (1 + tax) the result is 1677.8641. our output is the correct one.
