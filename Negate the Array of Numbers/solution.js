/*
Negate the Array of Numbers

Given an array of numbers, negate all elements contained within.

Negating a positive value -+n will return -n, because all +'s are removed.
Negating a negative value --n will return n, because the first - turns the second minus into a +.
Examples
negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]

negate([]) ➞ []
Notes
If you get an empty array, return an empty array: []

*/

function negate(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    let myMap = arr.map((x) => -x);
    return myMap;
  }
}

console.log(negate([-1, 2, -3, 4]));
