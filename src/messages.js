
const success = () => {
  console.log('Correct!');
};

const lose = (userName, userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
  console.log(`Let's try again, ${userName}!`);
};

const win = (userName) => {
  console.log(`Congratulations, ${userName}`);
};

const question = (questionText) => {
  console.log(`Question: ${questionText}`);
};

export {
  success,
  lose,
  win,
  question,
};
