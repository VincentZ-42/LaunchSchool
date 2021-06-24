/*
Write a function
- computes sum of all numbers between 1 and
- ... any multiples of 3 or 5 inclusively.

Steps
1. Get number
2. Set array of multiples of 3
3. Set array of multiples of 5
4. Set sum = reduced (array_3) + reduced (array_5)
*/

function multisum(num) {
  let MultOf3 = [];
  let MultOf5 = [];
  let sum = 0;
  const addAll = (accumulator, currentValue) => accumulator + currentValue;

  // Creates an array of multiples of 3 without overlap of 5
  // reduces the array and adds to sum
  if ((num / 3) > 0) {
    for (let iterator = 3; iterator <= num; iterator += 3) {
      if (iterator % 5 === 0) continue;
      MultOf3.push(iterator);
    }
    sum += MultOf3.reduce(addAll, 0);
  }

  // Creates array of multiples of 5
  // reducts array and adds to sum
  if ((num / 5) > 0) {
    for (let iterator = 5; iterator <= num; iterator += 5) {
      MultOf5.push(iterator);
    }
    sum += MultOf5.reduce(addAll, 0);
  }
  return sum;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(20));
console.log(multisum(1000));

/* Solution
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}
*/