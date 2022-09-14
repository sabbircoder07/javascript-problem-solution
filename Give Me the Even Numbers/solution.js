/*

Give Me the Even Numbers

Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.

Examples
sumEvenNumsInRange(10, 20) ➞ 90
10, 12, 14, 16, 18, 20

sumEvenNumsInRange(51, 150) ➞ 5050

sumEvenNumsInRange(63, 97) ➞ 1360
Notes
Remember that the start and stop values are inclusive.
*/

function sumEvenNumsInRange(start, stop) {
  let sumEvenNums = 0;
  for (let i = start; i <= stop; i++) {
    if (i % 2 == 0) {
      sumEvenNums = sumEvenNums + i;
    }
  }
  return sumEvenNums;
}
