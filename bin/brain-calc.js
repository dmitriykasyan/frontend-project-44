#!/usr/bin/env node

import {getAnswer, getArithExp, getRandomInt} from "../src/index.js";

let winCounter = 0;

let name = getAnswer(`May I have your name? `);
console.log(`Welcome to the Brain Games!`);
console.log(`Hello, ${name}
What is the result of the expression?`);

for (let i = 0; i <= 2; i++ ){
  let resultExpression = getArithExp(getRandomInt(), getRandomInt(), getRandomInt(3));
  // console.log(`result ${resultExpression}, ${typeof(resultExpression)}`);  //result expession
  let calcResult = parseInt(getAnswer('Your answer: '));

  resultExpression === calcResult ? (
    console.log ('Correct!'), winCounter += 1
  ) :
    console.log (`'${calcResult}' is wrong answer ;(. Correct answer was '${resultExpression}'.
Let's try again, ${name}!`);
}
if (winCounter === 3) {
  console.log(`Congratulations, ${name}!`);
}