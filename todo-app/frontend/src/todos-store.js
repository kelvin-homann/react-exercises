import { action, makeObservable, observable } from "mobx";

export class TodoItemsStore {
  items = [];

  constructor(initialItems = []) {
    makeObservable(this, {
      items: observable,
      addItem: action,
      removeItem: action,
    });

    this.items.replace(initialItems);
  }

  addItem(item) {
    this.items.push(item);
  }

  updateItem(item) {
    const index = this.items.findIndex((i) => i.id === item.id);

    if (index !== -1) {
      this.items[index] = item;
    }
  }

  removeItem(item) {
    console.log(item);

    this.items.replace(this.items.filter((i) => i.id !== item.id));
  }
}
