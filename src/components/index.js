import "../pages/index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";

import {
  config,
  profileSelectors,
  editButton,
  addButton,
  profileAvatarButton,
  formInputName,
  formInputSearch,
  enableValidation,
  formSelectors,
} from "/utils/constants.js";

const api = new Api(config);

const editProfile = new FormValidator(
  enableValidation,
  formSelectors.formPopup
);
editProfile.enableValidation();

const addCardForm = new FormValidator(enableValidation, formSelectors.formAdd);
addCardForm.enableValidation();

const editAvatarForm = new FormValidator(
  enableValidation,
  formSelectors.formAvatar
);
editAvatarForm.enableValidation();

api
  .AddInfo()
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    cardList.renderItems(cards, user);
  })
  .catch((err) => {
    console.log(err, "ошибка");
  });

function handleCardClick(card) {
  popupImage.open(card);
}

function handlerDeleteСard(card) {
  api
    .deleteCard(card.getCardId())
    .then(() => {
      card.removeCard();
    })
    .catch((err) => {
      console.log(err, "ошибка");
    });
}

function handlerLike(card) {
  if (!card.isLiked()) {
    api
      .addLike(card.getCardId())
      .then((cardData) => {
        card.dataLikes(cardData);
      })
      .catch((err) => {
        console.log(err, "ошибка");
      });
  } else {
    api
      .deleteLike(card.getCardId())
      .then((cardData) => {
        card.dataLikes(cardData);
      })
      .catch((err) => {
        console.log(err, "ошибка");
      });
  }
}

const userInfo = new UserInfo(
  profileSelectors.profileTitle,
  profileSelectors.profileSubtitle,
  profileSelectors.profileAvatar
);

const cardList = new Section(
  {
    renderer: (item) => {
      const card = new Card({
        data: item,
        handleCardClick,
        handlerDeleteСard,
        handlerLike,
        selector: "#template",
        userId: userInfo.getUserInfo().userId,
      });
      return card.generate();
    },
  },
  ".elements__grid"
);

const popupImage = new PopupWithImage(".popup-image");

const popupEditProfile = new PopupWithForm({
  popupSelector: ".popup_edit",
  formSubmit: (data) => {
    saveLoading(".popup_edit", true);
    api
      .saveProfileContent(data.name, data.search)
      .then((userData) => {
        userInfo.setUserInfo(userData);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err, "ошибка");
      })
      .finally(() => {
        saveLoading(".popup_edit", false);
      });
  },
});

const popupEditAvatar = new PopupWithForm({
  popupSelector: ".popup_avatar",
  formSubmit: (data) => {
    saveLoading(".popup_avatar", true);
    api
      .addNewAvatar(data.avatar)
      .then((userData) => {
        userInfo.setUserInfo(userData);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(err, "ошибка");
      })
      .finally(() => {
        saveLoading(".popup_avatar", false);
      });
  },
});

const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_add",
  formSubmit: (data) => {
    saveLoading(".popup_add", true, "Сохранить", "Сохранение...");
    api
      .newCard(data.input_name, data.input_search)
      .then((cardData) => {
        cardList.addItem(cardData);
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err, "ошибка");
      })
      .finally(() => {
        saveLoading(".popup_add", false);
      });
  },
});

popupAddCard.setEventListeners();
popupEditAvatar.setEventListeners();
popupEditProfile.setEventListeners();
popupImage.setEventListeners();

editButton.addEventListener("click", () => {
  popupEditProfile.open();

  const infoUser = userInfo.getUserInfo();
  formInputName.value = infoUser.name;
  formInputSearch.value = infoUser.about;
});

addButton.addEventListener("click", () => {
  addCardForm.resetValidation();
  popupAddCard.open();
});

profileAvatarButton.addEventListener("click", () => {
  editAvatarForm.resetValidation();
  popupEditAvatar.open();
});

const saveLoading = (
  popupSelector,
  loadingText = "Сохранить...",
  buttonText = "Сохранение"
) => {
  const button = document.querySelector(`${popupSelector} .form__save-button`);
  if (popupSelector) {
    button.textContent = buttonText;
  } else {
    button.textContent = loadingText;
  }
};

// enableValidation({
//   formSelector: ".form",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__save-button",
//   inactiveButtonClass: "form__button_inactive",
//   inputErrorClass: "form__input_type_error",
//   errorClass: "form__input-error_active",
// });
