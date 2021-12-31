/* Ques 2
Output:
undefined
Hello
Bye
2
*/

function foo(condition) {
  let bar = 24;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

console.log('\nQestion 6\n');

let Image;
let carImage;
let pudding;

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);