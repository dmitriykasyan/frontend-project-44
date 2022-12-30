#!/usr/bin/env node
import {getAnswer, getRandomInt, getDelimiterArray} from "../src/index.js";

let winCounter = 0;
let correctAnswer;

console.log(`Welcome to the Brain Games!`);
let name = getAnswer(`May I have your name? `);
console.log(`Hello, ${name}`);
console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);

for (let i = 0; i <= 2; i++) {
  let num =getRandomInt(2,99);
  let dividerLength = getDelimiterArray(num).length;
  console.log(`Question: ${num}`);
  let ans = getAnswer('Your answer: ');
  dividerLength === 2 ? correctAnswer = 'yes': correctAnswer = 'no';
  if ((dividerLength === 2 && ans === 'yes') || (dividerLength >2 && ans === 'no')) {
    console.log('Correct!');
    winCounter += 1;
  }
  else {
    console.log(`Your answer: '${ans}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
  break;
  }
}

if (winCounter === 3){
  console.log(`Congratulations, ${name}!`);
}
