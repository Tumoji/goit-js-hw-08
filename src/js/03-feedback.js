import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const saveForm = () => {
  const submitForm = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(submitForm));
};

const throttledSave = throttle(saveForm, 500);

form.addEventListener('input', throttledSave);

document.addEventListener('DOMContentLoaded', () => {
  const savedForm = localStorage.getItem('feedback-form-state');
  if (savedForm) {
    const submitForm = JSON.parse(savedForm);
    emailInput.value = submitForm.email;
    messageInput.value = submitForm.message;
  }
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitForm = {
      email: emailInput.value,
      message: messageInput.value,
    };
  
    console.log('Form Data:', submitForm);
  
    localStorage.removeItem("feedback-form-state");

    emailInput.value = '';
    messageInput.value = '';
  });
