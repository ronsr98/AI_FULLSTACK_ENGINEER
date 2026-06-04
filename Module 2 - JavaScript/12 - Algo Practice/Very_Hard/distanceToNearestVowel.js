/*
WWrite a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/

// distance from each char to the nearest vowel
function distanceToNearestVowel(str) {
  const vowels = "aeiou";
  const spots = []; // indexes of vowels
  for (let i = 0; i < str.length; i++) if (vowels.includes(str[i])) spots.push(i);
  return str.split("").map((_, i) => Math.min(...spots.map((p) => Math.abs(p - i))));
}

exports.solution = distanceToNearestVowel;
