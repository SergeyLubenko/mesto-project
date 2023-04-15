// import { checkResponse } from "./utils";

const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-22",
  headers: {
    authorization: "533adc04-bcba-4000-88a7-903fbfe5b6cf",
    "Content-Type": "application/json",
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(url, options){
  return fetch(url, options).then((res) => checkResponse(res));
}

const getProfileContent = () => {
  return request(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  });
};

const getInCards = () => {
  return request(`${config.baseUrl}/cards`, {
    headers: config.headers,
  });
};

const ProfileContent = (profileTitle, profileSubtitle) => {
  return request(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: profileTitle,
      about: profileSubtitle,
    }),
  });
};

const newCard = (name, link) => {
  return request(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  });
};

const deleteCard = (cardId) => {
  return request(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
};

const addLike = (cardId) => {
  return request(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  });
};

const deleteLike = (cardId) => {
  return request(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
};

const  addNewAvatar = (avatar) => {
  return request(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  });
};

export {
  getProfileContent,
  getInCards,
  ProfileContent,
  newCard,
  deleteCard,
  addLike,
  deleteLike,
  addNewAvatar,
};
