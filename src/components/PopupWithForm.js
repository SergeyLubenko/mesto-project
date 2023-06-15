import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmit }) {
    super(popupSelector);
    this._form = this._popup.querySelector(".form");
    this._formSubmit = formSubmit;
    this._formInput = this._form.querySelectorAll(".form__input");
    this._form.reset();
  }

 

  _getInputValues() {
    this._values = {};
    this._formInput.forEach((input) => {
      this._values[input.name] = input.value;
    });

    return this._values;
  }



  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._formSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
