/* PEDAC
*/

function multiplyList(arr1, arr2) {
  for (let index = 0; index < arr1.length; index++) {
    arr1[index] *= arr2[index];
  }
  return arr1;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));