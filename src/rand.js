
const getRandomInt = (min, max) => {
  const minRound = Math.ceil(min);
  const maxRound = Math.floor(max);
  return Math.floor(Math.random() * (maxRound - minRound)) + minRound;
};

const getRandomNumber = () => getRandomInt(1, 11);

const getRandomMatematicOperation = () => {
  const operations = ['+', '-', '*'];
  const number = getRandomInt(1, operations.length);
  return operations[number - 1];
};

export default getRandomNumber;
export { getRandomMatematicOperation };
