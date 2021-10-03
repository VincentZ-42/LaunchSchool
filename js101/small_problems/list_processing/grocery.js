/* PEDAC
*/

function buyFruit(arr) {
  let ans = [];
  arr.forEach(item => {
    const fruit = item[0];
    let num = item[1];
    while (num > 0) {
      ans.push(fruit);
      num--;
    }
  });
  return ans;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]