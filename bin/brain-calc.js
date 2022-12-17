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

let a = getArithExp(getRandomInt(), getRandomInt(), getRandomInt(3)); 
console.log(`result ${a}, ${typeof(a)}`);
let b = parseInt(getAnswer('Your answer: '));
(a === b) ? console.log ('Correct!') : 
  console.log (`'${b}' is wrong answer ;(. Correct answer was '${a}'.
Let's try again, Sam!`);
