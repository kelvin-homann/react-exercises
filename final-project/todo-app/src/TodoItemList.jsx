import "./TodoItemList.css";
import { TodoItem } from "./TodoItem";

export function TodoItemList() {
  const dummyTodos = [
    { id: 1, done: false, text: "Dummy 1" },
    { id: 2, done: false, text: "Dummy 2" },
    { id: 3, done: false, text: "Dummy 3" },
  ];

  return (
    <>
      {dummyTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
