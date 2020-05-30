import { getRandomNumber } from '../rand.js';
import gameEngine from '../index.js';

const resultRound = () => {
  const first = getRandomNumber();
  const step = getRandomNumber();
  const hidden = getRandomNumber() - 1;
  const progression = [...Array(10)].map((elem, ind) => first + step * ind);
  const correctAnswer = String(progression[hidden]);
  progression[hidden] = '..';
  const questionText = progression.join(' ');
  return { questionText, correctAnswer };
};

export default () => {
  const conditionOfGame = 'What number is missing in the progression?';
  gameEngine(resultRound, conditionOfGame);
};
