/*
Hot Pics of Danny DeVito!

I'm trying to watch some lectures to study for my next exam but I keep getting distracted 
by meme compilations, vine compilations, anime, and more on my favorite video platform.

Your job is to help me create a function that takes a string and checks to see 
if it contains the following words or phrases:

"anime"
"meme"
"vines"
"roasts"
"Danny DeVito"
If it does, return "NO!". Otherwise, return "Safe watching!".

Examples
preventDistractions("vines that butter my eggroll") ➞ "NO!"

preventDistractions("Hot pictures of Danny DeVito") ➞ "NO!"

preventDistractions("How to ace BC Calculus in 5 Easy Steps") ➞ "Safe watching!"
Notes
N/A
*/

function preventDistractions(str) {
  const regex = /anime|anime|meme|vine|roasts|Danny DeVito/gm;
  if (regex.test(str) === true) {
    return "NO!";
  } else {
    return "Safe watching!";
  }
}

console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps"));
