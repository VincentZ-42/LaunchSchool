// Print the even numbers from array

// Question 2
// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
// myArray.forEach( num => (num % 2 === 0) ? console.log(num) : 0);
// Question 4
// console.log(myArray.map( num => (num % 2 === 0) ? 'even' : 'odd'));


// Question 3
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < myArray[i].length; j++) {
//     if (myArray[i][j] % 2 === 0) {
//       console.log(myArray[i][j]);
//     }
//   }
// }

// Question 5
// function findIntegers(arr) {
//   return arr.filter(element => Number.isInteger(element));
// }

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// console.log(findIntegers(things));

// // Question 6
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// function oddLengths(arr) {
//   let retArray = arr.map(function(element) {
//     return element.length;
//   });
//   return retArray.filter(num => num % 2 !== 0);
// }
// console.log(oddLengths(arr));
// Question 8
function oddLengths(arr) {
  return arr.reduce((numArray, word) => {
    if (word.length % 2 === 1) {
      numArray.push(word.length);
    }

    return numArray;
  }, []);
}
console.log(oddLengths(arr));

// Question 7
// let array = [3, 5, 7];
// const reducer = (acc, cur) => acc + cur * cur;
// function sumOfSquares(array) {
//   return array.reduce(reducer, 0);
// }
// console.log(sumOfSquares(array));