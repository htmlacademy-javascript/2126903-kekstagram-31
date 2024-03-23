import { addPhotos } from './data.js';
import { renderPhotos } from './thumbnails.js';
import './using-form.js';

const photos = addPhotos();

renderPhotos(photos);

