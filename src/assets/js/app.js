const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const langIcon = document.querySelector('.lang__icon');
const langList = document.querySelector('.lang__list');
const navDrop = document.querySelector('.nav__link.nav-drop');
const navDropList = document.querySelector('.nav__drop');

const toggleClass = (dir, className) => {
  dir.classList.toggle(className);
};

const setUpListener = (dir, func) => {
  dir.addEventListener('click', func);
};

setUpListener(burgerBtn, () => toggleClass(nav, 'burger-open'));
setUpListener(langIcon, () => toggleClass(langList, 'lang-open'));
setUpListener(navDrop, () => toggleClass(navDropList, 'nav__drop-open'));
