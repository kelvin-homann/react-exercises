import { useShoppingCart } from "./ShoppingCartContext";

export function ShoppingCartList() {
  const shoppingCartContext = useShoppingCart();

  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {shoppingCartContext.shoppingCart.map((item) => (
          <li key={Math.random()}>
            <button onClick={() => shoppingCartContext.removeItem(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
