import { isEscKeyDown, numDecline } from './util.js';

const AvatarDescription = {
  HEIGHT: 35,
  WIDTH: 35
};

const COMMENTS_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const comments = bigPicture.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialComment = bigPicture.querySelector('.social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialCommentShowCount = bigPicture.querySelector('.social__comment-shown-count');

let commentsCount = COMMENTS_STEP;
let currentComments = [];

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

const renderComments = () => {
  comments.innerHTML = '';
  socialCommentCount.innerHTML = '';

  commentsCount = (commentsCount > currentComments.length) ? currentComments.length : commentsCount;
  const commentSelected = currentComments.slice(0, commentsCount);

  if (currentComments.length < COMMENTS_STEP || commentsCount >= currentComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  socialCommentCount.innerHTML = `${commentsCount} из <span class='comments-count'>${currentComments.length}</span> ${numDecline(currentComments.length, 'комментария', 'комментариев', 'комментариев')}`;

  socialCommentShowCount.textContent = commentsCount;
  socialCommentTotalCount.textContent = currentComments.length;


  commentSelected.forEach((comment) => {
    comments.appendChild(createComment(comment, socialComment));
  });
};

const onCommentsLoaderClick = () => {
  commentsCount += COMMENTS_STEP;
  renderComments();
};

const closeBigPhoto = () => {
  currentComments = [];
  commentsCount = COMMENTS_STEP;
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoader.removeEventListener('keydown', onCommentsLoaderClick);

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

  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  socialCommentTotalCount.textContent = photo.comments.length;
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.add('modal-open');

  currentComments = photo.comments;
  renderComments();

  document.addEventListener('keydown', onEscKeyDown);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  closeButton.addEventListener('click', closeBigPhoto);
};

export { OpenBigPhoto };
