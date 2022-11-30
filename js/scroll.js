'use strict';
const listsHead = document.querySelectorAll('.menu__text');

listsHead.forEach(list => {
  list.addEventListener('click', (e) => {
    e.preventDefault();

    const ID = e.target.getAttribute('href');

    const elems = document.querySelector(`${ID}`);

    seamless.scrollIntoView(elems, {
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  })
})