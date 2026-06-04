/*
In this challenge, you are given a date and you have to determine the correspondent season in a certain hemisphere of Earth.

You have to use the ranges given by the meteorological seasons definition, accordingly to the following table:

Start	End	North Hemisphere	South Hemisphere
March, 1	May, 31	Spring	Autumn
June, 1	August, 31	Summer	Winter
September, 1	November, 30	Autumn	Spring
December, 1	February, 28***	Winter	Summer
Given two strings hemisphere (can be "N" for the North hemisphere or "S" for the South hemisphere) and date (name and day of the month), implement a function that returns a string with the season name, accordingly to the above table.

Examples
hemisphereSeason("N", "June, 30") ➞ "Summer"

hemisphereSeason("N", "March, 1") ➞ "Spring"

hemisphereSeason("S", "September, 22") ➞ "Spring"
Notes
During leap years the end date of Winter in the northern hemisphere is the 29th day of February (last day of Summer in the southern hemisphere). In this challenge, years are not used, so the last day of February will always be the 28th.
*/

// season for the month in the given hemisphere
function hemisphereSeason(hemisphere, date) {
  const month = date.split(",")[0].trim();
  const north = {
    March: "Spring", April: "Spring", May: "Spring",
    June: "Summer", July: "Summer", August: "Summer",
    September: "Autumn", October: "Autumn", November: "Autumn",
    December: "Winter", January: "Winter", February: "Winter",
  };
  const flip = { Spring: "Autumn", Summer: "Winter", Autumn: "Spring", Winter: "Summer" };
  const season = north[month];
  return hemisphere === "N" ? season : flip[season];
}

exports.solution = hemisphereSeason;
