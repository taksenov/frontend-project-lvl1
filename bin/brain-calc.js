#!/usr/bin/env node
import * as rand from './rand.js';
import gameEngine, { askQuestionGetAnswer } from './index.js';

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const conditionOfGame = () => {
  const number1 = rand.getRandomNumber();
  const number2 = rand.getRandomNumber();
  const operation = rand.getRandomMatematicOperation();
  const questionText = `${number1} ${operation} ${number2}`;
  const userAnswer = askQuestionGetAnswer(questionText);
  const correctAnswer = calculate(number1, number2, operation);
  const userRight = Number(userAnswer) === correctAnswer;
  return { userRight, userAnswer, correctAnswer };
};

const conditionOfGameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const dataGame = { conditionOfGame, conditionOfGameMessage };
gameEngine(dataGame);
