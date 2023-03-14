function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');

let intervalId = null;

startButtonRef.addEventListener('click', onStartChangeColorBody);
stopButtonRef.addEventListener('click', onStopChangeColorBody);

stopButtonRef.disabled = true;

function onStartChangeColorBody(e) {
  startButtonRef.setAttribute('disabled', true);
  stopButtonRef.removeAttribute('disabled');
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  
}

function onStopChangeColorBody(e) {
  stopButtonRef.setAttribute('disabled', true);
  startButtonRef.removeAttribute('disabled');
  clearInterval(intervalId);
}
