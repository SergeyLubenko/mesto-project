import { openPopup, closePopup } from "./utils.js";


import { addElementCard } from "./cards.js";

import {
  saveProfileContent,
  newCard,
  addNewAvatar,
  getUsersData,
  getCards,
} from "./api.js";

const popupEdit = document.querySelector(".popup_edit");

const profileForm = popupEdit.querySelector(".popup__form");
const formInputName = profileForm.querySelector(".form__input_name");
const formInputSearch = profileForm.querySelector(".form__input_search");

const buttonSubmitProfile = document.querySelector(".form__save-button");
const profile = document.querySelector(".profile");

const popupAvatar = document.querySelector(".popup_avatar");

const formAvatar = popupAvatar.querySelector(".form__avatar");
const inputAvatar = popupAvatar.querySelector(".form__input-avatar");

const formAdd = document.querySelector(".form-add");
const popupAdd = document.querySelector(".popup_add");
const inputName = formAdd.querySelector(".form__input_name");
const inputSerch = formAdd.querySelector(".form__input_search");
const image = document.querySelector("#link");
const name = document.querySelector("#title");
const elements = document.querySelector(".elements__grid");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileAvatar = document.querySelector(".profile__avatar");

export function handleOpenAvatar() {
  openPopup(popupAvatar);
}

const saveLoading = (
  isLoading,
  button,
  buttonText = "Сохранить",
  loadingText = "Сохранение..."
) => {
  if (isLoading) {
    button.textContent = loadingText;
  } else {
    button.textContent = buttonText;
  }
};

/* функция отправки формы профиля */
function handleProfileFormSubmit(events) {
  events.preventDefault();
  saveLoading(true, buttonSubmitProfile);
  saveProfileContent(formInputName.value, formInputSearch.value)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileSubtitle.textContent = res.about;
      closePopup(popupEdit);
      evt.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveLoading(false, buttonSubmitProfile);
    });
}
/* функция отправки формы аватара */
function handleAvatarFormSubmit(event) {
  event.preventDefault();
  saveLoading(true, buttonSubmitProfile);
  addNewAvatar(inputAvatar.value)
    .then((res) => {
      profileAvatar.src = res.avatar;
      closePopup(popupAvatar);
      evt.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveLoading(false, buttonSubmitProfile);
    });
}

export function handleOpenPopupEdit() {
  openPopup(popupEdit);
  formInputName.value = profileTitle.textContent;
  formInputSearch.value = profileSubtitle.textContent;
}
/* функция отправки формы карточки */
function handleAddSubmit(event) {
  event.preventDefault();
  saveLoading(true, buttonSubmitProfile);
  newCard(inputName.value, inputSerch.value)
    .then((card) => {
      elements.prepend(addElementCard(card, profile));
      closePopup(popupAdd);
      event.target.reset();
      // const cards = { name: name.value, link: image.value };
      closePopup(popupAdd);
      // renderElementCard(elements, cards);
      // event.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveLoading(false, buttonSubmitProfile);
    });
}

formAdd.addEventListener("submit", (event) => {
  handleAddSubmit(event);
});
formAvatar.addEventListener("submit", (event) => {
  handleAvatarFormSubmit(event);
});

export function handleOpenAdd() {
  openPopup(popupAdd);
}
profileForm.addEventListener("submit", handleProfileFormSubmit);


