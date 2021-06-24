/*
Write a function that takes any year greater than 0 as input
- returns true if year is leap year
- false if not a leap year
Assumptions
- leap year = any year / 4 unless also / 100
- leap year = any year / 100 && / 400
- Part 2: before 1752, leap years / 4
*/

function isLeapYear(year) {
  if (year > 1752) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return year % 4 === 0;
  }
}

// test cases
console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));

/*
Solution Part 1
function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}
*/