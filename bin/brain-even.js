#!/usr/bin/env node
import readlineSync from 'readline-sync';

// const getBrainEven = () => {
//   let negAnswer;

//   console.log('Answer "yes" if the number is even, otherwise answer "no".');

//   let number = Math.round(Math.random()*100);
//   console.log(`Question: ${number}`);
//   const answer = readlineSync.question('Your answer: ');
//   answer === 'yes' ? negAnswer = 'no' : negAnswer = 'yes';
//   if ((number%2 === 0) && (answer === 'yes')) {
//     return 'Correct!';
//   }
//   else if ((number % 2 !== 0) && (answer === 'no')) {
//     return 'Correct!';
//   }
//   else {
//     return `'${answer}' is wrong answer ;(. Correct answer was '${negAnswer}'`;
//   }
// };

// console.log(getBrainEven());

// -------

let negAnswer;

let winCounter = 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (winCounter <= 2) {
  let number = Math.round(Math.random()*100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  answer === 'yes' ? negAnswer = 'no' : negAnswer = 'yes';
  if ((number%2 === 0) && (answer === 'yes')) {
    console.log('Correct!');
    winCounter += 1;
  }
  else if ((number % 2 !== 0) && (answer === 'no')) {
    console.log('Correct!');
    winCounter += 1;
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${negAnswer}'`);
  }
}

// export {getBrainEven};