export default class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // добавление данных профиля и карточек
  getAddInfo() {
    return Promise.all([this._getProfileContent(), this._getInCards()]);
  }

  //  получение профиля с сервера
  _getProfileContent() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  // получение карточек с сервера
  _getInCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  saveProfileContent(profileTitle, profileSubtitle) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        name: profileTitle,
        about: profileSubtitle,
      }),
    }).then(this._checkResponse);
  }

  // добавить карточки
  newCard(name, link) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
  }

  // удалить карточку
  deleteCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._options.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  // поставить лайк
  addLike(cardId) {
    return fetch(`${this._options.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  // редактирование аватара
  addNewAvatar(avatar) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._checkResponse);
  }
}
