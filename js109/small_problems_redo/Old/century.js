/* eslint-disable max-len */
/* PEDAC
  Input: Integer (year)
  Output: String (Century)
  Rules:
  - every 11th, 12th, and 13th term is special for th
  - 1st, 2nd, 3rd, 4-10 are th
  - New newcturies being in years 01

  Examples: 1901 - 2000 is 20th century


Data Structure n Algorithm
  1. Create empty string
  2. Take input / 100 to get approximate century name
  2. Take number % 100 to get previous or next century
    - If > 1, + 1
    - If 00, do nothing
  3. If else statements, look at number last 2 digits
  - If 11, 12, 13 - Add th
  - If 1 - Add st
  - if 2 - Add nd
  - if 3 - Add rd
  4. Return century
*/

function century(year) {
  let century = Math.floor((year / 100));
  if (year % 100 > 0) {
    century += 1;
  }
  century = String(century);
  if (['11', '12', '13'].includes(century.slice(-2))) {
    century += 'th';
  } else if (century.slice(-1) === '1') {
    century += 'st';
  } else if (century.slice(-1) === '2') {
    century += 'nd';
  } else if (century.slice(-1) === '3') {
    century += 'rd';
  } else {
    century += 'th';
  }
  return century;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"