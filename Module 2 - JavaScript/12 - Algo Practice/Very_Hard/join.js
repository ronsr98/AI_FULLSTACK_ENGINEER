/*
Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
*/

// [merged string, smallest overlap] across the words
function join(words) {
  let result = words[0];
  let minOverlap = Infinity;
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1], next = words[i];
    let overlap = 0; // shared letters between prev's tail and next's head
    const maxK = Math.min(prev.length, next.length);
    for (let k = maxK; k >= 1; k--) {
      if (prev.slice(prev.length - k) === next.slice(0, k)) { overlap = k; break; }
    }
    minOverlap = Math.min(minOverlap, overlap);
    result += next.slice(overlap);
  }
  if (words.length < 2) minOverlap = 0;
  return [result, minOverlap];
}

exports.solution = join;
