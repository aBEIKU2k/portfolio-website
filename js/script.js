let index = 0;
const images = [
  'images/img4.jpg',
  'images/isaac.jpg',
  'images/img1.jpg'
];
const slider = document.querySelector('.img-container');

function startSlider() {
  setInterval(changeBackground, 5000);
}

function changeBackground() {
  slider.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

startSlider();
changeBackground();