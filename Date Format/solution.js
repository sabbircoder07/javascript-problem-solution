/*
Date Format

Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

Examples
formatDate("11/12/2019") ➞ "20191211"

formatDate("12/31/2019") ➞ "20193112"

formatDate("01/15/2019") ➞ "20191501"
Notes
Return value should be a string.
*/

function formatDate(date) {
  var d = new Date(date);
  var year = d.getFullYear().toString();
  var month = (d.getMonth() + 101).toString().substring(1);
  var day = (d.getDate() + 100).toString().substring(1);
  return year + day + month;
}

console.log(formatDate("12/31/2019"));
