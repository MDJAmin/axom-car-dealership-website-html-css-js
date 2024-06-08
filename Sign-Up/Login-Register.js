"use strict";
// hide passowrd inp
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById('passwordInput');
    const togglePassword = document.getElementById('togglePassword');
    const togglePasswordIcon = togglePassword.querySelector('i');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the eye icon
        togglePasswordIcon.classList.toggle('bx-show');
        togglePasswordIcon.classList.toggle('bx-hide');
    });

    // Handle login form submission
    const loginForm = document.getElementById('stripe-login');
    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        try {
            const res = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            if (!res.ok) {
                throw new Error('Login failed');
            }

            const data = await res.json();
            localStorage.setItem('token', data.token);

            // Hide login form and show success message
            document.querySelector('.login-root').style.display = 'none';
            document.getElementById('loginSuccess').style.display = 'flex';
        } catch (err) {
            console.error(err);
            alert("Username or password incorrect");
        }
    });
});
