const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];
const isEscKeyDown = (evt) => evt.key === 'Escape';

const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  const num1 = num % 10;
  const num2 = num % 100;

  if (num2 === 11 || num2 === 12 || num2 === 13 || num2 === 14) {
    return (genitivePlural);
  } else if (num1 >= 2 && num1 <= 4) {
    return (genitiveSingular);
  } else if (num1 === 1) {
    return (nominative);
  } else {
    return (genitivePlural);
  }
};

export { getRandomInteger, getRandomArrayElement, isEscKeyDown, numDecline };
