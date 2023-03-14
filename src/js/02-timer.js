import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const ref = {
  textInput: document.querySelector('#datetime-picker'),
  button: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

ref.button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate.getTime() <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      ref.button.disabled = true;
    } else {
      Notiflix.Notify.success('Timer Start');
      ref.button.disabled = false;
    }
    ref.button.addEventListener('click', () => {
      const timer = {
        start() {
          const startTime = Date.now();
          ref.button.disabled = true;

          setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = selectedDate.getTime() - currentTime;
            const time = convertMs(deltaTime);
            onCountdownChange(time);
          }, 1000);
        },
      };
      timer.start();
    });
  },
};

flatpickr(ref.textInput, options);


function onCountdownChange(params) {
  if (
    params.days <= 0 &&
    params.hours <= 0 &&
    params.minutes <= 0 &&
    params.seconds <= 0
  ) {
    ref.days.textContent = '00';
    ref.hours.textContent = '00';
    ref.minutes.textContent = '00';
    ref.seconds.textContent = '00';
    return;
  }
  ref.days.textContent = params.days;
  ref.hours.textContent = params.hours;
  ref.minutes.textContent = params.minutes;
  ref.seconds.textContent = params.seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
