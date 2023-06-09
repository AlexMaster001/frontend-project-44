#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../random.js';

console.log('What is the result of the expression?');

const calc = () => {
  const firstOperand = random(1, 50);
  const secondOperand = random(1, 50);
  const operator = random(1, 3);
  let answer;
  switch (operator) {
    case 1:
      console.log(`Question: ${firstOperand} + ${secondOperand}`);
      answer = String(firstOperand + secondOperand);
      break;
    case 2:
      console.log(`Question: ${firstOperand} - ${secondOperand}`);
      answer = String(firstOperand - secondOperand);
      break;
    case 3:
      console.log(`Question: ${firstOperand} * ${secondOperand}`);
      answer = String(firstOperand * secondOperand);
      break;
    default:
      break;
  }
  const playerAnswer = readlineSync.question('Your answer: ');
  return [answer, playerAnswer];
};

export default calc;
