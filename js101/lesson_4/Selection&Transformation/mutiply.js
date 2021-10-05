function mutiply(numList, num) {
  const newList = [];
  numList.forEach(element => {
    newList.push(element * num);
  });
  return newList;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(myNumbers);
console.log(mutiply(myNumbers, 3));