import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TodoItemList } from "./TodoItemList";
import { NewTodoItem } from "./NewTodoItem";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Meine TODOs</h1>
        <NewTodoItem />
        <TodoItemList />
      </div>
    </TodoProvider>
  );
}

export default App;
