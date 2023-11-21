import { useState } from "react";
import { observer } from "mobx-react-lite";
import "./TodoItem.css";
import { useTodoContext } from "./TodoContext";

export const TodoItem = observer(({ todoItem }) => {
  const { removeTodoItem, updateTodoItem } = useTodoContext();

  const onDoneChange = (event) => {
    const newTodoItem = { ...todoItem, completed: event.target.checked };

    updateTodoItem(newTodoItem);
  };

  const onDeleteClick = () => {
    removeTodoItem(todoItem);
  };

  return (
    <div className="row mt-3">
      <div className="col-sm-1">
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={onDoneChange}
          className="form-check-input"
        />
      </div>
      <p className="col-sm-9">{todoItem.text}</p>
      <button
        className="btn btn-secondary col-sm-2"
        type="button"
        onClick={onDeleteClick}
      >
        Löschen
      </button>
    </div>
  );
});
