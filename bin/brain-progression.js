#!/usr/bin/env node
import {getAnswer, getRandomInt, getProgression} from '../src/index.js';

let winCounter = 0;

console.log(`Welcome to the Brain Games!`);
let name = getAnswer(`May I have your name? `);
console.log(`Hello, ${name}`);
console.log(`What number is missing in the progression?`)
for (let i = 0; i <= 2; i++){
  let progression = getProgression (getRandomInt(),getRandomInt(2,5));
  // console.log(progression);
  let item = getRandomInt(1,progression.length);
  // console.log(item);
  let removed = progression.splice(item-1, 1, '..');
  console.log(`Question: ${progression.join(' ')}`);
  // console.log(`Removed ${removed}`);
  let ans = parseInt(getAnswer('Your answer: '));
  ans === removed[0] ? 
    (console.log('Correct !'), winCounter += 1
    ) : 
    console.log(`Your answer: '${ans}' is wrong answer ;(. Correct answer was '${removed[0]}'.
Let's try again, ${name}!`);
}
if (winCounter === 3) {
  console.log(`Congratulations, ${name}!`);
}