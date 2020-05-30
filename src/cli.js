import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = () => readlineSync.question('Your answer: ');

export { getUserName, getUserAnswer };
