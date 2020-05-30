import * as messages from './messages.js';
import * as cli from './cli.js';

const playGame = (userName, resultRound, conditionOfGame) => {
  const allRounds = 3;
  let correctAnswers = 0;
  console.log(conditionOfGame);
  while (correctAnswers < allRounds) {
    const { questionText, correctAnswer } = resultRound();
    messages.question(questionText);
    const userAnswer = cli.getUserAnswer();
    if (userAnswer !== correctAnswer) {
      messages.lose(userName, userAnswer, correctAnswer);
      break;
    }
    messages.success();
    correctAnswers += 1;
  }
  if (correctAnswers === allRounds) {
    messages.win(userName);
  }
};

const welcomeAndGetUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = cli.getUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default (resultRound, conditionOfGame) => {
  const userName = welcomeAndGetUserName();
  playGame(userName, resultRound, conditionOfGame);
};

export { welcomeAndGetUserName };
