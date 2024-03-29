//burger
const burger = document.querySelector('.burger');
const cross = document.querySelector('.cross');
const nav = document.querySelector('.nav');
const dark = document.querySelector('.dark');

const togglenMenu = (action) => {
  nav.classList[action]('open');
  document.body.classList[action]('lock');
};

burger.addEventListener('click', () => togglenMenu('add'));
cross.addEventListener('click', () => togglenMenu('remove'));
dark.addEventListener('click', () => togglenMenu('remove'));
nav.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    togglenMenu('remove');
  }
});

//form validation

const formElements = document.querySelectorAll('.input');
const inputFields = document.querySelectorAll('.input-selector');
const form = document.querySelector('.form');

const validateText = (value) => {
  if (value.length >= 2 && value.length <= 50) return true;
  return false;
};

const validateEmail = (value) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value);
};

const validateArea = (value) => {
  if (value.length >= 2 && value.length <= 200) return true;
  return false;
};

const validateElement = (element) => {
  const type = element.type;
  const value = element.value;
  switch (type) {
    case 'text':
      return validateText(value);
    case 'email':
      return validateEmail(value);
    case 'textarea':
      return validateArea(value);
    case 'checkbox':
      return element.checked;
  }
};

const validateForm = () => {
  formElements.forEach((el) => el.classList.remove('invalid'));
  const inputFieldsArray = Array.from(inputFields);
  const invalidElements = inputFieldsArray.filter((el) => !validateElement(el));

  invalidElements.forEach((el) => el.parentElement.classList.add('invalid'));

  return invalidElements.length === 0;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputFields.forEach((el) => el.addEventListener('input', validateForm));
  if (validateForm()) {
    sendFormData();
    clearFields();
  }
});

const clearFields = () => {
  inputFields.forEach((el) => el.removeEventListener('input', validateForm));
  inputFields.forEach((el) => {
    if (el.type === 'checkbox') {
      el.checked = false;
    } else {
      el.value = '';
    }
  });
  console.log('valid');
};

//http request example
const sendFormData = () => {
  const payload = new FormData(form);

  fetch('http://httpbin.org/post', {
    method: 'POST',
    body: payload,
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};
