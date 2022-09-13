/*
After N Months...

Create a function that takes in year and months as input, then return what year it would be after n-months have elapsed.

Examples
afterNMonths(2020, 24) ➞ 2022

afterNMonths(1832, 2) ➞ 1832

afterNMonths(1444, 60) ➞ 1449
Notes
Assume that adding 12 months will always increment the year by 1.
If no value is given for year or months, return "year missing" or "month missing".
At least one value will be present.
*/

function afterNMonths(year, months) {
  let myTotalyYear;
  if (year === undefined) {
    return "year missing";
  } else if (months === undefined) {
    return "month missing";
  } else {
    if (months >= 12) {
      myTotalyYear = year + Math.floor(months / 12);
    } else {
      myTotalyYear = year;
    }
  }

  return myTotalyYear;
}
