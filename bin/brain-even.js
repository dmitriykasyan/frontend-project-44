#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getAnswer = (str) => {
  const answer = readlineSync.question(str);
  return answer;
};

const checkAnswer = (number, answer) => {
  const evenNum = number % 2;
  if (((evenNum === 0) && (answer === 'yes')) || ((evenNum !== 0) && (answer === 'no'))) {
    return true;
  }
  return false;
};

let winCounter = 0;
let correctAnswer;
const name = getAnswer('May I have your name? ');

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i <= 2; i += 1) {
  const number = Math.round(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = getAnswer('Your answer: ');

  if ((number % 2) === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  if (checkAnswer(number, answer) === true) {
    winCounter += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
Let's try again, ${name}!`);
    break;
  }
}
if (winCounter === 3) {
  console.log(`Congratulations, ${name}!`);
}
