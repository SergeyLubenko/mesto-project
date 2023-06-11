export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._closeByEsc = this._closeByEsc.bind(this);
    }
  
    open() {
      this._popup.classList.add("popup_opened");
      document.addEventListener("keydown", this._closeByEsc);
    }
  
    close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._closeByEsc);
    }
  // setEventListeners, который добавляет слушатель клика иконке закрытия попапа
    setEventListeners() {
      this._popup.addEventListener("mousedown", (evt) => {
        if (evt.target.classList.contains("popup_opened")) {
          this.close();
        }
        if (evt.target.classList.contains("popup__close-icon")) {
          this.close();
        }
      });
    }
  
    _closeByEsc(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }
  
  
  //  export function openPopup(popup) {
  //   popup.classList.add("popup_opened");
  //   document.addEventListener("keydown", closeByEsc);
  // }
  
  // export function closePopup(popup) {
  //   popup.classList.remove("popup_opened");
  //   document.removeEventListener("keydown", closeByEsc);
  // }
  
  //  export function closeByEsc(evt) {
  //   if (evt.key === "Escape") {
  //     const openedPopup = document.querySelector(".popup_opened");
  //     closePopup(openedPopup);
  //   }
  // }
  
  // export { openPopup, closePopup };
  