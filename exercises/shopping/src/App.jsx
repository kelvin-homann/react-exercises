import "./App.css";
import { ProductList } from "./ProductList";
import { ShoppingCartList } from "./ShoppingCartList";

function App() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <ProductList />
      <ShoppingCartList />
    </>
  );
}

export default App;
