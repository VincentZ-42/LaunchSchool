/* PEDAC
  Too simple for PEDAC
*/

function digitList(number) {
  return String(number).split('').map(num => Number(num));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));