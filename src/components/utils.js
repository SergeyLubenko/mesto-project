function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
// закрытие на еверлайн
document.addEventListener("click", function (evt) {
  if (evt.target.classList.remove("popup_opened")) {
    closePopup(popup);
  }
});

// закрытие нв esc
document.querySelectorAll(".popup__close-icon").forEach(function (button) {
  const popup = button.closest(".popup");
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });
});

document.querySelectorAll(".popup__close-icon").forEach((button) => {
  const buttonsPopup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(buttonsPopup));
});

export { openPopup, closePopup };
