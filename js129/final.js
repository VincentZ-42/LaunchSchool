class Employee {
  constructor(name, id, workLocation, vacationDays, fullTimeStatus = true) {
    this.name = name;
    this.id = id;
    this.workLocation = workLocation;
    this.vacationDays = vacationDays;
    this.fullTimeStatus = fullTimeStatus;
  }
}

class Executive extends Employee {
  constructor(name, id) {
    super(name, id, 'corner office', 20);
  }

  hire() {}
  fire() {}
}

class Manager extends Employee {
  constructor(name, id) {
    super(name, id, 'private office', 14);
  }

  delegate() {
    return 'delegate';
  }
}

class Regular extends Employee {
  constructor(name, id) {
    super(name, id, 'cubicle', 10);
  }
}

class PartTimer extends Employee {
  constructor(name, id) {
    super(name, id, 'open workspace', 0, false);
  }
}

// Use of mixin to add takeVacation method to all employess except partTimer
const relax = {
  takeVacation() {
    return 'relaxing';
  }
}

Object.assign(Executive.prototype, relax);
Object.assign(Manager.prototype, relax);
Object.assign(Regular.prototype, relax);

class EmployeeApp {
  constructor() {
    this.list = [];
  }
}


let bill = new Manager('Bill', '1234');
let mike = new Executive('mike', '4123');
let harry = new Regular('harry', '12');
let tom = new PartTimer('tom', '1');
console.log(bill, mike, harry, tom);
console.log(bill.delegate());
console.log(mike.hire());
console.log(mike.fire());
console.log(bill.takeVacation());
console.log(tom.takeVacation());