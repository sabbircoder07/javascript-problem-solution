/*
Odd Up, Even Down
Create a function that goes through the array, incrementing (+1)
for each odd-valued number and decrementing (-1) for each even-valued number.
Examples
transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]
transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]
transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]
*/

function transform(arr) {
  return arr.map(item => (item % 2 === 0 ? item - 1 : item + 1));
}

console.log(transform([2, 2, 0, 8, 10]));
