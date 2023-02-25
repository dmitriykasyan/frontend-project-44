#!/usr/bin/env node
// import { runGame } from "../index.js";
import runGame from "../index.js";
import { getRandomInt } from "../tools.js";

const description = 'What is the result of the expression?';

const gameResult = () => {
  const num1 = getRandomInt(); 
  const num2 = getRandomInt();
  const num3 = getRandomInt(0, 3);
  var question = '';
  var result = 0;

  switch (num3) {
    case 0:
      question = `${num1} + ${num2}`;
      result = num1 + num2;
      return [question, result.toString()];
    case 1:
      question = `${num1} - ${num2}`;
      result = num1 - num2;
      return [question, result.toString()];
    case 2:
      question = `${num1} * ${num2}`;
      result = num1 * num2;
      return [question, result.toString()];
    // no default
  }
};

const calcGame = () => {
  runGame(description,gameResult);
}

export default calcGame;
// console.log(gameResult());