const print = string => console.log(string);

class Greeting {
  greet(message) {
    print(message);
  }
}

class Hello extends Greeintg {
  hi() {
    this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet('Goodbye');
  }
}

