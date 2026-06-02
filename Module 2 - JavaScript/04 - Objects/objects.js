// ===================================================================
// Module 2 - JavaScript | Objects
// ===================================================================

// ---------- Exercise 1: Dating logic using ONLY object properties ----------
console.log("--- Exercise 1: Dating ---");
const p1 = { name: "Jill",   age: 28, city: "Tel Aviv" };
const p2 = { name: "Robert", age: 28, city: "Tel Aviv" };

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log(`${p1.name} wanted to date ${p2.name}`);
  } else {
    console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`);
  }
}

// ---------- Exercise 2: library object ----------
console.log("\n--- Exercise 2: Library ---");
const library = {
  books: [
    { title: "Clean Code",               author: "Robert C. Martin" },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt" },
    { title: "You Don't Know JS",        author: "Kyle Simpson" },
    { title: "Eloquent JavaScript",      author: "Marijn Haverbeke" },
    { title: "Refactoring",              author: "Martin Fowler" },
  ],
};
console.log(library);

// ---------- Exercise 3 + 3.1 + 3.2: Reservation system ----------
console.log("\n--- Exercise 3: Reservations ---");
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

function checkReservation(rawName) {
  // 3.2: 'ted', 'Ted', 'TeD' should all be treated as the same person
  const existingKey = Object.keys(reservations).find(
    (key) => key.toLowerCase() === rawName.toLowerCase()
  );

  if (existingKey) {
    if (!reservations[existingKey].claimed) {
      reservations[existingKey].claimed = true;   // claim it on arrival
      console.log(`Welcome, ${existingKey}`);
    } else {
      console.log("Hmm, someone already claimed this reservation");
    }
  } else {
    // 3.1: no reservation -> create one and mark it as claimed
    reservations[rawName] = { claimed: true };
    console.log("You have no reservation");
  }
}

checkReservation("Bob");    // Welcome, Bob
checkReservation("ted");    // Hmm, someone already claimed this reservation (case-insensitive)
checkReservation("Alice");  // You have no reservation (and Alice is added to the object)
console.log(reservations);

// ---------- Exercise 4: Geraldine's kitchen ----------
console.log("\n--- Exercise 4: Kitchen ---");
const date = 3;
const kitchen = {
  owner: "Geraldine",
  hasOven: true,    // change to test other scenarios
  fridge: {
    price: 500,
    works: true,    // change to test other scenarios
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread",  expiryDate: 1 },
    ],
  },
};

function describeKitchen(hasOven, works) {
  const owner = kitchen.owner;
  const item = kitchen.fridge.items[1];      // the radish (taken from the data, not hard-coded)
  const daysAgo = date - item.expiryDate;    // 3 - 2 = 1
  const dayWord = daysAgo === 1 ? "day" : "days";
  const fixCost = kitchen.fridge.price / 2;  // half of 500 = 250

  let msg = `${owner}'s ${item.name} expired ${daysAgo} ${dayWord} ago. `;
  msg += works
    ? "Weird, considering her fridge works. "
    : "Probably because her fridge doesn't work. ";
  msg += hasOven
    ? `Luckily, she has an oven to cook the ${item.name} in.`
    : `Too bad she doesn't have an oven to cook the ${item.name} in.`;
  if (!works) {
    msg += ` And she'll have to pay ${fixCost} to fix the fridge.`;
  }
  return msg;
}

// the actual answer, based on the values chosen in the object:
console.log(describeKitchen(kitchen.hasOven, kitchen.fridge.works));

// all four combinations, for completeness:
console.log("\n[All four scenarios]");
console.log(describeKitchen(true,  true));
console.log(describeKitchen(false, true));
console.log(describeKitchen(true,  false));
console.log(describeKitchen(false, false));
