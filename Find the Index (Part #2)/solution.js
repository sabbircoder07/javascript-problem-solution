/*
Find the Index (Part #2)

Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

Examples
search([1, 2, 3, 4], 3) ➞ 2

search([2, 4, 6, 8, 10], 8) ➞ 3

search([1, 3, 5, 7, 9], 11) ➞ -1
Notes
If the item is not present, return -1.
The given array is ordered.
*/

function search(arr, item) {
  return arr.indexOf(item);
}

console.log(search([1, 3, 5, 7, 9], 11));
