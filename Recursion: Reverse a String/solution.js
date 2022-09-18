/*
Recursion: Reverse a String

Write a function that reverses a string. Make your function recursive.

Examples
reverse("hello") ➞ "olleh"

reverse("world") ➞ "dlrow"

reverse("a") ➞ "a"

reverse("") ➞ ""
Notes
For non-base cases, your function must call itself at least once.
Check the Resources tab for info on recursion.
*/

function reverse(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverse("world"));
