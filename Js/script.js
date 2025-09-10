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
    localStorage.setItem("darkMode", document.documentElement.classList.contains("dark"));
  });
});

// Go top Btn
let Topbutton = document.getElementById("go-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  // Set value for the time that btn should be in the page
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
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
  } else {
    langMenu.style.opacity = 0;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dealershipsLink = document.querySelector(".Car-Shop-1");
  const financingLink = document.querySelector(".Car-Shop-2");
  const loginModal = document.getElementById("loginModal");
  const closeModal = document.querySelector(".modal .close");
  const loginRegisterBtn = document.querySelector(".Login-Register");
  const loginRegisterMenu = document.querySelector(".Login-Register-menu");
  const token = localStorage.getItem("token");
  // Update login button based on token presence
  const updateLoginButton = () => {
    if (token) {
      loginRegisterBtn.textContent = "Logout";
      loginRegisterBtn.href = "#";
      loginRegisterMenu.textContent = "Logout";
      loginRegisterMenu.href = "#";
    } else {
      loginRegisterBtn.textContent = "Sign Up";
      loginRegisterBtn.href = "./Sign-Up/Login-Register.html";
      loginRegisterMenu.textContent = "Sign Up";
      loginRegisterMenu.href = "./Sign-Up/Login-Register.html";
    }
  };
  updateLoginButton();
  loginRegisterBtn.addEventListener("click", (event) => {
    if (token) {
      localStorage.clear();
      loginRegisterBtn.textContent = "Sign Up";
      window.location.reload();
    }
  });
  loginRegisterMenu.addEventListener("click", (event) => {
    if (token) {
      localStorage.clear();
      loginRegisterMenu.textContent = "Sign Up";
      window.location.reload();
    }
  });
  const showModal = () => {
    if (!token) {
      loginModal.style.display = "block";
    }
  };
  closeModal.onclick = () => {
    loginModal.style.display = "none";
  };
  window.onclick = (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
  };
  // Show modal on 75% scroll
  window.onscroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollPosition / documentHeight >= 0.75 && !localStorage.getItem("modalShown")) {
      showModal();
      localStorage.setItem("modalShown", "true");
    }
  };
  const handleNavigation = (event, url) => {
    if (!token) {
      event.preventDefault();
      showModal();
    } else {
      window.location.href = url;
    }
  };
  dealershipsLink.addEventListener("click", (event) =>
    handleNavigation(event, "./CarShopOne/CarShopOne.html")
  );
  financingLink.addEventListener("click", (event) =>
    handleNavigation(event, "./CarShopTwo/CarShopTwo.html")
  );
  // Theme switcher
  const themeSwitch = document.querySelector(".mode-switch");
  themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

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
