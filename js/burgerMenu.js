'use strict';

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.burger-menu');

document.addEventListener('click', (e) => {

  if (e.target === burgerMenu) {
    console.dir(e.target);
    menu.classList.toggle('menu-active');
    burgerMenu.classList.toggle('burger-menu-active');
  } else {
    menu.classList.remove('menu-active');
    burgerMenu.classList.remove('burger-menu-active');
  }
})


