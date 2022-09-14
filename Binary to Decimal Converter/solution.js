/*
Binary to Decimal Converter

You are given one input: an array containing eight 1's and/or 0's. Write a function that takes an 8 bit binary number and converts it to decimal.

Examples
binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]) ➞ 255

binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]) ➞ 0

binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]) ➞ 188
Notes
Return an integer.
*/

function binaryToDecimal(binary) {
  let myString = binary.join("");
  return parseInt((myString + "").replace(/[^01]/gi, ""), 2);
}
