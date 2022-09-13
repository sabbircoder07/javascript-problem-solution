/*
Multiply Every Array Item by Two

Create a function that takes an array with numbers and return an array with the elements multiplied by two.

Examples
getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
Notes
N/A

*/

function getMultipliedArr(arr) {
  let myGetMultipliedArr = arr.map((item) => item * 2);
  return myGetMultipliedArr;
}
