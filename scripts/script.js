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
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_add");
const closeButton = document.querySelector(".popup__close-icon");
const closeButtonAdd = popupAdd.querySelector(".popup__close-icon");
const profileSubmitContent = document.querySelector(".form__save-button");
const profileFormAdd = popupAdd.querySelector(".form-add");

const name = document.querySelector("#UserName");
const image = document.querySelector("#linkImg");

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
profileForm.addEventListener("submit", handleProfileFormSubmit);

addButton.addEventListener("click", function () {
  openPopup(popupAdd);
  formInputName.value = profileTitle.textContent;
  formInputSearch.value = profileSubtitle.textContent;
});

//

//Переменные для попапа добавления карточки
// const add = document.querySelector("#add");

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

  const deleteCard = newElementCard.querySelector(".element__delete-button");
  const cardButtonDelete = (event) => {
    event.target.closest(".element").remove();
  };

  deleteCard.addEventListener("click", cardButtonDelete);

  // Открываем попав imageZoom+название

  const zoomImage = () => {
    popupImage.classList.add("popup_opened");
    popupImageZoom.src = cards.link;
    popupImageZoom.alt = cards.name;
    popupImageText.textContent = cards.name;
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
  // const name = document.querySelector("#UserName");
  // const image = document.querySelector("#linkImg");
  const cards = { name: name.value, link: image.value };
  closePopup(popupAdd);
  renderElementCard(elements, cards);
  event.target.reset();
});
