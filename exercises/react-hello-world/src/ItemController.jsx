import { useState } from "react";
import ItemListComponent from "./ItemListComponent";
import { itemStore } from "./store";

// Controller

export const ItemController = () => {
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      itemStore.addItem(newItem);
      setNewItem("");
    }
  };

  return (
    <div>
      <h1>Item Controller</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ItemListComponent />
    </div>
  );
};
