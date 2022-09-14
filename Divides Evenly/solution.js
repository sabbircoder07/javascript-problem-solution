/*
Divides Evenly

Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

Examples
dividesEvenly(98, 7) ➞ true
98/7 = 14

dividesEvenly(85, 4) ➞ false
85/4 = 21.25
*/

function dividesEvenly(a, b) {
  if ((a) => b) {
    if (a % b === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
