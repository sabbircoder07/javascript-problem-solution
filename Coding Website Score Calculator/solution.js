/*
Coding Website Score Calculator

magine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points.

Create a function that takes the amount of challenges a user has completed for each challenge level, and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.

Examples
scoreCalculator(1, 2, 3) ➞ 85

scoreCalculator(1, 0, 10) ➞ 205

scoreCalculator(5, 2, -6) ➞ "invalid"
Notes
N/A
*/

function scoreCalculator(easy, med, hard) {
  return easy >= 0 && med >= 0 && hard >= 0
    ? easy * 5 + med * 10 + hard * 20
    : "invalid";
}

console.log(scoreCalculator(1, 2, 3));
