// --- попап инпут---
// Функция, которая добавляет класс с ошибкой
export const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, object);
  });
};

const showInputError = (formElement, inputElement, errorMessage, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(object.errorClass);
};
// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.classList.remove(object.errorClass);
  errorElement.textContent = "";
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, object) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      object
    );
  } else {
    hideInputError(formElement, inputElement, object);
  }
};

const setEventListeners = (formElement, object) => {
  const inputList = Array.from(
    formElement.querySelectorAll(object.inputSelector)
  );
  const buttonElement = formElement.querySelector(object.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, object);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, object);
      toggleButtonState(inputList, buttonElement, object);
    });
  });
  formElement.addEventListener("reset", () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, object);
    });
  });
};

function hasInvalidInput(inputs) {
  return inputs.some((input) => !input.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, object) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(object.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(object.inactiveButtonClass);
  }
};
