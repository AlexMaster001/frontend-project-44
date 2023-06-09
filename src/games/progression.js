#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../random.js';

console.log('What number is missing in the progression?');

const progression = () => {
  const progressionStartValue = random(1, 25);
  const progressionStep = random(1, 5);
  const progressionLength = random(5, 10);
  const progressionEmptyPlace = random(0, progressionLength);

  let answer;
  const progressionList = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const currentValue = progressionStartValue + i * progressionStep;

    if (i === progressionEmptyPlace) {
      progressionList.push('..');
      answer = String(currentValue);
    } else {
      progressionList.push(String(currentValue));
    }
  }

  console.log('Question:', ...progressionList);
  const playerAnswer = readlineSync.question('Your answer: ');
  return [answer, playerAnswer];
};

export default progression;
