import { action, makeObservable, observable } from "mobx";

class ItemStore {
  items = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      addItem: action,
      removeItem: action,
    });
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
  }
}

export const itemStore = new ItemStore();
