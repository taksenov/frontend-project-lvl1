import * as messages from './messages.js';
import * as cli from './cli.js';

const askQuestionGetAnswer = (questionText) => {
  messages.question(questionText);
  return cli.getUserAnswer();
};

const playGame = (userName, conditionOfGame, conditionOfGameMessage) => {
  const allRounds = 3;
  let correctAnswers = 0;
  console.log(conditionOfGameMessage);
  while (correctAnswers < allRounds) {
    const resultRound = conditionOfGame();
    if (!resultRound.userRight) {
      messages.lose(userName, resultRound.userAnswer, resultRound.correctAnswer);
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

export default (dataGame) => {
  const userName = welcomeAndGetUserName();
  playGame(userName, dataGame.conditionOfGame, dataGame.conditionOfGameMessage);
};

export { askQuestionGetAnswer, welcomeAndGetUserName };
