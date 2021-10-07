/* eslint-disable id-length */
/* eslint-disable max-lines-per-function */

const print = (string) => console.log(string);
const readline = require('readline-sync');

let player = [];
let dealer = [];
let DECK = [];
let FRESH_DECK = [
  ['C', 'A'], ['H', 'A'], ['S', 'A'], ['D', 'A'],
  ['C', '2'], ['H', '2'], ['S', '2'], ['D', '2'],
  ['C', '3'], ['H', '3'], ['S', '3'], ['D', '3'],
  ['C', '4'], ['H', '4'], ['S', '4'], ['D', '4'],
  ['C', '5'], ['H', '5'], ['S', '5'], ['D', '5'],
  ['C', '6'], ['H', '6'], ['S', '6'], ['D', '6'],
  ['C', '7'], ['H', '7'], ['S', '7'], ['D', '7'],
  ['C', '8'], ['H', '8'], ['S', '8'], ['D', '8'],
  ['C', '9'], ['H', '9'], ['S', '9'], ['D', '9'],
  ['C', '10'], ['H', '10'], ['S', '10'], ['D', '10'],
  ['C', 'J'], ['H', 'J'], ['S', 'J'], ['D', 'J'],
  ['C', 'Q'], ['H', 'Q'], ['S', 'Q'], ['D', 'Q'],
  ['C', 'K'], ['H', 'K'], ['S', 'K'], ['D', 'K']
];

// Fisher-Yates shuffle
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
  return array;
}

function total(cards) {

  // Only pulls card value, not suit
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function dealStartHand() {
  player.push(DECK.pop());
  player.push(DECK.pop());
  dealer.push(DECK.pop());
  dealer.push(DECK.pop());
}

function clearHands() {
  player = [];
  dealer = [];
}

function joinOr(arr, delimiter = ',', ending = 'or') {
  let string = '';
  if (arr.length === 0) {
    return string;
  } else if (arr.length === 1) {
    string += arr[0];
  } else if (arr.length === 2) {
    string = `${arr[0]} ${ending} ${arr[1]}`;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      string += arr[i] + delimiter;
      if (arr[i + 1]) {
        string += ' ';
      }
    }
    if (arr.length >= 2) {
      string += ending + ' ' + arr[arr.length - 1];
    }
  }

  return string;
}

function displayCards(end = false) {
  console.clear();
  if (end) {
    print(`Dealer has: ${joinOr(dealer.map(card => card[1]), ',', 'and')}`);
    print(`You have: ${joinOr(player.map(card => card[1]), ',', 'and')}`);
  } else {
    print(`Dealer has: ${dealer[0][1]} and unknown card`);
    print(`You have: ${joinOr(player.map(card => card[1]), ',', 'and')}`);
  }
}

function busted() {
  if (total(player) > 21) return true;
  if (total(dealer) > 21) return true;
  return false;
}

function dealOne(person) {
  person.push(DECK.pop());
}
function compareCards() {
  const end = true;
  displayCards(end);
  if (total(player) === total(dealer)) {
    print('What a concidence. Tie!');
  } else if (total(player) > total(dealer)) {
    print('You win!');
  } else {
    print('Dealer wins!');
  }
}

/* PEDAC

---1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

*/

while (true) {
  DECK = shuffle(FRESH_DECK.slice());
  clearHands();
  dealStartHand();
  let end = false;

  // Player's Turn
  while (true) {
    displayCards();
    let answer = readline.question('hit or stay: ');
    if (answer === 'hit') dealOne(player);
    if (answer === 'stay' || busted()) break;
  }

  if (busted()) {
    displayCards(true);
    print('You busted! Dealer wins!');
    end = true;
  }

  if (!end) {
    // dealer's Turn
    while (total(dealer) < 17) {
      dealOne(dealer);
    }

    if (busted()) {
      displayCards(true);
      print('Dealer busted! You win!');
    } else {
      compareCards();
    }
  }

  let rematch = readline.question('Another one? (y or n): ').toLowerCase();
  while (!'yn'.includes(rematch)) {
    rematch = readline.question('Another one? (y or n): ').toLowerCase();
  }
  if (rematch === 'n') break;
}

