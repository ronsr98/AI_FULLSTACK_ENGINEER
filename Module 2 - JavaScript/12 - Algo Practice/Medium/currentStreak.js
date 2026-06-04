/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

// consecutive days ending on today
function currentStreak(today, dates) {
  const days = new Set(dates.map((d) => d.date)); // all active days
  const dayBefore = (ds) => {
    const [y, m, d] = ds.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d) - 86400000);
    const pad = (x) => String(x).padStart(2, "0");
    return dt.getUTCFullYear() + "-" + pad(dt.getUTCMonth() + 1) + "-" + pad(dt.getUTCDate());
  };
  let count = 0;
  let day = today;
  while (days.has(day)) {
    count++;
    day = dayBefore(day);
  }
  return count;
}

exports.solution = currentStreak;
