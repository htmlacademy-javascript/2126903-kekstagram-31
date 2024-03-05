import { getRandomInteger, getRandomArrayElement } from './util.js';

const QUANTITYPHOTO = 25;

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

const AVATAR = {
  min: 1,
  max: 6,
};

const COMMENTS = {
  min: 0,
  max: 30,
};

const LIKES = {
  min: 15,
  max: 200,
};

const addComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomInteger(AVATAR.min, AVATAR.max)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const addComments = () => {
  const comments = [];

  for (let i = 1; i <= getRandomInteger(COMMENTS.min, COMMENTS.max); i++) {
    comments.push(addComment(i));
  }

  return (comments);
};

const addPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES.min, LIKES.max),
  comments: addComments(),
});

const addPhotos = () => {
  const photos = [];
  for (let i = 1; i <= QUANTITYPHOTO; i++) {
    photos.push(addPhoto(i));
  }
  return photos;
};

export { addPhotos };
