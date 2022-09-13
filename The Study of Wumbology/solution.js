/*
The Study of Wumbology

Create a function that flips M's to W's (all uppercase).

Examples
wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"

wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"

wumbo("WUMBOLOGY") ➞ "WUWBOLOGY"

*/

function wumbo(words) {
  const regex = /[M]/g;
  return words.replace(regex, "W");
}
