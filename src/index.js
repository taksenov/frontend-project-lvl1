import readlineSync from 'readline-sync';

import setUserData from './utils/SetUserData';

const playGame = (userName, resultRound, conditionOfGame) => {
  const countRounds = 3;
  console.log(conditionOfGame);

  for (let i = 0; i < countRounds; i += 1) {
    const { questionText, correctAnswer } = resultRound();
    console.log(`Question: ${questionText}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`,
      );
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

const gameEngine = (resultRound, conditionOfGame) => {
  const userName = setUserData();
  playGame(userName, resultRound, conditionOfGame);
};

export default gameEngine;
