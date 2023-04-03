// добавление авы
import { openPopup, closePopup } from "../utils.js";
import { renderElementCard } from "../components/cards.js";

const popupEdit = document.querySelector(".popup_edit");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileForm = popupEdit.querySelector(".popup__form");
const formInputName = profileForm.querySelector(".form__input_name");
const formInputSearch = profileForm.querySelector(".form__input_search");

const popupAvatar = document.querySelector(".popup_avatar");
const profileAvatar = document.querySelector(".profile__avatar");
const formAvatar = popupAvatar.querySelector(".form__avatar");
const inputAvatar = popupAvatar.querySelector(".form__input-avatar");

const formAdd = document.querySelector(".form-add");
const popupAdd = document.querySelector(".popup_add");
const image = document.querySelector("#link");
const name = document.querySelector("#title");
const elements = document.querySelector(".elements__grid");

export function handleOpenAvatar() {
  openPopup(popupAvatar);
}

function handleAvatarFormSubmit(event) {
  event.preventDefault();
  profileAvatar.src = inputAvatar.value;
  closePopup(popupAvatar);
  event.target.reset();
}
function handleProfileFormSubmit(events) {
  events.preventDefault();
  profileTitle.textContent = formInputName.value;
  profileSubtitle.textContent = formInputSearch.value;
  closePopup(popupEdit);
}

export function handleOpenPopupEdit() {
  openPopup(popupEdit);
  formInputName.value = profileTitle.textContent;
  formInputSearch.value = profileSubtitle.textContent;
}

formAvatar.addEventListener("submit", (event) => {
  handleAvatarFormSubmit(event);
});
function handleAddSubmit(event) {
  event.preventDefault();
  const cards = { name: name.value, link: image.value };
  closePopup(popupAdd);
  renderElementCard(elements, cards);
  event.target.reset();
}
formAdd.addEventListener("submit", (event) => {
  handleAddSubmit(event);
});
export function handleOpenAdd() {
  openPopup(popupAdd);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
