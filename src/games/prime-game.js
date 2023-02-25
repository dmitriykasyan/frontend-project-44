import { getRandomInt, getDelimiterArray } from '../tools.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameResult = () => {
  let correctAnswer = '';
  const num = getRandomInt(2, 99);
  const dividerLength = getDelimiterArray(num).length;
  correctAnswer = dividerLength === 2 ? 'yes' : 'no';
  return [num.toString(), correctAnswer];
};

const primeGame = () => {
  runGame(description, gameResult);
};

export default primeGame;
