// Exercise 2: a 3-question quiz with score tracking.
// Needs prompt-sync:  npm install prompt-sync
// Run: node quiz.js

const prompt = require("prompt-sync")();

// questions + answers live in an array
const quiz = [
  { question: "What is 2 + 2? ", answer: "4" },
  { question: "What is the capital of France? ", answer: "Paris" },
  { question: "What year is it? ", answer: "2026" },
];

let score = 0;
for (const item of quiz) {
  const reply = prompt(item.question);
  if (reply.trim().toLowerCase() === item.answer.toLowerCase()) score++;
}

console.log("Final Score: " + score + "/" + quiz.length + " correct!");
