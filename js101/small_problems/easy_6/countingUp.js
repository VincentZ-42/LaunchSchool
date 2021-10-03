const print = (str) => console.log(str);

function sequence(num) {
  let arr = [];
  do {
    arr.unshift(num);
    num--;
  } while (num > 0);

  return arr;
}

print(sequence(5));    // [1, 2, 3, 4, 5]
print(sequence(3));    // [1, 2, 3]
print(sequence(1));    // [1]