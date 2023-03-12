function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');

const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');

let intervalId = null;

startButtonRef.addEventListener('click', onChangeColorBody);

function onChangeColorBody(e) {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    startButtonRef.setAttribute('disabled', true);
  }, 1000);
}

stopButtonRef.addEventListener('click', onStopChangeColorBody);

function onStopChangeColorBody(e) {
  clearInterval(intervalId);
  startButtonRef.removeAttribute('disabled');
}
