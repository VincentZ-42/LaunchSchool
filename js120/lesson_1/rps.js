const readline = require('readline-sync');
const print = string => console.log(string);

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
      this.allMoves.push(choice);
    }
  };
  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
      this.allMoves.push(this.move);
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createPlayer() {
  return {
    move: null,
    score: 0,
    allMoves: [],
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    print(`You chose: ${humanMove}`);
    print(`The computer chose: ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      print('You win!');
      this.human.score += 1;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      print('Computer wins!');
      this.computer.score += 1;
    } else {
      print("It's a tie");
    }
  },

  playAgain() {
    print('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  displayStats() {
    print(`Human score: ${this.human.score}`);
    print(`Computer score: ${this.computer.score}`);
    print(`Human move history: ${this.human.allMoves}`);
    print(`Computer move history: ${this.computer.allMoves}`);
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.displayStats();
      if (this.human.score === 5 || this.computer.score === 5) break;
    }
    this.displayGoodbyeMessage();
  }
};

RPSGame.play();