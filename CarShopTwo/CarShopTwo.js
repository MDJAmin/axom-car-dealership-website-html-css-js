// "use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   const items = document.querySelectorAll(".slider-item");
//   const leftArrow = document.getElementById("left-arrow");
//   const rightArrow = document.getElementById("right-arrow");
//   let currentIndex = 0;

//   function showItem(index) {
//     items.forEach((item, i) => {
//       item.classList.toggle("active", i === index);
//     });
//   }

//   rightArrow.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % items.length;
//     showItem(currentIndex);
//   });

//   leftArrow.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + items.length) % items.length;
//     showItem(currentIndex);
//   });

//   showItem(currentIndex);
// });

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".slider-item");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }

  function previousItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  }

  rightArrow.addEventListener("click", nextItem);
  leftArrow.addEventListener("click", previousItem);

  setInterval(nextItem, 15000);

  showItem(currentIndex);
});


// document.addEventListener('DOMContentLoaded', function () {
//     const sliderContainer = document.querySelector('.slider');
//     const leftArrow = document.getElementById('left-arrow');
//     const rightArrow = document.getElementById('right-arrow');
//     let currentIndex = 0;

//     function moveSlider(distance) {
//       const currentPosition = currentIndex * -450;
//       currentIndex = (currentIndex + distance) % 3;
//       const newPosition = currentIndex * -450;
//       sliderContainer.style.transform = `translateX(${currentPosition + newPosition}px)`;
//     }

//     rightArrow.addEventListener('click', () => {
//       moveSlider(1);
//     });

//     leftArrow.addEventListener('click', () => {
//       moveSlider(-1);
//     });
//   });

// document.addEventListener('DOMContentLoaded', function () {
//     const cards = document.querySelectorAll('.section-2 > div > div');
//     const leftArrow = document.querySelector('.section-2 svg.arrow:first-of-type');
//     const rightArrow = document.querySelector('.section-2 svg.arrow:last-of-type');
//     let currentIndex = 0;

//     function showCards() {
//       cards.forEach((card, index) => {
//         card.style.display = index < 3 ? 'block' : 'none';
//       });
//     }

//     function moveSlider(direction) {
//       currentIndex = (currentIndex + direction + cards.length) % cards.length;
//       const firstCard = cards[currentIndex];
//       const secondCard = cards[(currentIndex + 1) % cards.length];
//       const thirdCard = cards[(currentIndex + 2) % cards.length];

//       cards.forEach(card => {
//         card.style.transition = 'transform 0.5s';
//         card.style.transform = 'translateX(-100%)';
//       });

//       firstCard.style.transform = 'translateX(0)';
//       secondCard.style.transform = 'translateX(0)';
//       thirdCard.style.transform = 'translateX(0)';
//     }

//     rightArrow.addEventListener('click', () => {
//       moveSlider(1);
//     });

//     leftArrow.addEventListener('click', () => {
//       moveSlider(-1);
//     });

//     showCards();
//   });

// document.addEventListener('DOMContentLoaded', function () {
//     const cards = document.querySelectorAll('.section-2 > div > div');
//     const leftArrow = document.querySelector('.section-2 svg.arrow:first-of-type');
//     const rightArrow = document.querySelector('.section-2 svg.arrow:last-of-type');
//     let currentIndex = 0;

//     function showCard(index) {
//       cards.forEach((card, i) => {
//         card.style.opacity = i === index ? '1' : '0';
//         card.style.display = i === index ? 'block' : 'none';
//       });
//     }

//     rightArrow.addEventListener('click', () => {
//       currentIndex = (currentIndex + 1) % cards.length;
//       showCard(currentIndex);
//     });

//     leftArrow.addEventListener('click', () => {
//       currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//       showCard(currentIndex);
//     });

//     showCard(currentIndex);
//   });
