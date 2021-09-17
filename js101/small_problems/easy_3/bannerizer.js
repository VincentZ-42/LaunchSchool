/* PEDAC
P = Understand the Problem
  Write a function that will take a short line of text,
  and write it to the console within a box
E = Examples n Test Cases
D = Data Structures
A = Algorithm
  1. Find length of text
  2. use that length to determine width of box
  3. create box...
C = Code
*/

function logInBox(text) {
  console.log(`+-${"-".repeat(text.length)}-+`);
  console.log(`| ${" ".repeat(text.length)} |`);
  console.log(`| ${text} |`);
  console.log(`| ${" ".repeat(text.length)} |`);
  console.log(`+-${"-".repeat(text.length)}-+`);
}

logInBox('To bodly go where no one has gone before.');
logInBox('');