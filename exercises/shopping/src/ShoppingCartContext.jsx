import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext(undefined);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  // const countedItems = items.reduce((acc, item) => {
  //   acc[item] = (acc[item] || 0) + 1;
  //   return acc;
  // }, {});

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart: items, addItem, removeItem }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
