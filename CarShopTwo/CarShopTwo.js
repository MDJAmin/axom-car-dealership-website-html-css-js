"use strict";

// slider comments

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

  // set Interval time
  setInterval(nextItem, 15000);

  showItem(currentIndex);
});
