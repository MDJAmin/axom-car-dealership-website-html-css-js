"use strict";
// hamburger menu handel visibility

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuItems = document.querySelector(".hamburger-menu-items");

  hamburgerMenu.addEventListener("click", () => {
    menuItems.classList.toggle("show");
  });

  const handleResize = () => {
    if (window.innerWidth >= 769) {
      menuItems.classList.remove("show");
    }
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("load", handleResize);
});
