import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TodoItemList } from "./TodoItemList";
import { NewTodoItem } from "./NewTodoItem";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <TodoProvider>
      <h1>Meine TODOs</h1>
      <NewTodoItem />
      <TodoItemList />
    </TodoProvider>
  );
}

export default App;
