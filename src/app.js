'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const numberToGuess = generateRandomNumber();

function app() {
  const userInput = generateRandomNumber();
  const inputStr = String(userInput);

  if (!checkIsValidUserInput(inputStr)) {
    return false;
  }

  const result = getBullsAndCows(userInput, numberToGuess);

  return result;
}

app();
