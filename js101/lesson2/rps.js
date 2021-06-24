const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

let playerWins = 0;
let computerWins = 0;
prompt('Best out of 5, win 3 times to win the game!')

while (true) {
  // Ask for Player's choice
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}.`);
  let playerChoice = readline.question().toLowerCase();
  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt('Not a valid choice');
    playerChoice = readline.question();
  }

  // Generate Computer's choice
  let index = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[index];
  prompt(`You chose ${playerChoice}. Computer chose ${computerChoice}.`);

  // Track n Display winner
  if (playerChoice === computerChoice) {
    prompt('It is a tie!');
  } else if ((playerChoice === 'rock' && (['paper', 'spock'].includes(computerChoice))) ||
            (playerChoice === 'paper' && (['scissors', 'lizard'].includes(computerChoice))) ||
            (playerChoice === 'scissors' && (['rock', 'spock'].includes(computerChoice))) ||
            (playerChoice === 'lizard' && (['rock', 'scissors'].includes(computerChoice))) ||
            (playerChoice === 'spock' && (['paper', 'lizard'].includes(computerChoice)))) {
    prompt('Computer won!');
    computerWins += 1;
  } else {
    prompt('You won!');
    playerWins += 1;
  }

  // // Play another round
  // prompt('Would you like to play again? (y/n)');
  // let answer = readline.question().toLowerCase();
  // while (answer[0] !== 'n' && answer[0] !== 'y') {
  //   prompt('Please enter "y" or "n".');
  //   answer = readline.question().toLowerCase();
  // }
  // if (answer[0] === 'n') break;
  console.log(`score: You = ${playerWins}, Comp = ${computerWins}`);
  if (playerWins === 3 || computerWins === 3) break;
}