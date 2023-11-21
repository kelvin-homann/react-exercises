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
      <input type="text" value={todoText} onChange={onTextChange} />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}
