const print = (string) => console.log(string);

print('Part 1');

function isLeapYear(year) {
  if (year < 1752) {
    if (year % 4 === 0) return true;
  } else {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        }
        return false;
      }
      return true;
    }
    return false;
  }
  return false;
}
print(isLeapYear(2016));      // true
print(isLeapYear(2015));      // false
print(isLeapYear(2100));      // false
print(isLeapYear(2400));      // true
print(isLeapYear(240000));    // true
print(isLeapYear(240001));    // false
print(isLeapYear(2000));      // true
print(isLeapYear(1900));      // false
print(isLeapYear(1752));      // true
print(isLeapYear(1700));      // false
print(isLeapYear(1));         // false
print(isLeapYear(100));       // false
print(isLeapYear(400));       // true