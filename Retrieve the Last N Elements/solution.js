/*
Retrieve the Last N Elements

Write a function that retrieves the last n elements from an array.

Examples
last([1, 2, 3, 4, 5], 1) ➞ [5]

last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]

last([1, 2, 3, 4, 5], 7) ➞ "invalid"

last([1, 2, 3, 4, 5], 0) ➞ []
Notes
Return "invalid" if n exceeds the length of the array.
Return an empty array if n == 0.

*/

function last(a, n) {
  let myLastArray = new Array();
  if (n === 0) {
    myLastArray = [];
  } else {
    if (a.length >= n) {
      myLastArray = a.slice(Math.max(a.length - n, 0));
    } else {
      myLastArray = "invalid";
    }
  }
  return myLastArray;
}

console.log(last([1, 2, 3, 4, 5], 1));
