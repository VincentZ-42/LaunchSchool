// Object Creation using Factories

function createPet(animal, name) {
  return {
    animal,
    name,
    
    sleep() {
      console.log('I am sleeping');
    },

    wake() {
      console.log('I am awake');
    }
  }
}

let pudding1 = createPet("Cat", "Pudding");
console.log(`I am a ${pudding1.animal}. My name is ${pudding1.name}.`);
pudding1.sleep(); // I am sleeping
pudding1.wake();  // I am awake

let neptune1 = createPet("Fish", "Neptune");
console.log(`I am a ${neptune1.animal}. My name is ${neptune1.name}.`);
neptune1.sleep(); // I am sleeping
neptune1.wake();  // I am awake

console.log('\n --- With OLOO ---');

// Object Creation using OLOO - Object linking other objects

let PetPrototype = {
  init: function(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  sleep: function() {
    console.log('I am sleeping');
  },

  wake: function() {
    console.log('I am awake');
  }
};

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake