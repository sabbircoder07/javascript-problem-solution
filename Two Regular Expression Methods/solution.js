/*
Two Regular Expression Methods

There are three methods (we exclude compile) that you can use with regular expression literals. Use these two methods to fix the code. One method returns a boolean if there is a match. The other method returns an iterator from a search.

Notes
Do not use the same method twice.
Do not use String methods that accept regular expresssions as arguments.

*/

function twoMethods() {
  let methodOne = /hello/.exec("hello")[0] === "hello";
  let methodTwo = /hello/.test("hello");
  return methodOne && methodTwo;
}
