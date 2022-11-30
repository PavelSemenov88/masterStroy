'use strict';
const cardsContainer = document.querySelector('.top__card');


const pullCard = () => fetch('/db/price.json')
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      console.log('ERROR');
      throw Error;
    }
  })
  .then(data => {
    data.forEach(card => {
      const cardBlock = document.createElement('div');
      cardBlock.classList.add('cardTop');
      cardBlock.id = card.id;
      cardBlock.innerHTML = `
          <div class="card__description">
              <img src="./db/${card.img}" alt="${card.name}" class="card__description-img">
              <h3 class="card__description-title">${card.name}</h3>
              <div class="card__description-text">
                <p>Размер: ${card.size}</p>
                <p>Количество: ${card.quantity}</p>
                <p>Цвета в наличии: ${card.colorsAvailable}</p>
              </div>
              <div class="card__description-color">
                <span class="color-1 color" style="background-color: #${card.catalog.color1};"></span>
                <span class="color-2 color" style="background-color: #${card.catalog.color2};"></span>
                <span class="color-3 color" style="background-color: #${card.catalog.color3};"></span>
                <span class="color-4 color" style="background-color: #${card.catalog.color4};"></span>
                <span class="color-5 color" style="background-color: #${card.catalog.color5};"></span>
                <span class="color-6 color" style="background-color: #${card.catalog.color6};"></span>
                <span class="color-7 color" style="background-color: #${card.catalog.color7};"></span>
                <span class="color-8 color" style="background-color: #${card.catalog.color8};"></span>
              </div>
            </div>
            <div class="card__price">
              <div class="card__price-content">
                <p class="content__color">${card.catalog.сolorName1}</p>
                <p class="content__text"><span>420</span> руб кв/м</p>
              </div>
              <button class="card__price-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path d="M9.81818 0V9.5M9.81818 19V9.5M9.81818 9.5H0M9.81818 9.5H20" stroke="white"/>
                </svg>
              </button>
            </div>
        `;
      cardsContainer.append(cardBlock);
    });
    const cardsTop = document.querySelectorAll('.cardTop');
    const contentColor = document.querySelectorAll('.content__color');
    const contentPrice = document.querySelectorAll('.content__text > span');


    cardsTop.forEach((card, cardIdx) => {
      card.addEventListener('click', (event) => {
        if (event.target.classList.contains('color')) {
          const numb = event.target.className.slice(6, 7);
          const numbColor = 'сolorName' + numb;
          const numbPrice = 'price' + numb;
          contentColor.forEach((color, colorIdx) => {
            if (cardIdx === colorIdx) {
              color.innerHTML = data[cardIdx].catalog[numbColor];
            }
          })

          contentPrice.forEach((price, priceIdx) => {
            if (cardIdx === priceIdx) {
              price.innerHTML = data[cardIdx].catalog[numbPrice]
            }
          })
        }
      })
    })
  })
  .catch(error => {
    alert('Ошибка: ' + error.messenger)
  })
pullCard();


