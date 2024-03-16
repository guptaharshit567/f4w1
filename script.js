document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const submitButton = document.getElementById('submit-btn');
  
    let isEmailValid = false;
    let isPasswordValid = false;
    let isConfirmPasswordValid = false;
  
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
    const validatePassword = (password) => {
      return password.length >= 8;
    };
  
    const validateConfirmPassword = (confirmPassword) => {
      return confirmPassword === passwordInput.value;
    };
  
    emailInput.addEventListener('input', function() {
      isEmailValid = validateEmail(emailInput.value);
      if (isEmailValid) {
        emailInput.style.borderColor = 'green';
        emailError.textContent = '';
      } else {
        emailInput.style.borderColor = 'red';
        emailError.textContent = 'Please enter a valid email address';
      }
    });
  
    passwordInput.addEventListener('input', function() {
      isPasswordValid = validatePassword(passwordInput.value);
      if (isPasswordValid) {
        passwordInput.style.borderColor = 'green';
        passwordError.textContent = '';
      } else {
        passwordInput.style.borderColor = 'red';
        passwordError.textContent = 'Password must be at least 8 characters long';
      }
    });
  
    confirmPasswordInput.addEventListener('input', function() {
      isConfirmPasswordValid = validateConfirmPassword(confirmPasswordInput.value);
      if (isConfirmPasswordValid) {
        confirmPasswordInput.style.borderColor = 'green';
        confirmPasswordError.textContent = '';
      } else {
        confirmPasswordInput.style.borderColor = 'red';
        confirmPasswordError.textContent = 'Passwords do not match';
      }
    });
  
    submitButton.addEventListener('click', function() {
      if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Form submitted successfully');
      } else {
        alert('Can’t submit the form');
      }
    });
  });
  