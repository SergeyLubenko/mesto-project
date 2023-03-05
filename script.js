const popup = document.querySelector(".popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupButton = document.querySelector(".popup__button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formInputName = document.querySelector(".form__input_name");
const formInputSearch = document.querySelector(".form__input_search");
const popupForm = document.querySelector(".form");

const popupTypeCard = document.querySelector(".popup_type_card");
const profileAddButton = document.querySelector(".profile__add-button");
const popupButtonTypeClose = document.querySelector(".popup_button_type_close");
const editClose = document.querySelector("#close-edit");
// const closeImage = document.querySelector("#close-image");

function openPopup() {
  popup.classList.add("popup_opened");
  formInputName.value = profileTitle.textContent;
  formInputSearch.value = profileSubtitle.textContent;
}
profileEditButton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}
popupButton.addEventListener("click", closePopup);

function formSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = formInputName.value;
  profileSubtitle.textContent = formInputSearch.value;
  closePopup();
}

popupForm.addEventListener("submit", formSubmit);

function openEdit() {
  popupTypeCard.classList.add("popup_opened");
}
profileAddButton.addEventListener("click", openEdit);

function closeEdit() {
  popupTypeCard.classList.remove("popup_opened");
}
popupButtonTypeClose.addEventListener("click", closeEdit);

//Переменные для попапа добавления карточки
const add = document.querySelector("#add");
const addInput = document.querySelector(".profile__add-button");
const addClose = document.querySelector("#close-add");

//Открытие попапа добавления карточки
function openAddPopup() {
  add.classList.add("popup_opened");
}

//Закрытие попапа добавления карточки
function closeAddPopup() {
  add.classList.remove("popup_opened");
}

addClose.addEventListener("click", closeAddPopup);
addInput.addEventListener("click", openAddPopup);

const initialCards = [
  {
    name: "Калифорния",
    link: "https://images.unsplash.com/photo-1677629322685-bb7786037ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "Австралия",
    link: "https://images.unsplash.com/photo-1677833229604-38c9d9ebc643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "Порт",
    link: "https://images.unsplash.com/photo-1677679656900-9cb5f7c88a98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "Мост",
    link: "https://images.unsplash.com/photo-1677662375194-e5157a8e09b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNDR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "Бали",
    link: "https://images.unsplash.com/photo-1677709678802-529eb9305e9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "Серфинг",
    link: "https://images.unsplash.com/photo-1677709679024-fc005fb4feb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  },
];

// Переменные для карточек
const template = document.querySelector("#template");
const elements = document.querySelector(".elements__grid");
const formAdd = document.querySelector("#form-add");
// Переменные попапа увеличение изображения
const popupImage = document.querySelector("#popup-image");
const popupImagePicture = document.querySelector(".popup-image__picture");
const popupImageText = document.querySelector(".popup-image__text");
const popupClose = document.querySelector(".popup__close");

// Добавление элементов массива в карточки
const addElementCard = (cards) => {
  const newElementCard = template.content.cloneNode(true);
  const newTitle = newElementCard.querySelector(".element__title");
  const newImage = newElementCard.querySelector(".element__img");
  // Добавили картинку
  newTitle.textContent = cards.name;
  newImage.src = cards.link;

  // Ставим лайк карточке
  const cardLike = newElementCard.querySelector(".element__like");
  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("element_like_button-active");
  });
  const deleteCard = newElementCard.querySelector(".element__delete-button");
  const cardButtonDelete = (evt) => {
    evt.target.closest(".element").remove();
  };

  deleteCard.addEventListener("click", cardButtonDelete);
  cardLike.addEventListener("click", cardLike);

  // Открываем попав увеличенной фотографии и добавляем картинку и название
  const zoomImage = () => {
    popupImage.classList.add("popup-image_opened");
    popupImagePicture.src = cards.link;
    popupImageText.textContent = cards.name;
  };
  newImage.addEventListener("click", zoomImage);

  // const closeImage = document.querySelector(".popup__button");
  // Закрытие попапа увеличенной картинки

  const closeImage = document.querySelector(".popup__button");
  popupImage.classList.remove(".popup__button");
  const deleteZoomImage = () => {};

  closeImage.addEventListener("click", deleteZoomImage);

  return newElementCard;
};

// Добавление названия в карточку
const renderElementCard = (wrap, cards) => {
  wrap.prepend(addElementCard(cards));
};

// Вставика элементов массива в карточку
initialCards.forEach((cards) => {
  renderElementCard(elements, cards);
});

formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = document.querySelector("#denomination");
  const image = document.querySelector("#link-to-image");
  const cards = { name: name.value, link: image.value };

  renderElementCard(elements, cards);
  closeAddPopup();
  evt.target.reset();
});
