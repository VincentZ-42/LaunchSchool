let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produce) {
  const fruits = {};
  const keys = Object.keys(produce);
  keys.forEach(item => {
    if (produce[item] === 'Fruit') {
      fruits[item] = produce[item];
    }
  });
  return fruits;
}

console.log(selectFruit(produce));