const imgUploadWrapper = document.querySelector('.img-upload__wrapper');
const slider = imgUploadWrapper.querySelector('.effect-level__slider');
const effectLevel = imgUploadWrapper.querySelector('.img-upload__effect-level');
const img = imgUploadWrapper.querySelector('.img-upload__preview img');

noUiSlider.create(slider, {
  start: 1,
  connect: 'lower',
  range: { min: 0, max: 1 },
  format: {
    to: (value) => Number.isInteger(value)
      ? value.toFixed(0)
      : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

effectLevel.classList.add('hidden');

const onEffectChange = (evt) => {
  const effect = evt.target.value;

  if (effect === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }

  switch (effect) {
    case 'none':
      slider.noUiSlider.off('update');
      img.style.filter = 'none';
      break;
    case 'chrome':
      slider.noUiSlider.off('update');
      slider.noUiSlider.updateOptions({
        range: { min: 0, max: 1 },
        start: 1,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `grayscale(${slider.noUiSlider.get()})`;
      });
      break;
    case 'sepia':
      slider.noUiSlider.off('update');
      slider.noUiSlider.updateOptions({
        range: { min: 0, max: 1 },
        start: 1,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `sepia(${slider.noUiSlider.get()})`;
      });
      break;
    case 'marvin':
      slider.noUiSlider.off('update');
      slider.noUiSlider.updateOptions({
        range: { min: 0, max: 100 },
        start: 100,
        step: 1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `invert(${slider.noUiSlider.get()}%)`;
      });
      break;
    case 'phobos':
      slider.noUiSlider.off('update');
      slider.noUiSlider.updateOptions({
        range: { min: 0, max: 3 },
        start: 3,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `blur(${slider.noUiSlider.get()}px)`;
      });
      break;
    case 'heat':
      slider.noUiSlider.off('update');
      slider.noUiSlider.updateOptions({
        range: { min: 1, max: 3 },
        start: 3,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `brightness(${slider.noUiSlider.get()})`;
      });
  }
};

export { onEffectChange };
