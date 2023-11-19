import { observer } from "mobx-react-lite";
import { itemStore } from "./store";

// View

const ItemListComponent = observer(() => {
  return (
    <div>
      <h2>Items:</h2>
      <ul>
        {itemStore.items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => itemStore.removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ItemListComponent;
