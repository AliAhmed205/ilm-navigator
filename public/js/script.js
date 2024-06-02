document.addEventListener('DOMContentLoaded', () => {
  console.log('script found')
  const registerBtn = document.getElementById('register-button')
  const loginBtn = document.getElementById('login-button')
  const loginSection = document.getElementById('login-section')
  const registerSection = document.getElementById('register-section')
  const loginForm = document.querySelector('#login-section form');
  const registerForm = document.querySelector('#register-section form');

  registerSection.style.display = "none"

  registerBtn.addEventListener("click", () => {
    loginSection.style.display = "none"
    registerSection.style.display = "block"
    registerForm.style.animation = "none";
    registerForm.style.opacity = 1;
  })

  loginBtn.addEventListener("click", () => {
    registerSection.style.display = "none"
    loginSection.style.display = "block"
    loginForm.style.animation = "none";
    loginForm.style.opacity = 1;
  })
})