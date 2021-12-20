function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

class Image {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);