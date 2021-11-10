const print = string => console.log(string);
const question = num => console.log(`\n--- Question ${num} ---\n`);

question(3);

const PI = 3.14;

function Circle(radius) {
  this.radius = radius;
};

Circle.prototype.area = function () {
  return PI * this.radius**2;
};

let a = new Circle(3);
let b = new Circle(4);

print(a.area().toFixed(2)); // => 28.27
print(b.area().toFixed(2)); // => 50.27
print(a.hasOwnProperty('area')); // => false

question(6);

// function Ninja() {
//   this.swung = false;
// }

// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object
// Ninja.prototype.swing = function() {
//   this.swung = !this.swung;
//   return this;
// };

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`

question(7);

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
// let ninjaB = Object.create(ninjaA);
let ninjaB = new ninjaA.constructor; // better way


print(ninjaA.constructor === ninjaB.constructor) // => true

question(8);

function User(first, last) {
  // ...
  this.name = first + ' ' + last;
  return this;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe