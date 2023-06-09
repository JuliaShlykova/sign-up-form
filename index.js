const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');

confirmPassword.addEventListener('input', () => {
  if(password.value!==confirmPassword.value) {
    password.setCustomValidity('Passwords do not match');
  }
  else {
    password.setCustomValidity('');
  }
})

password.addEventListener('input', (event) => {
  if(password.value!==confirmPassword.value) {
    password.setCustomValidity('Passwords do not match');
  }
  else {
    password.setCustomValidity('');
  }
  if(event.currentTarget.value) {
    event.currentTarget.setCustomValidity('');
  }
})

firstName.addEventListener('input', (event) => {
  if(event.currentTarget.value) {
    event.currentTarget.setCustomValidity('');
  }
})

lastName.addEventListener('input', (event) => {
  if(event.currentTarget.value) {
    event.currentTarget.setCustomValidity('');
  }
})

email.addEventListener('input', (event) => {
  if(event.currentTarget.value) {
    event.currentTarget.setCustomValidity('');
  }
})

phoneNumber.addEventListener('input', (event) => {
  if(event.currentTarget.value) {
    event.currentTarget.setCustomValidity('');
  }
})

form.addEventListener('submit', (event) => {
  const validation = validInputs();
  if(!validation) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
})

function validInputs() {
  console.log('validating');
  if(!firstName.value) {
    firstName.setCustomValidity('first name must be specified');
  }
  if(!lastName.value) {
    lastName.setCustomValidity('last name must be specified');
  }
  if(!email.value) {
    email.setCustomValidity('email must be specified');
  }
  if(!phoneNumber.value) {
    phoneNumber.setCustomValidity('phone number must be specified');
  }
  if(!password.value) {
    password.setCustomValidity('phone number must be specified');
  }
  return password.validity.valid&&firstName.validity.valid&&lastName.validity.valid&&email.validity.valid&&phoneNumber.validity.valid;
}