"use strict";
let moodBtn = document.querySelector("#Moon");
document.addEventListener("DOMContentLoaded", () => {
  const modeSwitch = document.querySelector(".mode-switch");
  const darkModeStored = localStorage.getItem("darkMode");

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

let Topbutton = document.getElementById("go-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
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

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//     // else {
//     //   entry.target.classList.remove("show");
//     // }
//   });
// });
// const hiddenEl = document.querySelectorAll(".hidden");
// hiddenEl.forEach((el) => observer.observe(el));

// const showingP = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add("showP");
//     }
//   });
// });
// const hiddenP = document.querySelectorAll(".hiddenP");
// hiddenP.forEach((el) => showingP.observe(el));
// console.log(showingP)

// const showCardsone = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add("showCards");
//     }
//   });
// });
// const hiddeCardsOne = document.querySelectorAll(".hiddenCardsOne",);
// const hiddenCardsTwo = document.querySelectorAll(".hiddenCardsTwo",);
// hiddeCardsOne.forEach((el) => showCardsone.observe(el));
// hiddenCardsTwo.forEach((el) => showCardsone.observe(el));

// const showup = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add("up-show");
//     }
//         else {
//       entry.target.classList.remove("up-show");
//     }
//   });
// });
// const hideup = document.querySelectorAll(".up-hidden");
// hideup.forEach((el) => showup.observe(el));

// const itemsEl=document.querySelector('.section-3-product-div')

// const scrollFunc=()=>{
//     const triggerBottom=window.innerHeight * .8
//     for(let i=0;i<itemsEl.length;i++){
//         const top=itemsEl[i].getBoundingClientRect().top
//         if(top<triggerBottom){
//             itemsEl[i].classList.add('show')
//         }else{
//             itemsEl[i].classList.remove('show')

//         }
//     }
// }
// window.addEventListener('scroll',scrollFunc)

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
