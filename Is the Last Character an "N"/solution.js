/*
Is the Last Character an "N"?

Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

Examples
isLastCharacterN("Aiden") ➞ true

isLastCharacterN("Piet") ➞ false

isLastCharacterN("Bert") ➞ false

isLastCharacterN("Dean") ➞ true
*/

function isLastCharacterN(word) {
  let lastChar = word[word.length - 1];
  if (lastChar === "n") {
    return true;
  } else {
    return false;
  }
}
