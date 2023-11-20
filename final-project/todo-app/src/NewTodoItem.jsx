import { useState } from "react";

export function NewTodoItem() {
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAddClick = () => {
    // TODO
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
