/*
Is the String Odd or Even?

Given a string, return true if its length is even or false if the length is odd.

Examples
oddOrEven("apples") ➞ true
The word "apples" has 6 characters.
6 is an even number, so the program outputs true.

oddOrEven("pears") ➞ false
"pears" has 5 letters, and 5 is odd.
 Therefore the program outputs false.

oddOrEven("cherry") ➞ true
Notes
N/A

*/

function oddOrEven(s) {
  return s.length % 2 == 0 ? true : false;
}
