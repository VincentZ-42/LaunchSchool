/* eslint-disable id-length */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const print = (string) => console.log(string);
const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WIN = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const TURN = ['player', 'computer'];

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

function displayBoard(board) {
  console.clear();
  print(`You are ${HUMAN_MARKER}, Computer is ${COMPUTER_MARKER}.`);
  print('     |     |');
  print(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  print('     |     |');
  print('-----+-----+-----');
  print('     |     |');
  print(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  print('     |     |');
  print('-----+-----+-----');
  print('     |     |');
  print(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  print('     |     |');
  print('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let choice;
  while (true) {
    choice = readline.question(`Choose a square ${joinOr(emptySquares(board))}: `);

    if (emptySquares(board).includes(choice)) break;

    print("Sorry, that's not a valid choice");
  }
  board[choice] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, mark) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === mark).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  let square;

  for (let index = 0; index < WIN.length; index++) {
    let line = WIN[index];
    // Find winning move
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;

    // Find defensive move
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  if (emptySquares(board).includes(5)) {
    square = 5;
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  if (emptySquares(board).length === 0) return true;
  return false;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WIN.length; line++) {
    let [a, b, c] = WIN[line];
    if (
      board[a] === HUMAN_MARKER &&
      board[b] === HUMAN_MARKER &&
      board[c] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[a] === COMPUTER_MARKER &&
      board[b] === COMPUTER_MARKER &&
      board[c] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

let gameTracker = {
  gamesPlayed: 0,
  playerWon: 0,
  computerWon: 0
};

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 1) {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 1 ? 0 : 1;
}

while (true) {
  let board = initializeBoard();
  let first = readline.question('Who goes first? (player or computer: ').toLowerCase();
  while (!TURN.includes(first)) {
    first = readline.question('Please pick player or computer: ');
  }
  let currentPlayer = ((first === 'player') ? 1 : 0);
  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    const winner = detectWinner(board);
    print(`${winner} won!`);
    if (winner === 'Player') {
      gameTracker.playerWon += 1;
    } else if (winner === 'Computer') {
      gameTracker.computerWon += 1;
    }
  } else {
    print("It's a tie!");
  }

  gameTracker.gamesPlayed += 1;
  print(`${gameTracker.gamesPlayed} rounds have been played.`);
  print(`You have won ${gameTracker.playerWon} games. Computer has won ${gameTracker.computerWon} games.`);
  print(`Win ${5 - gameTracker.playerWon} more games to win match`);

  if (gameTracker.playerWon === 5 || gameTracker.computerWon === 5) break;
  let rematch = readline.question('Continue? (y or n): ').toLowerCase();
  while (!'yn'.includes(rematch)) {
    rematch = readline.question('Please enter y or n: ');
  }
  if (rematch === 'n') break;
}