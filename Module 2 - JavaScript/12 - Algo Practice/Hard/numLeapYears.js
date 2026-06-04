/*
Given a range of years as a string, return the number of leap years there are within the range (inclusive).

Examples
numLeapYears("1980-1984") ➞ 2
// 1980 and 1984 are leapyears.

numLeapYears("2000-2020") ➞ 6

numLeapYears("1600-2000") ➞ 98
Notes
Remember that a hyphen separates the years.
 * Leap Years are any year that can be exactly divided by 4 (such as 2016, 2020, 2024, etc)
 * Except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
 * Except if it can be exactly divided by 400, then it is (such as 2000, 2400)

*/

// count of leap years in the range
function numLeapYears(str) {
  const [start, end] = str.split("-").map(Number);
  const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  let count = 0;
  for (let y = start; y <= end; y++) if (isLeap(y)) count++;
  return count;
}

exports.solution = numLeapYears;
