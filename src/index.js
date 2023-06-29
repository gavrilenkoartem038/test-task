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
