// const print = (...string) => console.log(...string);
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
  if (time === "00:00" || time === "24:00") return 0;
  let [ hours, minutes ] = time.split(':').map(num => Number(num));
  while (hours > 0) {
    minutes += 60;
    hours -= 1;
  }
  return minutes;
}

function beforeMidnight(time) {
  if (time === "00:00" || time === "24:00") return 0;
  let [ hours, minutes ] = time.split(':').map(num => Number(num));

  // porper sets hours
  if (minutes > 0) {
    hours = 24 - hours - 1;
  }

  // proper sets minutes
  minutes = 60 - minutes;

  while (hours > 0) {
    minutes += 60;
    hours -= 1;
  }
  return minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

/* More elegant solution
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}
*/