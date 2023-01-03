import readlineSync from 'readline-sync';

const getName = (myQuestion) => {
  // const name = readlineSync.question('May I have your name? ');
  const name = readlineSync.question(myQuestion);

  return `Hello, ${name}!`;
};

export default getName;
