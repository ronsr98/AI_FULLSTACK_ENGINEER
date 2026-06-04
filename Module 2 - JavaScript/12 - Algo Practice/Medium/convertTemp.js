/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

// Celsius <-> Fahrenheit, or 'Error'
function convertTemp(str) {
  const match = str.match(/^(-?\d+)\u00B0([CF])$/); // number + degree sign + C/F
  if (!match) return "Error";
  const n = Number(match[1]);
  if (match[2] === "C") return Math.round(n * 9 / 5 + 32) + "\u00B0F";
  return Math.round((n - 32) * 5 / 9) + "\u00B0C";
}

exports.solution = convertTemp;
