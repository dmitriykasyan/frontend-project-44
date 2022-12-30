#!/usr/bin/env node
import _ from "lodash";
import {getAnswer, getRandomInt, getDelimiterArray} from "../src/index.js";

let winCounter = 0;

console.log(`Welcome to the Brain Games!`);
let name = getAnswer(`May I have your name? `);
console.log(`Hello, ${name}`);
console.log ('Find the greatest common divisor of given numbers.');

for (let i=0; i <= 2; i++) {
  let num1 = getRandomInt(1, 20);
  let num2 = getRandomInt(1, 20);
  let gcd = _.last(_.intersection(getDelimiterArray(num1), getDelimiterArray(num2)));

  console.log (`Question: ${num1} ${num2}`);
  // console.log ('НОД = ',gcd);
  let ans = parseInt(getAnswer ('Your answer: '));
  if (ans === gcd) {
    console.log('Correct !');
    winCounter += 1;
  }
  else {
    console.log(`Your answer: '${ans}' is wrong answer ;(. Correct answer was '${gcd}'.
Let's try again, ${name}!`);
  break;
  }
}
if (winCounter === 3) {
  console.log(`Congratulations, ${name}!`);
}