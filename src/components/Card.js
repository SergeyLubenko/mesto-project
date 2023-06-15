export default class Card {
  constructor({
    data,
    handleCardClick,
    handlerDeleteCard,
    handlerLike,
    selector,
    userId,
  }) {
    this._cardData = data;
    this._likes = data.likes;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handlerDeleteCard = handlerDeleteCard;
    this._handlerLike = handlerLike;
    this._userId = userId;
  }

  generate() {
    this._element = this._getElement();

    this._elementImage = this._element.querySelector(".element__img");

    this._elementImage.src = this._cardData.link;

    this._elementTitle = this._element.querySelector(".element__title");

    this._elementImage.alt = this._cardData.name;
    this._elementTitle.textContent = this._cardData.name;

    this._deleteButton = this._element.querySelector(".element__delete-button");
    this._elementCounterLike = this._element.querySelector(
      ".element__like-counter"
    );

    this._addLikes();
    this._elDeleteButtom();
    this._setEventListeners();

    return this._element;
  }

  getCardId() {
    return this._cardData._id;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  // проверка лайка
  isLiked() {
    return this._likes.some((user) => user._id === this._userId);
  }

  // состояние лайка и счетчика
  setDataLikes(cardData) {
    this._likes = cardData.likes;
    this._addLikes();
  }
  // проверка стоит ли лайк
  _addLikes() {
    this._elementCounterLike.textContent = this._likes.length;
    this._elementLikeButton = this._element.querySelector(".element__like");

    if (this.isLiked()) {
      this._elementLikeButton.classList.add("element_like_button-active");
    } else {
      this._elementLikeButton.classList.remove("element_like_button-active");
    }
  }

  _elDeleteButtom() {
    if (this._cardData.owner._id !== this._userId) {
      this._deleteButton.remove();
    }
  }

  _getElement() {
    const elementCard = document.querySelector(this._selector);
    return elementCard.content.querySelector(".element").cloneNode(true);
  }

  _setEventListeners() {
    this._elementImage.addEventListener("click", () =>
      this._handleCardClick({
        image: this._elementImage.src,
        title: this._elementTitle.textContent,
      })
    );

    this._deleteButton.addEventListener("click", () => {
      this._handlerDeleteCard(this);
    });

    this._elementLikeButton.addEventListener("click", () => {
      this._handlerLike(this);
    });
  }
}
