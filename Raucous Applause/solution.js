/*
Raucous Applause

After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

Given a string of what the overlapping claps sounded like, return how many claps were made in total.

Examples
countClaps("ClaClaClaClap!") ➞ 4

countClaps("ClClClaClaClaClap!") ➞ 6

countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9
Notes
Each clap starts with a capital "C".

*/

function countClaps(txt) {
  let regex = /[c]/gi;
  const found = txt.match(regex);
  return found.length;
}
