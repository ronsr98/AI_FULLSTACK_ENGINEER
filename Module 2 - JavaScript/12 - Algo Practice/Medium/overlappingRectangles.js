/*
Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

Notes
Coordinates can be positive or negative integers.
*/

// area where the two rectangles overlap
function overlappingRectangles(r1, r2) {
  const x1 = Math.max(Math.min(r1[0].x, r1[1].x), Math.min(r2[0].x, r2[1].x));
  const x2 = Math.min(Math.max(r1[0].x, r1[1].x), Math.max(r2[0].x, r2[1].x));
  const y1 = Math.max(Math.min(r1[0].y, r1[1].y), Math.min(r2[0].y, r2[1].y));
  const y2 = Math.min(Math.max(r1[0].y, r1[1].y), Math.max(r2[0].y, r2[1].y));
  const width = Math.max(0, x2 - x1);
  const height = Math.max(0, y2 - y1);
  return width * height;
}

exports.solution = overlappingRectangles;
