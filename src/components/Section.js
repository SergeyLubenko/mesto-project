// renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(item) {
    const element = this._renderer(item);
    this._containerSelector.prepend(element);
  }

  renderItems(items) {
    items.forEach((item) => {
      this.addItem(item);
    });
  }
}
