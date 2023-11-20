import { useState } from "react";
import "./TodoItem.css";

export function TodoItem({ todo }) {
  const [todoItem, setTodoItem] = useState(todo);

  const onDoneChange = (event) => {
    const newTodoItem = { ...todoItem, done: event.target.checked };
    setTodoItem(newTodoItem);
  };

  const onTextChange = (event) => {
    const newTodoItem = { ...todoItem, text: event.target.value };
    setTodoItem(newTodoItem);
  };

  const onDeleteClick = () => {
    // TODO
  };

  return (
    <form>
      <input type="checkbox" checked={todoItem.done} onChange={onDoneChange} />
      {/* <input type="text" value={todoItem.text} onChange={onTextChange} /> */}
      {todoItem.text}
      <button type="button" onClick={onDeleteClick}>
        Löschen
      </button>
    </form>
  );
}
