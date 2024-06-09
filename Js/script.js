"use strict";
// Dark and light Mood
// Get items
let moodBtn = document.querySelector("#Moon");
document.addEventListener("DOMContentLoaded", () => {
  const modeSwitch = document.querySelector(".mode-switch");

  // Save in local Storage

  const darkModeStored = localStorage.getItem("darkMode");

  // Check if its dark or light

  if (darkModeStored === "true") {
    document.documentElement.classList.add("dark");
    modeSwitch.classList.add("active");
  }
  modeSwitch.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");
    localStorage.setItem(
      "darkMode",
      document.documentElement.classList.contains("dark")
    );
  });
});

// Go top Btn

let Topbutton = document.getElementById("go-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {

  // Set value for the time that btn should be in the page 

  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    Topbutton.style.display = "block";
  } else {
    Topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((el) => observer.observe(el));
const hiddenP = document.querySelectorAll(".hiddenP");
hiddenP.forEach((el) => observer.observe(el));
const hiddeCardsOne = document.querySelectorAll(".hiddenCardsOne");
hiddeCardsOne.forEach((el) => observer.observe(el));
const hiddenCardsTwo = document.querySelectorAll(".hiddenCardsTwo");
hiddenCardsTwo.forEach((el) => observer.observe(el));
const hiddeninp = document.querySelectorAll(".up-hidden-input");
hiddeninp.forEach((el) => observer.observe(el));
// const hiddenNav = document.querySelectorAll(".drop-down-nav");
// hiddenNav.forEach((el) => observer.observe(el));
const hiddenCardsThree = document.querySelectorAll(".hiddenCardsThree-p");
hiddenCardsThree.forEach((el) => observer.observe(el));

const showup = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("up-show");
    } else {
      entry.target.classList.remove("up-show");
    }
  });
});
const hideup = document.querySelectorAll(".up-hidden");
hideup.forEach((el) => showup.observe(el));

let langBtn = document.querySelector(".lang");
let langMenu = document.querySelector(".lang-menu");

langBtn.addEventListener("click", () => {
  if (langMenu.style.opacity === "0") {
    langMenu.style.opacity = 1;
    langMenu.style.display = "block";
  } else {
    langMenu.style.opacity = 0;
    langMenu.style.display = "none";
  }
});

