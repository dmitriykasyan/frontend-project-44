#!/usr/bin/env node
// import _ from loadsh.js;
import {getAnswer, getRandomInt} from "../src/index.js";
// var intersection = require('lodash.intersection');

const getDelimiterArray = (num) => {
  console.log('number',num);
  const res = [];
  for (let i = 1; i <= num; i++ ) {
    if ((num % i) === 0) {
      res.push(i);
    }
  }
  return res;
};

let a = (getDelimiterArray(getRandomInt()));
let b = (getDelimiterArray(getRandomInt()));
console.log(a);
console.log(b);
console.log(_.intersection(a,b));
// Question: 25 50

// let winCounter = 0;


// let name = getAnswer(`May I have your name? `);
// console.log(`Welcome to the Brain Games!`);
// console.log(`Hello, ${name}
// Find the greatest common divisor of given numbers.`);
