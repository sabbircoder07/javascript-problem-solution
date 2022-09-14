/*
Owofied a Sentence

Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

Examples
owofied("I'm gonna ride 'til I can't no more")
➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

owofied("Do you ever feel like a plastic bag")
➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

owofied("Cause baby you're a firework")
➞ "Causwe baby you'rwe a fwirwework owo"
Notes
Don't forget to return the value!
There's a space in front of owo!
*/

function owofied(sentence) {
  const regex = /[i]/g;
  const regex1 = /[e]/g;
  let myFirstSentence = sentence.replace(regex, "wi");
  let myFinalSentance = myFirstSentence.replace(regex1, "we");
  return myFinalSentance + " " + "owo";
}

console.log(owofied("Do you ever feel like a plastic bag"));
