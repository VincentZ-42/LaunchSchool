class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  rename(name) {
    this.name = name;
  }
}

let kitty = new Cat("Sophie");
kitty.greet();
console.log(kitty.name);
kitty.rename('Chloe');
console.log(kitty.name);