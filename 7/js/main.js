import { addPhotos } from './data.js';
import { renderPhotos } from './thumbnails.js';

const photos = addPhotos();

renderPhotos(photos);

