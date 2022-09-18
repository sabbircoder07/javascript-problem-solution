/*
Recursion: Sum

Write a function that finds the sum of the first n natural numbers. Make your function recursive.

Examples
sum(5) ➞ 15
1 + 2 + 3 + 4 + 5 = 15

sum(1) ➞ 1

sum(12) ➞ 78
Notes
Assume the input number is always positive.
Check the Resources tab for info on recursion.
*/

function sum(n) {
  if (n === 0) {
    return n;
  }
  return n + sum(n - 1);
}

console.log(sum(12));
