// ===================================================================
// Module 2 - JavaScript | Functions Galore (Separation of Concerns)
// ===================================================================

// ---------- Exercise 1: getSummary for each person ----------
console.log("--- Exercise 1: getSummary ---");

const people_info = [
  { name: "guido",  profession: "bungalow builder",  age: 17, country: "canaland",  city: "sydurn", catchphrase: "what a piece of wood!" },
  { name: "petra",  profession: "jet plane mechanic", age: 31, country: "greenmark", city: "bostork", catchphrase: "that's my engine, bub" },
  { name: "damian", profession: "nursery assistant",  age: 72, country: "zimbia",    city: "bekyo",   catchphrase: "with great responsibility comes great power" },
];

// Given helper: capitalize the first letter of a single word
const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1);         // rest of the string
  return capitalizedStr;
};

// Format the age into the right phrase (article included so the sentence reads well)
const getAge = function (age) {
  if (age < 21) return "an Underage";   // under 21
  if (age > 55) return "a 55+";         // older than 55
  return `${age} year old`;             // otherwise, the age as-is
};

// Capitalize every word of the profession ("bungalow builder" -> "Bungalow Builder")
const capitalizeProfession = function (profession) {
  return profession.split(" ").map(capitalize).join(" ");
};

// Capitalize the first letter of the catchphrase, wrap in quotes, end with a period
const capitalizeCatchphrase = function (catchphrase) {
  return `"${capitalize(catchphrase)}".`;
};

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `;
  summary += capitalizeProfession(person.profession);
  summary += ` from ${capitalize(person.city)}, ${capitalize(person.country)}. `;
  summary += `${capitalize(person.name)} loves to say `;
  summary += capitalizeCatchphrase(person.catchphrase);
  return summary;
};

// loop that calls getSummary for each person
for (const person of people_info) {
  console.log(getSummary(person));
}
/*
Expected:
Guido is an Underage Bungalow Builder from Sydurn, Canaland. Guido loves to say "What a piece of wood!".
Petra is 31 year old Jet Plane Mechanic from Bostork, Greenmark. Petra loves to say "That's my engine, bub".
Damian is a 55+ Nursery Assistant from Bekyo, Zimbia. Damian loves to say "With great responsibility comes great power".
*/

// ---------- Exercise 2: word counter ----------
console.log("\n--- Exercise 2: word counter ---");

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

// 1) clean a sentence: lowercase, strip special characters, split into words
const cleanText = function (sentence) {
  let cleaned = sentence.toLowerCase();
  for (const char of specialChars) {
    cleaned = cleaned.split(char).join(" "); // replace each special char with a space
  }
  return cleaned.split(" "); // array of words (may include "" from double spaces)
};

// 2) add a single word to the counter object
const addToCounter = function (word) {
  if (wordCounts[word]) {
    wordCounts[word] += 1; // already seen -> increment
  } else {
    wordCounts[word] = 1;  // first time -> start at 1
  }
};

// 3) main coordinator
const countWords = function (sentence) {
  const words = cleanText(sentence);
  for (const word of words) {
    addToCounter(word);
  }
};

countWords(story);
console.log(wordCounts);
