#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomeAndGetUserName from './cli.js';

const getRandomInt = () => {
  const min = 0;
  const max = 65535;
  return Math.floor(Math.random() * (max - min)) + min;
};

const isEven = (number) => number % 2 === 0;

const userDefinesEvenNumber = () => {
  const randomNumber = getRandomInt();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const userRight = userAnswer === correctAnswer;
  if (userRight) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  }
  return userAnswer === correctAnswer;
};

const evenNumbersGame = (userName) => {
  let correctAnswers = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (correctAnswers < 3) {
    const userRight = userDefinesEvenNumber();
    if (!userRight) {
      break;
    }
    correctAnswers += 1;
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

const userName = welcomeAndGetUserName();
evenNumbersGame(userName);
