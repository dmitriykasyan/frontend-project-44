import readlineSync from 'readline-sync';

const getAnswer = (str) => {
  return readlineSync.question(str);
};

const getRandomInt = (min = 0, max = 99) => {
  return Math.floor(Math.random() * (max - min) + min);
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

const getDelimiterArray = (num) => {
  // console.log('number',num);
  const res = [];
  for (let i = 1; i <= num; i++ ) {
    if ((num % i) === 0) {
      res.push(i);
    }
  }
  // console.log('delimeters = ',res);
  return res;
};

export {getAnswer, getArithExp, getRandomInt, getDelimiterArray};