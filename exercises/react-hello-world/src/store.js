import { makeAutoObservable } from "mobx";

class ItemStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
  }
}

export const itemStore = new ItemStore();
