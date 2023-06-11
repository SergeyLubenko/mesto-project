const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-22",
  headers: {
    authorization: "533adc04-bcba-4000-88a7-903fbfe5b6cf",
    "Content-Type": "application/json",
  },
};
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const formInputName = document.querySelector(".form__input_name");
const formInputSearch = document.querySelector(".form__input_search");
const profileAvatarButton = document.querySelector(".profile__avatar-button");



const profileSelectors = {
  profileTitle: ".profile__title",
  profileSubtitle: ".profile__subtitle",
  profileAvatar: ".profile__avatar",
};

// const enableValidation = {
//   formSelector: ".form",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__save-button",
//   inactiveButtonClass: "form__button_inactive",
//   inputErrorClass: "form__input_type_error",
//   errorClass: "form__input-error_active",
// };

export {
  config,
  profileSelectors,
  editButton,
  addButton,
  profileAvatarButton,
  formInputName,
  formInputSearch,
};
