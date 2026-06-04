/*
You are given an array of binary integers and k, the number of flips allowed.

Write a function that returns the indices of zeroes of which, when flipped, return the longest contiguous sequence of ones.

Examples
zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 1) ➞ [1]

zeroIndices([1, 0, 0, 0, 0, 1], 1) ➞ [1]

zeroIndices([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 3) ➞ [6, 7, 9]

zeroIndices([1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], 3) ➞ [7, 8, 9]
Notes
If multiple combinations of indices tie for longest one sequence, return the indices which occur first (see examples #2, #3).
*/

// zeros to flip for the longest run of ones
function zeroIndices(arr, k) {
  let l = 0, zeros = 0, bestL = 0, bestLen = 0; // sliding window
  for (let r = 0; r < arr.length; r++) {
    if (arr[r] === 0) zeros++;
    while (zeros > k) {
      if (arr[l] === 0) zeros--;
      l++;
    }
    if (r - l + 1 > bestLen) {
      bestLen = r - l + 1;
      bestL = l;
    }
  }
  const res = [];
  for (let i = bestL; i < bestL + bestLen; i++) if (arr[i] === 0) res.push(i);
  return res;
}

exports.solution = zeroIndices;
