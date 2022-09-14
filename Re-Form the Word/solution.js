/*
Re-Form the Word

A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

Examples
getWord("seas", "onal") ➞ "Seasonal"

getWord("comp", "lete") ➞ "Complete"

getWord("lang", "uage") ➞ "Language"
Notes
N/A

*/

function getWord(left, right) {
  let firstChar = left.charAt(0).toUpperCase();
  let leftPart = left.slice(1);
  return firstChar + leftPart + right;
}

console.log(getWord("lang", "uage"));
