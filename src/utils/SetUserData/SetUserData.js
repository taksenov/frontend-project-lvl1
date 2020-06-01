import readlineSync from 'readline-sync';

/**
 * setUserData установка данных пользователя системы
 *
 * @returns
 *
 *  @userName {string} -- имя пользователя
 */
const setUserData = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default setUserData;
