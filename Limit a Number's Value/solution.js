/*
Limit a Number's Value

Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.

If the number falls within the range, the number should be returned.
If the number is less than the lower limit of the range, the lower limit should be returned.
If the number is greater than the upper limit of the range, the upper limit should be returned.
Examples
limitNumber(5, 1, 10) ➞ 5

limitNumber(-3, 1, 10) ➞ 1

limitNumber(14, 1, 10) ➞ 10

limitNumber(4.6, 1, 10) ➞ 4.6
Notes
All test inputs will be valid numbers.
All test inputs' range parameters will be in the correct order (i.e. the lower range will be less than or equal to the upper range).

*/

function limitNumber(num, rangeLow, rangeHigh) {
  if (num < rangeLow) {
    return rangeLow;
  } else if (num > rangeHigh) {
    return rangeHigh;
  } else {
    return num;
  }
}

console.log(limitNumber(4.6, 1, 10));
