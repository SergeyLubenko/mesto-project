import { openPopup } from "./utils.js";

import { deleteCard, addLike, deleteLike } from "./api.js";

const template = document.querySelector("#template");
const popupImage = document.querySelector(".popup-image");
const popupImageZoom = document.querySelector(".popup-image__zoom");
const popupImageText = document.querySelector(".popup-image__text");

function addElementCard(cards, userId) {
  const newElementCard = template.content.cloneNode(true);
  const newImage = newElementCard.querySelector(".element__img");
  const buttonDelete = newElementCard.querySelector(".element__delete-button");
  const elementLikeButton = newElementCard.querySelector(".element__like");
  const elementCounterLike = newElementCard.querySelector(".element__like-counter");
  // const newTitle = newElementCard.querySelector(".element__title");
  newImage.src = cards.link;
  newImage.alt = cards.name;
  newElementCard.querySelector(".element__title").textContent = cards.name;
  if (userId !== cards.owner._id) {
    buttonDelete.classList.add("element__delet-button-inactive");
  }
  buttonDelete.addEventListener("click", (evt) => {
    deleteCard(cards._id)
      .then(() => {
        deleteCards(evt);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  elementCounterLike.textContent = cards.likes.length;
  cards.likes.forEach(() => {
    if (cards.likes._id === userId) {
      elementLikeButton.classList.add("element_like_button-active");
    }
  });

  elementLikeButton.addEventListener("click", (evt) => {
    if (!evt.target.classList.contains("element_like_button-active")) {
      addLike(cards._id)
        .then((data) => {
          activeHeart(evt);
          elementCounterLike.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      deleteLike(cards._id)
        .then((data) => {
          activeHeart(evt);
          elementCounterLike.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const zoomImage = (evt) => {
    popupImageZoom.src = evt.target.src;
    popupImageZoom.alt = evt.target.alt;
    popupImageText.textContent = evt.target.alt;
    openPopup(popupImage);
  };

  newImage.addEventListener("click", zoomImage);
  return newElementCard;
}

function activeHeart(evt) {
  evt.target.classList.toggle("element_like_button-active");
}
const deleteCards = (event) => {
  event.target.closest(".element").remove();
};
export { addElementCard };

// // Добавление названия в карточку
export const renderElementCard = (section, item) => {
  section.prepend(addElementCard(item));
};
