'use strict';
import readline from 'readline';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const terminal = readline.createInterface(process.stdin, process.stdout);
let userInput = 0;

terminal.question('Write your 4-digit number', (number) => {
  userInput = number;
});

function app() {
  const numberToGuess = generateRandomNumber();
  const inputStr = String(userInput);

  if (!checkIsValidUserInput(inputStr)) {
    return false;
  }

  const result = getBullsAndCows(userInput, numberToGuess);

  return result;
}

app();
