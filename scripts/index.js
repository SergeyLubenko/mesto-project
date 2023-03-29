// import initialCards from "../src/components/cards.js";

const profilePopup = document.querySelector("#edit");

// const popup = document.querySelector(".popup");
const zoomPopup = document.querySelector(".popup-image");
const closeButtonZoom = zoomPopup.querySelector(".popup__close-icon");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formInputName = document.querySelector(".form__input_name");
const formInputSearch = document.querySelector(".form__input_search");
const profileForm = document.querySelector(".popup__form");

const popupEdit = document.querySelector(".popup_edit");

const popupAdd = document.querySelector(".popup_add");
const closeButton = document.querySelector(".popup__close-icon");
const closeButtonAdd = popupAdd.querySelector(".popup__close-icon");

const popupProfile = document.querySelector("#popup-profile");
const popupPicture = document.querySelector("#popup-picture");

const nameProfile = document.getElementById("name");
const aboutProfile = document.getElementById("about");
const name = popupPicture.querySelector("#title");
const image = document.querySelector("#link");

const avatarButton = document.querySelector(".profile__avatar-button");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const popupAvatar = document.querySelector(".popup_avatar");
const avatarPopup = document.querySelector(".popup_avatar");
const avatarSubmitButton = document.querySelector(".form__save-button");
const inputAvatar = document.querySelector(".form__input-avatar");
const formAvatar = document.querySelector(".form__avatar");
const profileAvatar = document.querySelector(".profile__avatar");

// добавление авы
avatarButton.addEventListener("click", function () {
  openPopup(popupAvatar);
});

formAvatar.addEventListener("submit", (event) => {
  event.preventDefault();
  profileAvatar.src = inputAvatar.value;
  closePopup(popupAvatar);
  event.target.reset();
});

// функция открыть попап
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

document.querySelectorAll(".popup__close-icon").forEach((button) => {
  const buttonsPopup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(buttonsPopup));
});

editButton.addEventListener("click", function () {
  openPopup(popupEdit);
  formInputName.value = profileTitle.textContent;
  formInputSearch.value = profileSubtitle.textContent;
});

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = formInputName.value;
  profileSubtitle.textContent = formInputSearch.value;
  closePopup(popupEdit);
}

addButton.addEventListener("click", function () {
  openPopup(popupAdd);
  formInputName.value = profileTitle.textContent;
  formInputSearch.value = profileSubtitle.textContent;
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

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

// Переменные для карточек

const template = document.querySelector("#template");
const elements = document.querySelector(".elements__grid");
const formAdd = document.querySelector(".form-add");

// Переменные для изображение

const popupImage = document.querySelector(".popup-image");
const popupImageZoom = document.querySelector(".popup-image__zoom");
const popupImageText = document.querySelector(".popup-image__text");

// Добавлеем элементы  в карточки

const addElementCard = (cards) => {
  const newElementCard = template.content.cloneNode(true);
  const newTitle = newElementCard.querySelector(".element__title");
  const newImage = newElementCard.querySelector(".element__img");

  // Добавили картинку

  newTitle.textContent = cards.name;
  newImage.src = cards.link;
  newImage.alt = cards.name;

  // лайк

  const elementLike = newElementCard.querySelector(".element__like");
  elementLike.addEventListener("click", () => {
    elementLike.classList.toggle("element_like_button-active");
  });

  const deleteCardButton = newElementCard.querySelector(
    ".element__delete-button"
  );

  const deleteCard = (event) => {
    event.target.closest(".element").remove();
  };

  deleteCardButton.addEventListener("click", deleteCard);

  // Открываем попав imageZoom+название

  const zoomImage = () => {
    popupImageZoom.src = cards.link;
    popupImageZoom.alt = cards.name;
    popupImageText.textContent = cards.name;
    openPopup(popupImage);
  };

  newImage.addEventListener("click", zoomImage);

  return newElementCard;
};

// // Добавление названия в карточку
const renderElementCard = (section, item) => {
  section.prepend(addElementCard(item));
};
// // Вставка массива в карточку

initialCards.forEach((cards) => {
  renderElementCard(elements, cards);
});

formAdd.addEventListener("submit", (event) => {
  event.preventDefault();
  const cards = { name: name.value, link: image.value };

  closePopup(popupAdd);

  renderElementCard(elements, cards);
  event.target.reset();
});
