import { OpenBigPhoto } from './big-picture.js';

const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderPhoto = (photo) => {
  const thumbnail = template.cloneNode(true);

  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  OpenBigPhoto(thumbnail, photo);

  return thumbnail;
};

const renderPhotos = (objects) => {
  for (let i = 0; i < objects.length; i++) {
    fragment.appendChild(renderPhoto(objects[i]));
  }
  pictures.appendChild(fragment);
};

export { renderPhotos };
