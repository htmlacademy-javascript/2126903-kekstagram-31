import { getData } from './api.js';
import { onSuccess, onError } from './request-result.js';
import './using-form.js';
import './add-photo.js';

getData()
  .then((data) => onSuccess(data))
  .catch(() => onError());
