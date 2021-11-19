let readline = require('readline-sync');
const print = string => console.log(string);

let Square = {
  UNUSED_SQUARE:   " ",
  HUMAN_MARKER:    "X",
  COMPUTER_MARKER: "O",

  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this;
  },

  toString() {
    return this.marker;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  },

  getMarker() {
    return this.marker;
  },
};

// let square = Object.create(Square).init();

// Convert Rest of Code below using OLOO Method

let Board = {
  init() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[counter] = Object.create(Square).init();
    }
    return this;
  },

  markSqaureAt(key, marker) {
    this.squares[key].setMarker(marker);
  },

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  },

  isFull() {
    let unusedSquares = this.unusedSquares();
    return unusedSquares.length === 0;
  },

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  },

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}

let Player = {
  init(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  }
}

let TTTGame = {
  POSSIBLE_WINNING_ROWS: [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ],

  init() {
    this.board = Object.create(Board).init();
    this.human = Object.create(Player).init(Square.HUMAN_MARKER);
    this.computer = Object.create(Player).init(Square.COMPUTER_MARKER);
    return this;
  },


  joinOr(arr, delimiter = ',', last = 'and') {
    let output = '';
    for (let index = 0; index < arr.length; index++) {
      if (index === arr.length - 1) {
        output += `${delimiter} ${last} ${arr[index]}`
      } else if (index === 0) {
        output += arr[index];
      } else {
        output += `${delimiter} ${arr[index]}`;
      }
    }
    return output;
  },

  play() {
    //SPIKE
    console.clear();
    this.displayWelcomeMessage();

    while (true) {
      if (this.board.unusedSquares().length !== 9) {
        console.clear();
        print('\n');
      }
      this.board.display();

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  },

  humanMoves() { // was firstPlayerMoves
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${this.joinOr(validChoices, ', ', 'or')}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSqaureAt(choice, this.human.getMarker());
  },

  computerMoves() { // was secondPlayerMoves
    let validChoices = this.board.unusedSquares();

    let choice;
    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSqaureAt(choice, this.computer.getMarker());
  },

  displayWelcomeMessage() {
    print('Welcome to Tic Tac Toe!');
  },

  displayGoodbyeMessage() {
    print('Thanks for playing Tic Tac Toe! Goodbye!');
  },

  displayResults() {
    this.board.display();
    if (this.isWinner(this.human)) {
      print('You won! Congratulations!');
    } else if (this.isWinner(this.computer)) {
      print('I won! I won! Take that, human!');
    } else {
      print('A tie game. How boring');
    }
  },

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  },

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },
}

while (true) {
  let game = Object.create(TTTGame).init();
  game.play();

  let again = readline.question('Play again? (y or n): ');
  while (true) {
    if (['y', 'n'].includes(again)) {
      break;
    } else {
      again = readline.question('Play again? (y or n): ');
    }
  }

  if (again === 'n') break;
}