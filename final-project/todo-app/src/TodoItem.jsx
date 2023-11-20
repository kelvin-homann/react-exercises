import { useState } from "react";
import { observer } from "mobx-react-lite";
import "./TodoItem.css";

export const TodoItem = observer(({ todo }) => {
  const [todoItem, setTodoItem] = useState(todo);

  const onDoneChange = (event) => {
    const newTodoItem = { ...todoItem, done: event.target.checked };
    setTodoItem(newTodoItem);
  };

  const onDeleteClick = () => {
    // TODO
  };

  return (
    <form>
      <input type="checkbox" checked={todoItem.done} onChange={onDoneChange} />
      {todoItem.text}
      <button type="button" onClick={onDeleteClick}>
        Löschen
      </button>
    </form>
  );
});
