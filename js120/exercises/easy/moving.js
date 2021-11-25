class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }

  walk() {
    return `${this.name} ${this.gait()} foward`
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }

  walk() {
    return `${this.name} ${this.gait()} foward`
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }

  walk() {
    return `${this.name} ${this.gait()} foward`
  }
}

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

// Better Solution is to use a Mixin
// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// };

// class Person {
//   // omitted code
// }

// Object.assign(Person.prototype, walkMixin);

// // omitted code