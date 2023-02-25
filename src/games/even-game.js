#!/usr/bin/env node
import runGame from '../index.js';
import { getRandomInt } from '../tools.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameResult = () => {
  const number = getRandomInt(1);
  const evenNum = number % 2;
  let correctAnswer = '';
  if (evenNum === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [number.toString(), correctAnswer];
};

const evenGame = () => {
  runGame(description, gameResult);
};

export default evenGame;
