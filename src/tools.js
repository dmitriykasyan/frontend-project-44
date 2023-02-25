import readlineSync from 'readline-sync';

const getAnswer = (str) => {
  const sting = readlineSync.question(str);
  return sting;
};

const getRandomInt = (min = 0, max = 99) => {
  const rndInt = Math.floor(Math.random() * (max - min) + min);
  return rndInt;
};

const getArithExp = (num1, num2, num3) => {
  switch (num3) {
    case 0:
      console.log(`Question: ${num1} + ${num2}`);
      return num1 + num2;
    case 1:
      console.log(`Question: ${num1} - ${num2}`);
      return num1 - num2;
    case 2:
      console.log(`Question: ${num1} * ${num2}`);
      return num1 * num2;
    // no default
  }
  return null;
};

const getDelimiterArray = (num) => {
  // console.log('number',num);
  const res = [];
  for (let i = 1; i <= num; i += 1) {
    if ((num % i) === 0) {
      res.push(i);
    }
  }
  return res;
};

const getProgression = (start, step, elem = 10) => {
  const resProgression = [];
  const a = start;
  for (let i = 1; i <= elem; i += 1) {
    resProgression.push(a + ((i - 1) * step));
  }
  return resProgression;
};

export {
  getAnswer,
  getArithExp,
  getRandomInt,
  getDelimiterArray,
  getProgression,
};
