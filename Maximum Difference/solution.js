/*
Maximum Difference

Given an array of integers, return the difference between the largest and smallest integers in the array.

Examples
difference([10, 15, 20, 2, 10, 6]) ➞ 18
20 - 2 = 18

difference([-3, 4, -9, -1, -2, 15]) ➞ 24
15 - (-9) = 24

difference([4, 17, 12, 2, 10, 2]) ➞ 15
Notes
N/A
*/

function difference(nums) {
  let max = nums[0];
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return max - min;
}

console.log(difference([10, 15, 20, 2, 10, 6]));
