/*
Spaces Between Each Character

Create a function that takes a string and returns a string with spaces in between all of the characters.

Examples
spaceMeOut("space") ➞ "s p a c e"

spaceMeOut("far out") ➞ "f a r   o u t"

spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"
Notes
Treat a space as its own character (i.e. leave three spaces between words).
*/

function spaceMeOut(str) {
  return [...str].join(" ");
}

console.log(spaceMeOut("elongated musk"));
