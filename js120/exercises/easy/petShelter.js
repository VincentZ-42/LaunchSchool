class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {
  constructor() {
    this.owners = [];
    this.pets = [];
  }

  addPet(...animal) {
    animal.forEach(pet => {
      this.pets.push(pet);
    });
  }

  remove(pet) {
    let index = this.pets.indexOf(pet);
    this.pets.splice(index, 1);
  }

  adopt(owner, pet) {
    owner.pets.push(pet);
    this.remove(pet);  
    if (!this.owners.includes(owner)) {
      this.owners.push(owner);
    }
  }

  printAdoptions() {
    this.owners.forEach(owner => {
      console.log(`${owner.name} has adopted the following pets:`);
      owner.pets.forEach(pet => {
        console.log(`a ${pet.type} named ${pet.name}`);
      });
      console.log('\n');
    });
  }

  printAvailablePets() {
    console.log(`The Animal shelter has ${this.pets.length} unadopted pets.`);
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');
let brian        = new Pet('dog', 'brian');
let sandy        = new Pet('squirrel', 'sandy');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.addPet(butterscotch, pudding, darwin, kennedy, sweetie, molly, chester, brian, sandy);
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
shelter.printAvailablePets();