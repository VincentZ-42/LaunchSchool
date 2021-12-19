function forEach(array, callback, thisArg = this) {
  for (let i = 0; i < array.length; i++) {
    callback.call(thisArg, array[i], i, array);
  }
}

// let arr = [1, 2, 3, 4];
// forEach(arr, value => console.log(value * value));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem);

forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);