import { useState } from "react";
import { observer } from "mobx-react-lite";
import "./TodoItem.css";
import { useTodoContext } from "./TodoContext";

export const TodoItem = observer(({ todoItem }) => {
  const { removeTodoItem, updateTodoItem } = useTodoContext();

  const onDoneChange = (event) => {
    const newTodoItem = { ...todoItem, done: event.target.checked };

    updateTodoItem(newTodoItem);
  };

  const onDeleteClick = () => {
    removeTodoItem(todoItem);
  };

  return (
    <div>
      <input type="checkbox" checked={todoItem.done} onChange={onDoneChange} />
      {todoItem.task}
      <button type="button" onClick={onDeleteClick}>
        Löschen
      </button>
    </div>
  );
});
