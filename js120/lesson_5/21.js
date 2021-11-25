const readline = require('readline-sync');

class Deck {
  constructor() {
    //STUB
    // What sort of state does a deck need?
    // 52 Cards?
    // obviously, we need some data structure to keep track of cards
    // array, object, something else?
    this.cards = this.reset();
  }

  deal() {
    // If we run out of cards in the deck
    if (this.cards.length < 1) {
      this.cards = this.reset();
    }

    return this.cards.pop();
  }

  shuffle() {
    let cards = this.cards;
    for (let index = cards.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1));
      [cards[index], cards[otherIndex]] = [cards[otherIndex], cards[index]];
    }
  }

  reset() {
    return [
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
  }
}

class Participant {
  constructor(money) {
    //STUB
    // What sort of state does a participant need?
    // Score? Hand? Amount of money available?
    // What else goes here? all the redundant behaviors from Player and Dealer?
    this.money = money,
    this.cards = [],
    this.score = 0;
  }
}

class Player extends Participant {
  constructor(money) {
    //STUB
    // What sort of state does a player need?
    // Score? Hand? Amount of money available?
    super(money);
  }

  hit(card) {
    this.cards.push(card);
    this.updateScore();
  }

  win() {
    console.log('Winner Winner Chicken Dinner! YeeeeeeeeHAAaaaaaa!');
    this.money += 1;
  }

  lose() {
    console.log('You suck, loser. hahahahaha');
    this.money -= 1;
  }

  show() {
    return this.cards.map(cards => cards[1]);
  }

  hide() {
    return [this.cards[0][1], 'unknown card'];
  }
  isBusted() {
    return this.score > 21 ? true : false;
  }

  updateScore() {
    // Only pulls card value, not suit
    let values = this.cards.map(card => card[1]);
    this.score = 0;

    values.forEach(value => {
      if (value === 'A') {
        this.score += 11;
      } else if (['J', 'Q', 'K'].includes(value)) {
        this.score += 10;
      } else {
        this.score += parseInt(value, 10);
      }
    });

    // correct for Aces
    values.filter(value => value === 'A').forEach(_ => {
      if (this.score > 21) this.score -= 10;
    });
  }
}

class TwentyOneGame {
  constructor() {
    //STUB
    // What sort of state does the game need?
    // A deck? Two participants?
    this.deck = new Deck();
    this.player = new Player(5);
    this.dealer = new Player(5);
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    while (this.player.money > 0) {
      this.resetHands();
      this.dealCards();
      this.showCards();
      this.playerTurn();
      this.dealerTurn();
      this.displayResult();
      if (this.player.money === 10) {
        console.log('Sir, you have won too much, we have to talk you to the back room');
        break;
      }
    }
    this.displayGoodbyeMessage();
  }

  resetHands() {
    const pause = readline.question('Press enter to continue playing.');
    console.clear();
    console.log(`--You have $${this.player.money} Dollars.--`);
    this.player.cards = [];
    this.dealer.cards = [];
  }

  dealCards() {
    this.deck.shuffle();
    for (let count = 2; count > 0; count--) {
      this.player.hit(this.deck.deal());
      this.dealer.hit(this.deck.deal());
    }
  }

  showCards() {
    console.log(`Dealer has ${this.joinOr(this.dealer.hide(), ',', 'and')}.`);
    console.log(`You have ${this.joinOr(this.player.show(), ',', 'and')}`);
  }

  playerTurn() {
    let choice;
    while (true) {
      choice = readline.question('What would you like to do? (hit or stay): ').toLowerCase();
      if (choice === 'hit') this.player.hit(this.deck.deal());
      if (choice === 'stay' || this.player.isBusted()) break;
      console.log(`You now have ${this.joinOr(this.player.show())}`);
    }
  }

  dealerTurn() {
    if (this.dealer.score < 17) {
      while (this.dealer.score < 17) {
        this.dealer.hit(this.deck.deal());
      }
    }
  }

  displayWelcomeMessage() {
    console.log("Welcome to Blackjack!");
    console.log('--Instructions--')
    console.log('--If you beat the dealer, you earn $1, If you lose or bust, you lose $1--');
  }

  displayGoodbyeMessage() {
    console.log('You lost all your money!')
    console.log('Thanks for playing. Goodbye!');
  }

  displayResult() {
    console.log(`Dealer has ${this.joinOr(this.dealer.show(), ',', 'and')}. Total = ${this.dealer.score}.`);
    console.log(`You have ${this.joinOr(this.player.show(), ',', 'and')}. Total = ${this.player.score}.`);
    // Who wins here?
    if (this.player.isBusted() || (this.dealer.score > this.player.score) && !this.dealer.isBusted()) {
      this.player.lose();
    } else if (this.player.score === this.dealer.score) {
      console.log("It's a tie. Nobody wins, but also nobody loses");
    } else if (this.dealer.isBusted() || (this.player.score > this.dealer.score) && !this.player.isBusted()) {
      this.player.win();
    }
  }

  joinOr(arr, delimiter = ',', ending = 'or') {
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
}

let game = new TwentyOneGame();
game.start();