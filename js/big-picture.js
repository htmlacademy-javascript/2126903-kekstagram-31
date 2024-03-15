import { isEscKeyDown } from './util.js';

const AvatarDescription = {
  HEIGHT: 35,
  WIDTH: 35
};

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const comments = bigPicture.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialComment = bigPicture.querySelector('.social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');


const createComment = (comment, template) => {
  const newComment = template.cloneNode(true);

  const avatar = newComment.querySelector('img');
  const commentText = newComment.querySelector('p');

  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.HEIGHT = AvatarDescription.HEIGHT;
  avatar.WIDTH = AvatarDescription.WIDTH;
  commentText.textContent = comment.message;

  return newComment;
};

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  closeButton.removeEventListener('click', closeBigPhoto);
};

closeButton.addEventListener('click', () => {
  closeBigPhoto();
});

const onEscKeyDown = (evt) => {
  if (isEscKeyDown(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const OpenBigPhoto = (photo) => {
  bigPicture.classList.remove('hidden');

  bigPictureImg.querySelector('img').src = photo.url;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;
  socialCommentTotalCount.textContent = photo.comments.length;
  comments.innerHTML = '';

  photo.comments.forEach((comment) => {
    comments.appendChild(createComment(comment, socialComment));
    body.classList.add('modal-open');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  });
  document.addEventListener('keydown', onEscKeyDown);
};

export { OpenBigPhoto };

