/*
Equality Check

In this challenge, you must verify the equality of two different values given the parameters a and b.

Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

Numbers
Strings
Booleans (false or true)
Special values: undefined, null and NaN
What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

Implement a function that returns true if the parameters are equal, and false if they are not.

Examples
checkEquality(1, true) ➞ false
A number and a boolean: the value and type are different.

checkEquality(0, "0") ➞ false
A number and a string: the type is different.

checkEquality(1,  1) ➞ true
A number and a number: the type and value are equal.
Notes
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/

function checkEquality(a, b) {
  return a === b;
}

console.log(checkEquality(0, "0"));
