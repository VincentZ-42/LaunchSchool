class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

let walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
}

let kitty = new Cat("Sophie");
Object.assign(kitty, walkMixin);
console.log(kitty.greet());
console.log(kitty.walk());