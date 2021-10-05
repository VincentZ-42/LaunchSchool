/* PEDAC
  Input: Integer (Year)
  Output: Integer (# of Friday the 13th)
  Rules:
    Year > 1752
    Gregorian Calendar

  Algorithim
  1. Iterate over all the months of the given year.
  2. For each month, get the day that falls on the 13th.
  3. Count the 13ths that fall on a Friday.
  4. Return the count.
*/

const print = (string) => console.log(string);

function fridayThe13ths(year) {
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let count = 0;

  MONTHS.forEach(month => {
    const date = new Date(`${month} 13, ${year}`);
    if (DAYS[date.getDay()] === 'Friday') {
      count += 1;
    }
  });
  return count;
}

print(fridayThe13ths(2021));      // 1
print(fridayThe13ths(1986));      // 1
print(fridayThe13ths(2015));      // 3
print(fridayThe13ths(2017));      // 2

/* More elegant solution

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}

*/