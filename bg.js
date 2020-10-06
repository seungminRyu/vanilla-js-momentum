const body = document.querySelector('body');

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  body.style.background = `url("images/${imgNumber}.jpg") no-repeat center center`;
}

function genRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
