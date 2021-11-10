const question = num => console.log(`\n--- Question ${num} ---\n`);
const print = string => console.log(print);

const Animal = function(species) {
  this.species = species;
  return species;
};

Animal.prototype.sleep = function() {
  console.log(`The ${this.species} is sleeping`);
};

let lion = new Animal('Panthera leo');
lion.sleep(); // TypeError

question(5);

let arr1 = new Array(1, 2, 3);
let arr2 = Array(1, 2, 3);

console.log(arr1 === arr2); // => false
print(arr1.prototype);
print(arr2.prototype);