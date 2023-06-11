import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageText = this._popup.querySelector(".popup-image__text");
    this._popupImageZoom = this._popup.querySelector(".popup-image__zoom");
  }

  open(card) {
    super.open();
    this._popupImageText.textContent = card.title;
    this._popupImageZoom.alt = card.title;
    this._popupImageZoom.src = card.image;
  }
}


// const zoomImage = (evt) => {
//   popupImageZoom.src = evt.target.src;
//   popupImageZoom.alt = evt.target.alt;
//   popupImageText.textContent = evt.target.alt;
//   openPopup(popupImage);
// };
