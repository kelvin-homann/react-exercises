import { TodoItem } from "./TodoItem";
import { observer } from "mobx-react-lite";
import { useTodoContext } from "./TodoContext";

import "./TodoItemList.css";

export const TodoItemList = observer(() => {
  const todoCtx = useTodoContext();

  return (
    <>
      {todoCtx.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
});
