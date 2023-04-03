//
//
//
import "../pages/index.css";
import { renderElementCard, initialCards } from "./cards.js";
import { enableValidation } from "./validate.js";
import {
  handleOpenPopupEdit,
  handleOpenAvatar,
  handleOpenAdd,
} from "./modal.js";

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const avatarButton = document.querySelector(".profile__avatar-button");
const elements = document.querySelector(".elements__grid");

avatarButton.addEventListener("click", function () {
  handleOpenAvatar();
});

editButton.addEventListener("click", function () {
  handleOpenPopupEdit();
});

addButton.addEventListener("click", function () {
  handleOpenAdd();
});

initialCards.forEach((cards) => {
  renderElementCard(elements, cards);
});

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});
