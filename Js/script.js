"use strict";

document.addEventListener("DOMContentLoaded", function () {
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