#!/usr/bin/env node
import _ from "lodash";
import {getAnswer, getRandomInt, getDelimiterArray} from "../src/index.js";

let winCounter = 0;

console.log(`Welcome to the Brain Games!`);
let name = getAnswer(`May I have your name? `);
console.log(`Hello, ${name}`);
console.log ('Find the greatest common divisor of given numbers.');

for (let i=0; i <= 2; i++){
  let num1 = getRandomInt(1, 20);  //getRandomInt() позволяет установить максимальное генерируемое число
  let num2 = getRandomInt(1, 20);  //getRandomInt() позволяет установить максимальное генерируемое число
  let gcd = _.last(_.intersection(getDelimiterArray(num1), getDelimiterArray(num2)));

  console.log (`Question: ${num1} ${num2}`);
  // console.log ('НОД = ',gcd);
  let ans = parseInt(getAnswer ('Your answer: '));
  ans === gcd ? (console.log('Correct !'), winCounter += 1) 
              : console.log(`Your answer: '${ans}' is wrong answer ;(. Correct answer was '${gcd}'.
Let's try again, ${name}!`)
}
if (winCounter === 3) {
  console.log(`Congratulations, ${name}!`);
}

// проверка нулевого значения ???
// console.log('intersection',_.intersection(a,b));
