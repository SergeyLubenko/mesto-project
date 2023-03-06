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

// открываем попап
function openPopup() {
  popup.classList.add("popup_opened");
  formInputName.value = profileTitle.textContent;
  formInputSearch.value = profileSubtitle.textContent;
}
profileEditButton.addEventListener("click", openPopup);

// закрываем попап
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
const addButton = document.querySelector(".profile__add-button");
const CloseAdd = document.querySelector("#close-add");

//Открываем попап  карточки
function openAddPopup() {
  add.classList.add("popup_opened");
}

//Закрыть попап карточки
function closeAddPopup() {
  add.classList.remove("popup_opened");
}

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

// Переменные для изображение

const popupImage = document.querySelector("#popup-image");
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

  // лайк

  const elementLike = newElementCard.querySelector(".element__like");
  elementLike.addEventListener("click", () => {
    elementLike.classList.toggle("element_like_button-active");
  });

  const deleteCard = newElementCard.querySelector(".element__delete-button");
  const cardDelete = (event) => {
    event.target.closest(".element").remove();
  };

  deleteCard.addEventListener("click", cardDelete);
  elementLike.addEventListener("click", elementLike);

  // Открываем попав imageZoom+название

  const imageZoom = () => {
    popupImage.classList.add("popup-image_opened");
    popupImageZoom.src = cards.link;
    popupImageText.textContent = cards.name;
  };
  newImage.addEventListener("click", imageZoom);

  // закрываем imageZoom

  const closeImage = document.querySelector(".popup-image");

  function closePopup() {
    closeImage.classList.remove("popup-image_opened");
  }
  closeImage.addEventListener("click", closePopup);

  return newElementCard;
};
// // Добавление названия в карточку

const renderElementCard = (car, cards) => {
  car.prepend(addElementCard(cards));
};
// // Вставка массива в карточку

initialCards.forEach((cards) => {
  renderElementCard(elements, cards);
});

formAdd.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#UserName");
  const image = document.querySelector("#linkImg");
  const cards = { name: name.value, link: image.value };

  renderElementCard(elements, cards);
  closeAddPopup();
  event.target.reset();
});
