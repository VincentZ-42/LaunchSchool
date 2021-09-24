/* eslint-disable no-useless-escape */
/* eslint-disable id-length */
/* PEDAC
P - Understand the Problem
  Input: Floating point number ( Between 0 n 360 )
  Output: String (Containing degrees, minuges, and seconds)

  Rules:
    60 minutes in a degree, and 60 seconds in a minute
    Output should be within 1-2 second accurate

E - Examples n Test cases
  dms(30);           // 30°00'00"
  dms(76.73);        // 76°43'48"
  dms(254.6);        // 254°35'59"
  dms(93.034773);    // 93°02'05"
  dms(0);            // 0°00'00"
  dms(360);          // 360°00'00" or 0°00'00"

D - Data Structure
  1. Create an empty String
  2. Split integer from floating point number
  3. Mutiple decimal by 60 to get minutes
  4. Repeat 2 n 3 for seconds

A - Algorithim


C - Code
*/

const DEG = "\u00B0";
const MIN = "\'";
const SEC = "\"";

function dms(deg) {
  let ans = [];
  let calcHolder = '';

  for (let i = 0; i < 3; i++) {
    calcHolder = deg.toString().split('.');

    if (calcHolder.length < 2 && i > 0) {
      ans.push('00');
    } else {
      ans.push(calcHolder[0] < 10 ? '0' + calcHolder[0] : calcHolder[0]);
    }

    deg = Number('.' + calcHolder[1]) * 60;
  }

  return `${ans[0]}${DEG}${ans[1]}${MIN}${ans[2]}${SEC}`;
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));