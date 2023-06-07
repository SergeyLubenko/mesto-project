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

export {
  config,
  editButton,
  addButton,
  profileAvatarButton,
  formInputName,
  formInputSearch,
};
// 