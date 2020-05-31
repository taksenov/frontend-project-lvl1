const getRandomNumber = (min = 1, max = 11) => {
  const minRound = Math.ceil(min);
  const maxRound = Math.floor(max);
  return Math.floor(Math.random() * (maxRound - minRound)) + minRound;
};

const getRandomMatematicOperation = () => {
  const operations = ['+', '-', '*'];
  const index = getRandomNumber(0, operations.length);
  return operations[index];
};

export default getRandomNumber;
export { getRandomMatematicOperation };
