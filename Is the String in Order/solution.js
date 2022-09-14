/*
Is the String in Order?

Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

Examples
isInOrder("abc") ➞ true

isInOrder("edabit") ➞ false

isInOrder("123") ➞ true

isInOrder("xyzz") ➞ true
Notes
You don't have to handle empty strings.

*/

function isInOrder(str) {
  return str === str.split("").sort().join("");
}

console.log(isInOrder("xy0zz"));
