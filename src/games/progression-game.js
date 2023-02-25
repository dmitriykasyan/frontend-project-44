#!/usr/bin/env node
import { getRandomInt, getProgression } from "../tools.js";
import runGame from "../index.js";

const description = 'What number is missing in the progression?';

const gameResult = () => {
  const progression = getProgression(getRandomInt(), getRandomInt(2, 5));
  const item = getRandomInt(1,progression.length);
  const removedEl = progression.splice(item - 1, 1, '..')[0];
  return [progression.join(' '), removedEl.toString()];
};

const progressionGame = () => {
  runGame(description, gameResult);
}

export default progressionGame;