const print = (...string) => console.log(...string);
const line = (string) => console.log('-'.repeat(6) + ' ' + string + ' ' + '-'.repeat(6));

line('Part 1');
/* PEDAC
P - Understand the Problem
  Input: Integer (+ or - representing minutes before/after midnight)
  Output: String in 24 hour time format
E - Examples n Test Cases
  console.log(timeOfDay(0) === "00:00");
  console.log(timeOfDay(-3) === "23:57");
D - Data Structure
A - Algorithim
C - Code
*/

function timeOfDay(minutes) {
  let time = new Date(0, 0, 0, 0, minutes);
  let hours = time.getHours();
  let mins = time.getMinutes();
  return `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

line('Part 2');
// NOT ALLOWED TO USE DATE CLASS METHODS

function afterMidnight(time) {
  const [ hours, minutes ] = time.split(':').map(num => Number(num));

}

function beforeMidnight(time) {
  const [ hours, minutes ] = time.split(':').map(num => Number(num));
  print(hours, minutes);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);