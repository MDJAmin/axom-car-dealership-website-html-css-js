"use strict";

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
});


