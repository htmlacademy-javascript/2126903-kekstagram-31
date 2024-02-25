const MESSAGES = [
  'Всё отлично', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Артём', 'Андрей', 'Никита', 'Дима', 'Алиса', 'Настя', 'Полина', 'Александр', 'Володя'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator(a, b) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(a, b);
    if (previousValues.length >= (b - a + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];

const getCommentId = createRandomIdFromRangeGenerator(0, 750);
const getId = createRandomIdFromRangeGenerator(1, 25);
const getUnicPhoto = createRandomIdFromRangeGenerator(1, 25);

const getObjectComments = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: getId(),
  url: `photos/${getUnicPhoto()}.jpg`,
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, getObjectComments),
});

const similarСreatePhotoDescription = Array.from({ length: 25 }, createPhotoDescription);

similarСreatePhotoDescription();
