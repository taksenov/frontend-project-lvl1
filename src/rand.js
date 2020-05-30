
const getRandomInt = (min, max) => {
  const minRound = Math.ceil(min);
  const maxRound = Math.floor(max);
  return Math.floor(Math.random() * (maxRound - minRound)) + minRound;
};

const getRandomNumber = () => getRandomInt(1, 11);

const getRandomMatematicOperation = () => {
  const number = getRandomInt(1, 4);
  if (number === 1) {
    return '+';
  }
  if (number === 2) {
    return '-';
  }
  if (number === 3) {
    return '*';
  }
  return '+';
};

export { getRandomNumber, getRandomMatematicOperation };
