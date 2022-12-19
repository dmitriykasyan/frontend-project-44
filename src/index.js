import readlineSync from 'readline-sync';

const getAnswer = (str) => {
  return readlineSync.question(str);
};

const getRandomInt = (x = 99) => {
  return Math.floor(Math.random() * x);
};

const getArithExp = (num1, num2, num3) => {
//  console.log(num1, num2, num3)
  switch (num3) {
    case 0:
      console.log(`Question: ${num1} + ${num2}`)
      return num1 + num2 ;
    case 1:
      console.log(`Question: ${num1} - ${num2}`)
      return  num1 - num2 ;
    case 2:
      console.log(`Question: ${num1} * ${num2}`)
      return  num1 * num2 ;
  }
};

export {getAnswer, getArithExp, getRandomInt};