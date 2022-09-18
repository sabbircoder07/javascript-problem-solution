/*
Add, Subtract, Multiply or Divide?

Write a function that takes two numbers and returns if they should be added, subtracted, 
multiplied or divided to get 24. If none of the operations can give 24, return null.

Examples
operation(15, 9) ➞ "added"

operation(26, 2) ➞ "subtracted"

operation(11, 11) ➞ null
Notes
Only integers are used as test input.
Numbers should be added, subtracted, divided or multiplied in the order they appear in the parameters.
The function should return either "added", "subtracted", "divided", "multiplied" or null.
*/

function operation(num1, num2) {
  if (num1 + num2 === 24) {
    return "added";
  } else if (num1 - num2 === 24) {
    return "subtracted";
  } else if (num1 * num2 === 24) {
    return "multiplied";
  } else if (num1 / num2 === 24) {
    return "divided";
  } else {
    return null;
  }
}

console.log(operation(11, 11));
