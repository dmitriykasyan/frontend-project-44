#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getAnswer = (str) => {
  return readlineSync.question(str);
};

const getRandomInt = (x = 99) => {
  return Math.floor(Math.random() * x);
};

const getArithExp = (num1, num2, num3) => {
//  console.log(num1, num2, num3)
  switch (num3) {
    case 0:
      console.log(`Question: ${num1} + ${num2}`)
      return num1 + num2 ;
    case 1:
      console.log(`Question: ${num1} - ${num2}`)
      return  num1 - num2 ;
    case 2:
      console.log(`Question: ${num1} * ${num2}`)
      return  num1 * num2 ;
  }
};


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