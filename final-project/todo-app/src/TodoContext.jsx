import { useMemo } from "react";
import { createContext, useContext } from "react";
import { TodoItemsStore } from "./todos-store";

const TodoContext = createContext(undefined);

export const useTodoContext = () => {
  return useContext(TodoContext);
};

// using as a controller here
export const TodoProvider = ({ children }) => {
  const store = useMemo(() => {
    return new TodoItemsStore();
  }, []);

  const addTodoItem = (todoText) => {
    store.addItem(todoText);
  };

  const removeTodoItem = (todoId) => {
    store.removeItem(todoId);
  };

  return (
    <TodoContext.Provider
      value={{ todos: store.items, addTodoItem, removeTodoItem }}
    >
      {children}
    </TodoContext.Provider>
  );
};
