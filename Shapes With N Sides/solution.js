/*
Shapes With N Sides

Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"
Examples
nSidedShape(3) ➞ "triangle"

nSidedShape(1) ➞ "circle"

nSidedShape(9) ➞ "nonagon"
Notes
There won't be any tests with a number below 1 or greater than 10.
Return the output in lowercase.
The challenge is intended to be completed without conditionals (it would take too long)!

*/

function nSidedShape(n) {
  let myValue = {
    circle: 1,
    "semi-circle": 2,
    triangle: 3,
    square: 4,
    pentagon: 5,
    hexagon: 6,
    heptagon: 7,
    octagon: 8,
    nonagon: 9,
    decagon: 10,
  };
  let mynSidedShape = Object.keys(myValue).find((key) => myValue[key] === n);
  return mynSidedShape;
}
