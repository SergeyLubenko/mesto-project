//
//
//
import "../pages/index.css";
import { renderElementCard, addElementCard } from "./cards.js";
import { enableValidation } from "./validate.js";
import {
  handleOpenPopupEdit,
  handleOpenAvatar,
  handleOpenAdd,
} from "./modal.js";

import { closePopup } from "./utils.js";

import {
  // passProfileDate,
  // passNewCard,
  // addAvatar,
  getProfileContent,
  getInCards,
} from "./api.js";

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const avatarButton = document.querySelector(".profile__avatar-button");
const elements = document.querySelector(".elements__grid");

const popups = document.querySelectorAll(".popup");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileAvatar = document.querySelector(".profile__avatar");

let profile;

Promise.all([getProfileContent(), getInCards()])
  .then(([user, cards]) => {
    profileTitle.textContent = user.name;
    profileSubtitle.textContent = user.about;
    profile = user._id;
    profileAvatar.src = user.avatar;
    cards.forEach((cards) => {
      elements.append(addElementCard(cards, profile));
    });
  })
  .catch((err) => {
    console.log(err, "ошибка");
  });

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-icon")) {
      closePopup(popup);
    }
  });
});

avatarButton.addEventListener("click", function () {
  handleOpenAvatar();
});

editButton.addEventListener("click", function () {
  handleOpenPopupEdit();
});

addButton.addEventListener("click", function () {
  handleOpenAdd();
});

// initialCards.forEach((cards) => {
//   renderElementCard(elements, cards);
// });

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});
