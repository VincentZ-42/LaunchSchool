/* eslint-disable indent */
/* PEDAC
*/

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, list) {
  return list.filter(element => element.id === id);
}

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

console.log('\n --- Part 2: Inventory Item Availability ---\n');

function isItemAvailable(id, list) {
  let quantity = 0;
  let transactions = transactionsFor(id, list);
  transactions.forEach(item => {
    if (item.movement === 'in') {
      quantity += item.quantity;
    } else {
      quantity -= item.quantity;
    }
  });
  return quantity > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

/* more elegant solution

function isItemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === "in") {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    },
    0
  );
  return quantity > 0;
}

*/
