const MESSAGES = [
  'Всё отлично', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Очень красивое фото!',
  'Самая большая гора в мире',
  'Самый красивый водопад, который находится в африке!',
  'Лучшее фото, что я когда либо видел',
  'Прекрасный портрет',
  'Жители дикой природы',
];

const NAMES = ['Артём', 'Андрей', 'Никита', 'Дима', 'Алиса', 'Настя', 'Полина', 'Александр', 'Володя'];

const quantityPhoto = 25;

const valueFromRandom = {
  minCommentId: 0,
  maxCommentId: 750,
  minId: 1,
  maxId: 25,
  minUnicPhoto: 1,
  maxUnicPhoto: 25,
  minAvatar: 1,
  maxAvatar: 6,
  minLikes: 15,
  maxLikes: 200,
  minComments: 0,
  maxComments: 30,
};

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

const getCommentId = createRandomIdFromRangeGenerator(valueFromRandom.minCommentId, valueFromRandom.maxCommentId);
const getId = createRandomIdFromRangeGenerator(valueFromRandom.minId, valueFromRandom.maxId);
const getUnicPhoto = createRandomIdFromRangeGenerator(valueFromRandom.minUnicPhoto, valueFromRandom.maxUnicPhoto);

const getObjectComments = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(valueFromRandom.minAvatar, valueFromRandom.maxAvatar)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: getId(),
  url: `photos/${getUnicPhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(valueFromRandom.minLikes, valueFromRandom.maxLikes),
  comments: Array.from({ length: getRandomInteger(valueFromRandom.minComments, valueFromRandom.maxComments) }, getObjectComments),
});

const similarСreatePhotoDescription = Array.from({ length: quantityPhoto }, createPhotoDescription);

similarСreatePhotoDescription();
