import "./App.css";
import { TodoItemList } from "./TodoItemList";
import { NewTodoItem } from "./NewTodoItem";

function App() {
  return (
    <>
      <h1>Meine TODOs</h1>
      <NewTodoItem />
      <TodoItemList />
    </>
  );
}

export default App;
