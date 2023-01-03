#!/usr/bin/env node
import { getAnswer, getRandomInt, getProgression } from '../src/index.js';

let winCounter = 0;

console.log('Welcome to the Brain Games!');
const name = getAnswer('May I have your name? ');
console.log(`Hello, ${name}`);
console.log('What number is missing in the progression?');
for (let i = 0; i <= 2; i += 1) {
  const progression = getProgression(getRandomInt(), getRandomInt(2, 5));
  const item = getRandomInt(1, progression.length);
  const removed = progression.splice(item - 1, 1, '..');
  console.log(`Question: ${progression.join(' ')}`);
  const ans = parseInt(getAnswer('Your answer: '), 10);

  if (ans === removed[0]) {
    console.log('Correct !');
    winCounter += 1;
  } else {
    console.log(`Your answer: '${ans}' is wrong answer ;(. Correct answer was '${removed[0]}'.
Let's try again, ${name}!`);
    break;
  }
}

if (winCounter === 3) {
  console.log(`Congratulations, ${name}!`);
}
