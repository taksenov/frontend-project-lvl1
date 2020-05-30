#!/usr/bin/env node
import { getRandomNumber } from './rand.js';
import gameEngine, { askQuestionGetAnswer } from './index.js';

const isEven = (number) => number % 2 === 0;

const conditionOfGame = () => {
  const randomNumber = getRandomNumber();
  const userAnswer = askQuestionGetAnswer(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const userRight = userAnswer === correctAnswer;
  return { userRight, userAnswer, correctAnswer };
};

const conditionOfGameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const dataGame = { conditionOfGame, conditionOfGameMessage };
gameEngine(dataGame);
