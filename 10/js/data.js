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

const Avatar = {
  MIN: 1,
  MAX: 6,
};

const Comments = {
  MIN: 0,
  MAX: 30,
};

const Likes = {
  MIN: 15,
  MAX: 200,
};

const addComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(Avatar.MIN, Avatar.MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const addComments = () => {
  const comments = [];

  for (let i = 1; i <= getRandomInteger(Comments.MIN, Comments.MAX); i++) {
    comments.push(addComment(i));
  }

  return (comments);
};

const addPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
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
