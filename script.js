const messageEl = document.querySelector(".form-message");

const buttonEl = document.querySelector(".submit-button");

buttonEl.addEventListener("click", function (e) {
  e.preventDefault();
  messageEl.textContent = "Thanks for submitting!";
});
