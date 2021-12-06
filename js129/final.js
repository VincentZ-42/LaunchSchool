class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class FullTimer extends Employee {
  constructor(name, id) {
    super(name, id);
    this.daysOff;
  }

  takeVacation() {
    return 'relaxing';
  }
}

class PartTimer extends Employee {
  constructor(name, id) {
    super(name, id);
    this.deskLocation = 'Open workspace';
  }
}

class Manager extends FullTimer {
  constructor(name, id) {
    super(name, id);
    this.daysOff = 14;
    this.workLocation = 'Private office';
  }

  delegate() {
    return 'delegate';
  }
}

class Executive extends Manager {
  constructor(name, id) {
    super(name, id);
    this.daysOff = 20;
    this.workLocation = 'Corner office';
  }

  hire() {}
  fire() {}
}

class Regular extends FullTimer {
  constructor(name, id) {
    super(name, id, 'cubicle', 10);
  }
}

class EmployeeApp {
  constructor() {
    this.list = [];
  }

  // code for how to interact with data
}

let bill = new Manager('Bill', '1234');
let mike = new Executive('mike', '4123');
let harry = new Regular('harry', '12');
let tom = new PartTimer('tom', '1');
console.log(bill, mike, harry, tom);
console.log(bill.delegate());
console.log(bill.takeVacation());
console.log((bill instanceof Manager) === true);
console.log((bill instanceof Employee) === true);
console.log((bill instanceof FullTimer) === true);
console.log((bill instanceof PartTimer) === false);
console.log((mike instanceof Manager)) === true;
console.log((mike instanceof Employee) === true);
console.log((mike instanceof Executive) === true);
console.log((mike instanceof FullTimer) === true);
console.log((mike instanceof PartTimer) === false);
console.log((harry instanceof FullTimer) === true);
console.log((harry instanceof Employee) === true);
console.log((harry instanceof Manager) === false);
console.log((tom instanceof Manager) === false);
console.log((tom instanceof Employee) === true);
console.log((tom instanceof FullTimer) === false);
console.log((tom instanceof PartTimer) === true);
