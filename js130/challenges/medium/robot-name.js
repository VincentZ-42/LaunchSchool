/* PEDAC
Problem:
  - Write a program that manges robot factory settings
  - Random robot name is generated: 2 letters, followed by 3 numbers
  - Should not have duplicate robot names

Examples n Test Cases
  - See robot-name.test.js
  - Class Robot
  - 2 instance methods: name() and reset()

Data Structures
  - String manipulation
  - Use of seedrandom
  - Maybe array to hold all previous names

Algorithm
  class Robot
    static collection of all names generated

    constructor()
      - Generate name that has not been created before
      - Set that name to instance prop name

    instance method: generateName()
    1. create a name variable to hold string
    2. append two capital letters to string
    3. append three numbers to string
    4. return name

    instance method: name()
    1. outputs name of instance

    instance method: reset()
    0. Remove the current name from collection of names in use
    1. sets instance name to a new name
    2. Do this by running generate Name function

    Helper method: randomLetter()
    1. Returns a random capital letter from alphabet

    Helper method: randomNumber()
    1. returns a random number from 0-9
*/

class Robot {
  static namesInUse = [];

  constructor() {
    this.id = this.generateName();
    while (Robot.namesInUse.includes(this.id)) {
      this.id = this.generateName();
    }
    Robot.namesInUse.push(this.id);
  }

  generateName() {
    let id = '';
    for (let count = 0; count < 5; count++) {
      if (count < 2) {
        id += this.randomLetter();
      } else {
        id += this.randomNumber();
      }
    }
    return id;

  }

  name() {
    return this.id;
  }

  reset() {
    let index = Robot.namesInUse.indexOf(this.id);
    Robot.namesInUse.splice(index, 1);
    this.id = this.generateName();
    while (Robot.namesInUse.includes(this.id)) {
      this.id = this.generateName();
    }
    Robot.namesInUse.push(this.id);
  }

  randomLetter() {
    let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = Math.floor(Math.random() * 26);
    return letter[index];
  }

  randomNumber() {
    let number = '0123456789';
    let index = Math.floor(Math.random() * 10);
    return number[index];
  }
}

let a1 = new Robot();
let a2 = new Robot();
let a3 = new Robot();  
let a4 = new Robot();
console.log(Robot.namesInUse);
a3.reset();
a4.reset();
console.log(Robot.namesInUse);
console.log(a1.name(), a2.name(), a3.name(), a4.name());
module.exports = Robot;