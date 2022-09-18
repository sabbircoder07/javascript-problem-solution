/*
Extract City Facts

Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

name
population
continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

Examples
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
Notes
Don't add a period at the end.
*/

function cityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

console.log(
  cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia",
  })
);
