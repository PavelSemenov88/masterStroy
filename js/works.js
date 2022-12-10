'use strict';
const photosContainer = document.querySelector('.works__photo');

const pullCardPhoto = () => fetch('../db/photo.json')
.then(res => {
  if (res.ok) {
    return res.json()
  } else {
    console.log('ERROR');
    throw Error;
  }
})
.then(data => {
  data.forEach(photo => {
    const cardPhoto = document.createElement('img');
    cardPhoto.classList.add('photo');
    cardPhoto.setAttribute('src', `../db/${photo.img}`)
    photosContainer.append(cardPhoto);
  });

})
.catch(error => {
  alert('Ошибка: ' + error.messenger)
});
pullCardPhoto();