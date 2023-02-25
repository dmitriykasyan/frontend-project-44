#!/usr/bin/env node
import _ from 'lodash';
import runGame from '../index.js';
import { getRandomInt, getDelimiterArray } from '../tools.js';

const description = 'Find the greatest common divisor of given numbers.';

const gameResult = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const gcd = _.last(_.intersection(getDelimiterArray(num1), getDelimiterArray(num2)));
  const question = `${num1} ${num2}`;
  return [question, gcd.toString()];
};

const gcdGame = () => {
  runGame(description, gameResult);
};

export default gcdGame;
