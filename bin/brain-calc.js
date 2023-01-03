#!/usr/bin/env node

import { getAnswer, getArithExp, getRandomInt } from '../src/index.js';

let winCounter = 0;

const name = getAnswer('May I have your name? ');
console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}
What is the result of the expression?`);

for (let i = 0; i <= 2; i += 1) {
  const resultExpression = getArithExp(getRandomInt(), getRandomInt(), getRandomInt(0, 3));
  const calcResult = parseInt(getAnswer('Your answer: '), 10);

  if (resultExpression === calcResult) {
    console.log('Correct!');
    winCounter += 1;
  } else {
    console.log(`'${calcResult}' is wrong answer ;(. Correct answer was '${resultExpression}'.
Let's try again, ${name}!`);
    break;
  }
}

if (winCounter === 3) {
  console.log(`Congratulations, ${name}!`);
}
