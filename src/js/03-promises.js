import Notiflix from 'notiflix';

const ref = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

const STORAGE_KEY = 'feedback-form-state';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position: position + 1, delay });
      } else {
        reject({ position: position + 1, delay });
      }
    }, delay);
  });
}

ref.form.addEventListener('input', onFormInput);
ref.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  e.preventDefault();

  const feedbackInfo = {
    delay: ref.delay.value,
    step: ref.step.value,
    amount: ref.amount.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackInfo));
}

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  const delayValue = parseInt(delay.value);
  const stepValue = parseInt(step.value);
  const amountValue = parseInt(amount.value);

  for (let i = 0; i < amountValue; i += 1) {
    const delay = i * stepValue + delayValue;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  e.currentTarget.reset();
}
