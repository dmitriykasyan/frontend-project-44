#!/usr/bin/env node
import {getAnswer, getRandomInt} from '../src/index.js';

const getProgression = (start, step, elem = 10) => {
  const resProgression = [];
  let a = start;
  for (let i = 1; i <= elem; i++ ) {
    resProgression.push(a + ((i-1)*step));
  }
  return resProgression;
};

let b = getProgression (getRandomInt(),getRandomInt(1,5)); //генерируем прогрессию
console.log(b);
let c = getRandomInt(1,b.length); //получаем случайное число в интервале сгенериованного массива
console.log(c);

let removed = b.splice(c-1, 1, '..'); //заменяем значение массива
console.log(`Result ${b.join(' ')}`);
console.log(`Removed ${removed}`);

