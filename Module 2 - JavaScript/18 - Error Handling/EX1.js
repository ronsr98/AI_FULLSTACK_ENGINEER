// Exercise 1: parse JSON safely. Returns the object, or an error message on bad input.
function safeJsonParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return "Invalid JSON format";
  }
}

// tests
console.log(safeJsonParse('{"name": "John"}')); // { name: 'John' }
console.log(safeJsonParse('invalid json')); // "Invalid JSON format"
