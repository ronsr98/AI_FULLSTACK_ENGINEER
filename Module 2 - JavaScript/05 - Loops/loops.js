// ===================================================================
// Module 2 - JavaScript | Loops
// ===================================================================

// ---------- Exercise 1: Build the people array ----------
console.log("--- Exercise 1: Build people ---");
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

// classic for loop: we need the index to read from BOTH arrays
for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] });
}
console.log(people);

// ---------- Exercise 2: Print "<name> is <age> years old" ----------
console.log("\n--- Exercise 2: Describe people ---");
// for...of is the natural fit: we just read each item, no index needed
for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

// ---------- Exercise 3: Remove the post with id === 2 (by FINDING it) ----------
console.log("\n--- Exercise 3: Remove a post ---");
const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];

const indexToRemove = posts.findIndex((post) => post.id === 2);
if (indexToRemove !== -1) {
  posts.splice(indexToRemove, 1); // splice is used, but the index is found, not hard-coded
}
console.log(posts);

// ---------- Exercise 4: Remove a specific comment inside a specific post ----------
console.log("\n--- Exercise 4: Remove a comment ---");
const posts2 = [
  { id: 1, text: "Love this product", comments: [] },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  { id: 3, text: "So glad I found this. Bought four already!", comments: [] },
];

const postId = 2;
const commentId = 3;

const targetPost = posts2.find((post) => post.id === postId);
if (targetPost) {
  const commentIndex = targetPost.comments.findIndex((c) => c.id === commentId);
  if (commentIndex !== -1) {
    targetPost.comments.splice(commentIndex, 1);
  }
}
console.log(JSON.stringify(posts2, null, 2));

// ---------- Exercise 5: Dictionary with a double for loop ----------
console.log("\n--- Exercise 5: Dictionary ---");
const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

const letters = Object.keys(dictionary);
for (let i = 0; i < letters.length; i++) {      // outer loop: each letter / key
  const letter = letters[i];
  console.log(`Words that begin with  ${letter}:`);

  const words = dictionary[letter];
  for (let j = 0; j < words.length; j++) {      // inner loop: each word for that letter
    console.log(`    ${words[j]}`);
  }
}
