/*
Recursion: Array Sum

Write a function that finds the sum of an array. Make your function recursive.

Examples
sum([1, 2, 3, 4]) ➞ 10

sum([1, 2]) ➞ 3

sum([1]) ➞ 1

sum([]) ➞ 0
Notes
Return 0 for an empty array.
Check the Resources tab for info on recursion.
*/

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

console.log(sum([]));
