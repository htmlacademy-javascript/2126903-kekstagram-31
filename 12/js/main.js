import { getData } from './api.js';
import { renderThumbnails } from './thumbnails.js';
import './big-picture.js';
import { onFormSubmit, onImgUploadClose } from './using-form.js';

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');

getData()
  .then((photos) => {
    renderThumbnails(photos);
  }).catch(() => {
    document.body.append(dataError);
    setTimeout(() => document.body.removeChild(dataError), 5000);
  });

onFormSubmit(onImgUploadClose);
