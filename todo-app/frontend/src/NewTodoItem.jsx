import { useState } from "react";
import { useTodoContext } from "./TodoContext";

export function NewTodoItem() {
  const [todoText, setTodoText] = useState("");
  const todoCtx = useTodoContext();

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAddClick = (e) => {
    e.preventDefault();

    todoCtx.addTodoItem({ text: todoText, completed: false });

    setTodoText("");
  };

  return (
    <form onSubmit={onAddClick}>
      <h4>Neues TODO</h4>
      <div className="row pb-8">
        <div className="col-sm-8">
          <input
            type="text"
            value={todoText}
            onChange={onTextChange}
            required
            className="form-control"
          />
        </div>
        <div className="col-sm-4">
          <button type="submit" className="btn btn-primary">
            Hinzufügen
          </button>
        </div>
      </div>
    </form>
  );
}
