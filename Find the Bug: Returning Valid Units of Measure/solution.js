/*
Find the Bug: Returning Valid Units of Measure

There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.

The return value should be a Boolean.

Expected results
hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" }) ➞ true

hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" }) ➞ false

hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false }) ➞ false

hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" }) ➞ false
Notes
Run the tests first to see the results before making changes and understand why eggs is not returning a boolean.
Why is eggs not returning a boolean?
When merging conditions through ||, the returned value is the result of the last truthy condition.
*/

function hasValidUnitOfMeasure(product = {}) {
  const { unitOfMeasure, comment } = product;
  return (
    comment === "Eggs are too different in size" ||
    unitOfMeasure === "L" ||
    unitOfMeasure === "PCE"
  );
}

console.log(hasValidUnitOfMeasure({ product: "Beef", unitOfMeasure: "Cow" }));
