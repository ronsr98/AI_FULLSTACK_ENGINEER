/*
Create a function that takes an array of strings representing times ('hours:minutes:seconds') and returns their sum as an array of integers ([hours, minutes, seconds]).

Examples
timeSum(["1:23:45"]) ➞ [1, 23, 45]

timeSum(["1:03:45", "1:23:05"]) ➞ [2, 26, 50]

timeSum(["5:39:42", "10:02:08", "8:26:33"]) ➞ [24, 8, 23]
Notes
If the input is an empty array, return [0, 0, 0].
*/

// sum of times as [h, m, s] with carrying
function timeSum(times) {
  if (times.length === 0) return [0, 0, 0];
  const total = times.reduce((sum, t) => {
    const [h, m, s] = t.split(":").map(Number);
    return sum + h * 3600 + m * 60 + s;
  }, 0); // everything in seconds
  return [Math.floor(total / 3600), Math.floor((total % 3600) / 60), total % 60];
}

exports.solution = timeSum;
