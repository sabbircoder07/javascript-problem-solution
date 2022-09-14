/*
Hiding the Card Number

Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

Examples
cardHide("1234123456785678") ➞ "************5678"

cardHide("8754456321113213") ➞ "************3213"

cardHide("35123413355523") ➞ "**********5523"
Examples
Ensure you return a string.
The length of the string must remain the same as the input.
*/

function cardHide(card) {
  let replacedBy = "*";
  let mycardHide = replacedBy.repeat(card.length - 4) + card.slice(-4);
  return mycardHide;
}
