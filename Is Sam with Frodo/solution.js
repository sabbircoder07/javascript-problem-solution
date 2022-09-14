/*
Is Sam with Frodo?

Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

Examples
middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true

middleEarth(["Frodo", "Saruman", "Sam"]) ➞ false

middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) ➞ true
Notes
No matter who comes first, the result must be true if Frodo and Sam are side by side.
There is only one Sam and one Frodo in the array.

*/

function middleEarth(arr) {
  let indexOfSam = arr.indexOf("Sam");
  let indexOfFrodo = arr.indexOf("Frodo");
  let difference = Math.abs(indexOfSam - indexOfFrodo);
  if (difference === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"]));
