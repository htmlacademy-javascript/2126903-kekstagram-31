
const avatarDescription = {
  HEIGHT: 35,
  WIDTH: 35
};

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureImage = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const comments = bigPicture.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialComment = bigPicture.querySelector('.social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

// Фукция для создания комментариев

const createComment = (comment, thumbnail) => {
  const newComment = thumbnail.cloneNode(true);

  const avatar = newComment.querySelector('social__picture');
  const text = newComment.querySelector('.social__text');

  avatar.src = comment.url;
  avatar.alt = comment.name;
  avatar.width = avatarDescription.HEIGHT;
  avatar.height = avatarDescription.HEIGHT;

  text.textContent = comment.message;

  return newComment;
};

// Фукция закрывания окна

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  closeButton.removeEventListener('click', closeBigPhoto);
};

// Фукция по закрытию окна по клику на кнопку закрытия

closeButton.addEventListener('click', () => {
  closeBigPhoto();
});

// Функция по закрытию окна по нажатию кнопки esc

const onEscDown = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPhoto();
    document.removeEventListener('keydown', onEscDown);
  }
};

const openBigPhoto = (image, photo) => {
  image.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    bigPictureImage.src = photo.url;
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
    document.addEventListener('keydown', onEscDown);
  });
};

export { openBigPhoto };
