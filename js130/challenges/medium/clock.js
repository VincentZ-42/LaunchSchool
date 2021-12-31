/* PEDAC
Problem:
  - Create a clock that is independent of date
  - Should be able to add and subtract minutes
  - two clock objects with same time are equal to each other
  Rules:
  - Can not use built-in date or time functionality

Examples n Test Cases:
  - class Clock
    - constructor(hours, mins)
  - static class methods:
    at(hours, minutes) -> returns a clock object
      - Default for minutes is 0

  - instance methods:
    add() -> returns new clock object after addition
    subtract() -> returns new clock object after subtraction
    toString() -> returns string representation of time form clock
    isEqual() -> compares the time between two clock objects

Data Structures:
  - Number and string manipulation

Algorithm:
  constructor()
    - Takes input of hours and minutes
    - Sets these as property of new object
    - default value for minutes is 0

  static method:
    at(hour, min)
      - Creates a new clock object using the hour and min input

  instance method:
    add(mins)
      1. Create variable to see how many hours to add
        - Use % 60 for calculation
      2. Create variable to see how many mins to add
        - Use / 60 for calculation
      3. Add hours and mins to clock's properties
      4. Use helper function to update clock time to proper format

    subtract(mins)
      1. Create variable to see how many hours to add
        - Use % 60 for calculation
      2. Create variable to see how many mins to add
        - Use / 60 for calculation
      3. Subtract hours and mins to clock's properties
      4. Use helper function to update clock time to proper format

    toString()
      - return a  string literal with hours and minutes included
      - return `hour:minute`

    isEqual(clock object)
      - return comparison of this clock time with input clock time
      - return obj1.toString === obj2.toString;

    helper method: updateTime()
      - Adjust hours property to fall within range of 0-24
      - Adjust mins property to fall within range of 0-60
*/

class Clock {
  constructor(hours, mins = 0) {
    this.hours = hours;
    this.mins = mins;
    this.properFormat();
  }

  static at(hours, mins) {
    return new Clock(hours, mins);
  }

  properFormat(hours, mins) {
    while (mins >= 60) {
      hours += 1;
      mins -= 60;
    }
    while (mins < 0) {
      hours -= 1;
      mins += 60;
    }
    while (hours >= 24) {
      hours -= 24;
    }
    while (hours < 0) {
      hours += 24;
    }
    return [hours, mins];
  }

  add(time) {
    let hr = this.hours + Math.floor(time / 60);
    let min = this.mins + (time % 60);
    [hr, min] = this.properFormat(hr, min);
    return new Clock(hr, min);
  }

  subtract(time) {
    let hr = this.hours - Math.floor(time / 60);
    let min = this.mins - (time % 60);
    [hr, min] = this.properFormat(hr, min);
    return new Clock(hr, min);
  }

  toString() {
    const HH = String(this.hours).padStart(2, '0');
    const MM = String(this.mins).padStart(2, '0');
    return `${HH}:${MM}`;
  }

  isEqual(obj) {
    return this.toString() === obj.toString();
  }
}

let time = Clock.at(11, 30);
let time2 = Clock.at(11, 30);
console.log(time.isEqual(time2));
console.log(time.add(45).toString());
console.log(Clock.at(23, 45).add(60));
console.log(Clock.at(1, 10).subtract(100));
module.exports = Clock;