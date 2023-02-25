#!/usr/bin/env node
import readlineSync from 'readline-sync';

const runGame = (description, gameResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(description);

  for (let i = 0; i <= 2; i += 1) {
    const [number, correctAnswer] = gameResult();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('You answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
