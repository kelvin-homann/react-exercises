import { useState } from "react";
import { useTodoContext } from "./TodoContext";

export function NewTodoItem() {
  const [todoText, setTodoText] = useState("");
  const todoCtx = useTodoContext();

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAddClick = () => {
    todoCtx.addTodoItem({ id: Math.random(), text: todoText, done: false });
  };

  return (
    <>
      <h4>Neues TODO</h4>
      <input type="text" value={todoText} onChange={onTextChange} />
      <button type="button" onClick={onAddClick}>
        Hinzufügen
      </button>
    </>
  );
}
