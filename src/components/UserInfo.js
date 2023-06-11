export default class UserInfo {
    constructor(profileTitle, profileSubtitle, profileAvatar) {
      this._profileTitle = document.querySelector(profileTitle);
      this._profileSubtitle = document.querySelector(profileSubtitle);
      this._profileAvatar = document.querySelector(profileAvatar);
    }
  
    getUserInfo() {
      return {
        name: this._profileTitle.textContent,
        userId: this._userId,
      };
    }
  
    setUserInfo(data) {
      this._profileTitle.textContent = data.name;
      this._profileSubtitle.textContent = data.about;
      this._profileAvatar.src = data.avatar;
      this._userId = data._id;
    }
  }
  