/*
Maximum Difference

Create a function, that will for a given a, b, c, do the following:

Add a to itself b times.
Check if the result is divisible by c.
Examples
abcmath(42, 5, 10) ➞ false
42+42 = 84,84+84 = 168,168+168 = 336,336+336 = 672, 672+672 = 1344
1344 is not divisible by 10

abcmath(5, 2, 1) ➞ true

abcmath(1, 2, 3) ➞ false
Notes
In the first step of the function, a doesn't always refer to the original a.
"if the result is divisible by c", means that if you divide the result and c, you will get an integer (5, and not 4.5314).
The second test is correct.
*/

function abcmath(a, b, c) {
  let myResult;
  for (let i = 1; i <= b; i++) {
    a += a;
  }
  if (a % c === 0) {
    myResult = true;
  } else {
    myResult = false;
  }
  return myResult;
}

console.log(abcmath(5, 2, 1));
