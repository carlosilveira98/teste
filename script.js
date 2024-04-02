document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const btnPopup = document.querySelector(".btnLogin-popup");
  const iconClose = document.querySelector(".icon-close");
  const emailInput = document.getElementById("email-input");
  const usernameInput = document.getElementById("username-input");
  const passwordInput = document.getElementById("password-input");
  const passwordConfirmationInput = document.getElementById("password-confirmation-input");
  const checkboxInput = document.getElementById("checkbox-input");
  
  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });

  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });

  btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
  });

  iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
  });
});

function setError(input, message) {
  const control = input.parentElement;
  control.classList.add("error");
  control.classList.remove("success");
  control.querySelector(".error").innerText = message;
}

function setSuccess(input) {
  const control = input.parentElement;
  control.classList.remove("error");
  control.classList.add("success");
}

function isValidEmail(email) {
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
  return regex.test(email);
}
