/* PEDAC
Problem:
  - Write a program that can determine exact date of meeting
  Constructor input = month and year
  Determine meetup input = day of week and descriptor
    - day of Week = Monday, Tuesday, ....
    - descriptors = first, second, third, ....
    - Case insenstive
  Note:
    JS Date objects for months range from 0 Jan to 11 Dec
    You can determine the last day of the month by using 0 for date constructor

Examples n Test Cases:
  - See meetup.test.js
  class Meetup
    instance method of day -> returns date object
    Any helper functions
    use Date Object's toString method

Data Structures:
  - Date Objects and methods will be used

Algorithms:
  constructor:
  1. Save month and day as properties
  2. determine last day of month with new Date(year, month, 0)

  day(weekday, descriptor)
  1. convert weekday and descriptor to lowercase
  2. Execute specific search pattern depending on descriptor
    - start search from last day of month
    - start search from first day of month
    - start search from middle of month (for teenth)

  Helper functions:
    findLast()
      - Search from last day of month to 1st day to look for weekday
      - returns new date object once match is found

    findTeenth()
      - Search from 13th to 19th day of  month for weekday
      - Returns new date object once match is found

    findDay()
      - Search from 1st to last day of month for weekday
      - Use counter for how many weekdays we need to pass to get desired one
      - Return new date object
*/

"use strict"

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
    this.lastDayOfMonth = new Date(year, month, 0).getDate();
  }

  static weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  static schedule = ['first', 'second', 'third', 'fourth', 'fifth'];

  day(weekday, descriptor) {
    weekday = weekday.toLowerCase();
    descriptor = descriptor.toLowerCase();
    let counter;
    switch (descriptor) {
      case 'last':
        return this.findLast(weekday);
      case 'teenth':
        return this.findTeenth(weekday);
      default:
        counter = Meetup.schedule.indexOf(descriptor);
        return this.findDay(weekday, counter);
    }
  }

  findLast(weekday) {
    for (let day = this.lastDayOfMonth; day > 0; day--) {
      const date = new Date(this.year, this.month, day);
      const match = Meetup.weekdays[date.getDay()];
      console.log(day, match, date, weekday);
      if (match === weekday) {
        return date;
      }
    }
    return null;
  }

  findTeenth(weekday) {
    for (let day = 13; day <= 19; day++) {
      const date = new Date(this.year, this.month, day);
      const match = Meetup.weekdays[date.getDay()];
      if (match === weekday) {
        return date;
      }
    }
    return null;
  }

  findDay(weekday, counter) {
    for (let day = 1; day <= this.lastDayOfMonth; day++) {
      const date = new Date(this.year, this.month, day);
      const match = Meetup.weekdays[date.getDay()];
      if (match === weekday) {
        if (counter === 0) return date;
        counter -= 1;
      }
    }
    return null;
  }
}

let hi = new Meetup(2016, 8);
console.log(hi.day('Saturday', 'last'));
module.exports = Meetup;