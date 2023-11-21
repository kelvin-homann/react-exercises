import { useShoppingCart } from "./ShoppingCartContext";

export function ProductList() {
  const shoppingCartContext = useShoppingCart();

  const dummyProducts = ["apple", "orange", "banana"];

  return (
    <>
      <h2>Products</h2>
      <ul>
        {dummyProducts.map((item) => (
          <li key={Math.random()}>
            <button onClick={() => shoppingCartContext.addItem(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
