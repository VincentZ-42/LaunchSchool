/* PEDAC
P - Understand the Problem
  Input: Integer (year)
  Output: String that beings with number
  Rules:
    New centures begin in years that end with 01
    1901 - 2000 -> 20th century
    implicit: years from 10-20 end with th

  Questions:
    How do we handle BC?
    What if year is 0?

E - Examples n Test Cases
  century(2000);        // "20th"
  century(2001);        // "21st"
  century(1965);        // "20th"
  century(256);         // "3rd"

D - Data Strutures
  Variables n if-else statement

A - Algorithim
  1. Find out what 2 century choices from input
  2. Determine what century we're in
  3. Add number to corresponding 'st', 'nd', 'rd', or 'th'

C - Code
  Below
*/

// eslint-disable-next-line max-lines-per-function
function addCenturyEnding(century) {
  while (century > 110) {
    century /= 10;
  }
  if (century > 10 && century < 20) {
    century += 'th';
  } else {
    switch (century % 10) {
      case 1:
        century += 'st';
        break;
      case 2:
        century += 'nd';
        break;
      case 3:
        century += 'rd';
        break;
      default:
        century += 'th';
    }
  }
  return century;
}

function century(year) {
  // Determine century choices
  const choiceA = Math.floor(year / 100);
  const choiceB = choiceA + 1;

  // Determine Century we're in
  let century = year % 100 >= 1 ? choiceB : choiceA;

  //Add number to st, nd, rd, or th
  century = addCenturyEnding(century);

  return (century);
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
console.log(century(1122135465301));

// Solution
// function century(year) {
//   let centuryNumber = Math.floor(year / 100) + 1;

//   if (year % 100 === 0) {
//     centuryNumber -= 1;
//   }

//   return String(centuryNumber) + centurySuffix(centuryNumber);
// }

// function centurySuffix(centuryNumber) {
//   if (catchWithTh(centuryNumber % 100)) {
//     return 'th';
//   }

//   let lastDigit = centuryNumber % 10;
//   switch (lastDigit) {
//     case 1: return 'st';
//     case 2: return 'nd';
//     case 3: return 'rd';
//     default: return 'th';
//   }
// }

// function catchWithTh(lastTwo) {
//   return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
// }