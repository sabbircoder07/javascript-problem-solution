/*
Minimal IV: if-else if-else Inferno

Check the principles of minimalist code in the intro to the first challenge.

In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

Tips
Executing a return will effectively end your function.

For example, the code:

function compare_to_100 (x) {
  if (x > 100) {
      return "greater"
  } else if (x < 100) {
        return "smaller"
    } else {
      return "equal"
    }
}
Can be simplified to:

function compare_to_100 (x) {
    if (x > 100) return "greater"
    if (x < 100) return "smaller"
    return "equal"
}
If x is greater than 100, JavaScript will not execute the code past the first return.
If x is smaller than 100, JavaScript will not execute the code inside the first if statement or past the second return.
If x is equal to 100, JavaScript will not execute the code inside the two if statements.
This can only be used if you have a return inside your if statement.
Notes
This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.

*/

function equilibrium(x) {
  if (x > 0) {
    return "positive";
  } else if (x < 0) {
    return "negative";
  } else {
    return true;
  }
}
