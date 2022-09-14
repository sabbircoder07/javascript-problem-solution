/*
Difference of Max and Min Numbers in Array

Create a function that takes an array and returns the difference between the biggest and smallest numbers.

Examples
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
Smallest number is -50, biggest is 32.

diffMaxMin([44, 32, 86, 19]) ➞ 67
Smallest number is 19, biggest is 86.
Notes
N/A

*/

function diffMaxMin(arr) {
  let maximumNumber = arr[0];
  let menumumNumber = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > maximumNumber) {
      maximumNumber = arr[i];
    }
  }
  for (let j = 1; j <= arr.length; j++) {
    if (arr[j] < menumumNumber) {
      menumumNumber = arr[j];
    }
  }
  return maximumNumber - menumumNumber;
}

console.log(diffMaxMin([44, 32, 86, 19]));
