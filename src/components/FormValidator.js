export default class FormValidator {
    constructor(data, form) {
      this._formElement = document.querySelector(`${form}`);
      this._formSelector = data.formSelector;
      this._errorClass = data.errorClass;
      this._inputSelector = data.inputSelector;
      this._inputErrorClass = data.inputErrorClass;
      this._submitButtonSelector = data.submitButtonSelector;
      this._inactiveButtonClass = data.inactiveButtonClass;
      this._inputList = Array.from(
        this._formElement.querySelectorAll(this._inputSelector)
      );
      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }
  
    enableValidation() {
      this._setEventListener();
    }
  
    resetValidation() {
      this._toggleButtonState();
    }
  
    _hasInvalidInput() {
      return this._inputList.some((input) => !input.validity.valid);
    }
  
    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false;
      }
    }
  
    _showErrorMessage(errorElement, input) {
      errorElement.classList.add(this._errorClass);
      input.classList.add(this._inputErrorClass);
      errorElement.textContent = input.validationMessage;
    }
  
    _hideErrorMessage(errorElement, input) {
      errorElement.classList.remove(this._errorClass);
      input.classList.remove(this._inputErrorClass);
      errorElement.textContent = "";
    }
  
    _hideInputError(errorElement, input) {
      if (!input.validity.valid) {
        this._showErrorMessage(errorElement, input);
      } else {
        this._hideErrorMessage(errorElement, input);
      }
    }
  
    _setEventListener() {
      this._inputList.forEach((input) => {
        const errorElement = this._formElement.querySelector(
          `.${input.id}-error`
        );
        input.addEventListener("input", () => {
          this._hideInputError(errorElement, input);
          this._toggleButtonState();
        });
  
        this._formElement.addEventListener("reset", () => {
          this._hasInvalidInput();
          this._hideErrorMessage(errorElement, input);
        });
      });
    }
  }
  