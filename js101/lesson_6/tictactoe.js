/* eslint-disable id-length */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const print = (string) => console.log(string);
const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

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

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  const choice = emptySquares(board)[randomIndex];
  board[choice] = COMPUTER_MARKER;
}

function boardFull(board) {
  if (emptySquares(board).length === 0) return true;
  return false;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  const WIN = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

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

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    const winner = detectWinner(board);
    print(`${winner} won!`);
  } else {
    print("It's a tie!");
  }

  const rematch = readline.question('Play again? (y or n)');
  if (rematch !== 'y') break;
}