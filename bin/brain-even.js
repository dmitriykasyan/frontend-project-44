#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getName = (str) => {
  return readlineSync.question(str);
};

const checkAnswer = (answer, number) => {
  let evenNum = number % 2;

  if (((evenNum === 0) && (answer === 'yes')) || 
  ((evenNum !== 0) && (answer === 'no'))) {
    return true;
  }
};

let winCounter = 0;
let negAnswer;
let name = getName('May I have your name? ')

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (winCounter <= 2) {
  let number = Math.round(Math.random()*100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  answer === 'yes' ? negAnswer = 'no' : negAnswer = 'yes';
  if (checkAnswer(answer,number) === true) {
    winCounter += 1;
    console.log ('Correct!');
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${negAnswer}'`);
  }
}

console.log(`Congratulations, ${name}!`);