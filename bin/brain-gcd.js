#!/usr/bin/env node
import _ from 'lodash';
import { getAnswer, getRandomInt, getDelimiterArray } from '../src/index.js';

let winCounter = 0;

console.log('Welcome to the Brain Games!');
const name = getAnswer('May I have your name? ');
console.log(`Hello, ${name}`);
console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i <= 2; i += 1) {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const gcd = _.last(_.intersection(getDelimiterArray(num1), getDelimiterArray(num2)));

  console.log(`Question: ${num1} ${num2}`);
  // console.log ('НОД = ',gcd);
  const ans = parseInt(getAnswer('Your answer: '), 10);
  if (ans === gcd) {
    console.log('Correct !');
    winCounter += 1;
  } else {
    console.log(`Your answer: '${ans}' is wrong answer ;(. Correct answer was '${gcd}'.
Let's try again, ${name}!`);
    break;
  }
}
if (winCounter === 3) {
  console.log(`Congratulations, ${name}!`);
}
