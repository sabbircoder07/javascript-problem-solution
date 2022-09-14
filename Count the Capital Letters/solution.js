/*
Count the Capital Letters

Given a string of letters, how many capital letters are there?

Examples
capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6

capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14

capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0
Notes
N/A
*/

function capitalLetters(txt) {
  let myAllCapitalLetters = /[A-Z]/g;
  let found = txt.match(myAllCapitalLetters);
  if (found === null) {
    return 0;
  } else {
    return found.length;
  }
}
