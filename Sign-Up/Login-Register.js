"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");
  const loginRoot = document.querySelector(".login-root");
  const loginSuccess = document.getElementById("loginSuccess");
  const logoutButton = document.getElementById("Log-out-btn");

  // Check if token exists

  if (token) {
    // Token exists, show login success

    loginRoot.style.display = "none";
    loginSuccess.style.display = "flex";
  } else {
    // Token doesn't exist, show login form

    loginRoot.style.display = "flex";
    loginSuccess.style.display = "none";
  }

  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");
  const togglePasswordIcon = togglePassword.querySelector("i");

  togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Toggle the eye icon

    togglePasswordIcon.classList.toggle("bx-show");
    togglePasswordIcon.classList.toggle("bx-hide");
  });

  // login form submission

  const loginForm = document.getElementById("stripe-login");
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);

      // Hide login form and show success message

      loginRoot.style.display = "none";
      loginSuccess.style.display = "flex";
    } catch (err) {
      console.error(err);
      alert("Username or password incorrect");
    }
  });
});

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
