import { openPopup } from "./utils.js";

export const initialCards = [
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

const template = document.querySelector("#template");
const popupImage = document.querySelector(".popup-image");
const popupImageZoom = document.querySelector(".popup-image__zoom");
const popupImageText = document.querySelector(".popup-image__text");

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
export const renderElementCard = (section, item) => {
  section.prepend(addElementCard(item));
};
