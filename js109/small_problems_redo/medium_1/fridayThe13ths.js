/* PEDAC
  Problem: Write a function counts the number of Friday the 13ths in certain year
  Input: Year
  Output: Integer value of Friday the 13ths
  Rules:
  - Input year is always > 1752
  - Future years will always use Gregorian Calendar
  
Algorithm
  1. Iterate through a year (12 months) counting the number of Friday the 13ths
    - Create count varible to store count
*/

function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) count += 1;
  }
  return count;
};


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
