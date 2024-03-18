const getRandomInteger = (min, max) => {
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
