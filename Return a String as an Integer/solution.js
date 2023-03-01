/*
Return a String as an Integer
Create a function that takes a string and returns it as an integer.

Examples
stringInt("6") ➞ 6

stringInt("1000") ➞ 1000

stringInt("12") ➞ 12
Notes
All numbers will be whole.
All numbers will be positive.
*/

function stringInt(str) {
  if (str * 1 > 0) {
    return str * 1;
  }
}

console.log(stringInt("1000"));
