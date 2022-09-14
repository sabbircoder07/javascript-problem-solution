/*
Both Zero, Negative or Positive

Write a function that returns true if both numbers are:

Smaller than 0, OR ...
Greater than 0, OR ...
Exactly 0
Otherwise, return false.

Examples
both(6, 2) ➞ true

both(0, 0) ➞ true

both(-1, 2) ➞ false

both(0, 2) ➞ false
Notes
Inputs will always be two numbers.

*/

function both(n1, n2) {
  return Math.sign(n1) === Math.sign(n2);
}

console.log(both(0, 2));
