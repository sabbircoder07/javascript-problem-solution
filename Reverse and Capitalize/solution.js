/*
Reverse and Capitalize

Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

Examples
reverseCapitalize("abc") ➞ "CBA"

reverseCapitalize("hellothere") ➞ "EREHTOLLEH"

reverseCapitalize("input") ➞ "TUPNI"
Notes
N/A
*/

function reverseCapitalize(str) {
  let myArryAtring = str.split("");
  let myReverseString = myArryAtring.reverse();
  let myreverseCapitalize = myReverseString.join("").toUpperCase();
  return myreverseCapitalize;
}

console.log(reverseCapitalize("input"));
