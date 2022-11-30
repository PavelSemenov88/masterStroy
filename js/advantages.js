'use strict';
const advantagesContainer = document.querySelector('.advantages__cards');

const pullCardAdvantage = () => fetch('/db/advantage.json')
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      console.log('ERROR');
      throw Error;
    }
  })
  .then(data => {
    data.forEach(advantage => {
      const cardAdvantage = document.createElement('div');
      cardAdvantage.classList.add('advantage');
      cardAdvantage.innerHTML = `
        <img src="./db/advantage/${advantage.img}" class="advantage__img" alt="">
        <h3 class="advantage__h3">${advantage.title}</h3>
        <p class="advantage__p">${advantage.text}</p>
    `;
      advantagesContainer.append(cardAdvantage);
    });

  })
  .catch(error => {
    alert('Ошибка: ' + error.messenger)
  });
pullCardAdvantage();