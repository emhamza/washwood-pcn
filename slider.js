/* eslint-disable no-use-before-define */
const sliderContainer = document.querySelector('.slider-container');
const sliderControls = document.querySelectorAll('.slider-control');

let slideIndex = 0;
let interval;

function startSlider() {
  interval = setInterval(() => {
    slideIndex += 1;
    if (slideIndex === sliderControls.length) {
      slideIndex = 0;
    }
    moveSlider();
  }, 5000);
}

function stopSlider() {
  clearInterval(interval);
}

function moveSlider() {
  sliderContainer.style.left = `-${slideIndex * 100}%`;
  sliderControls.forEach((control) => control.classList.remove('active'));
  sliderControls[slideIndex].classList.add('active');
}

sliderControls.forEach((control, index) => {
  control.addEventListener('click', () => {
    slideIndex = index;
    moveSlider();
    stopSlider();
    startSlider();
  });
});

startSlider();
