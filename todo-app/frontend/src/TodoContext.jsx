import { useMemo, useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { TodoItemsStore } from "./todos-store";
import { useApiContext } from "./ApiContext";

const TodoContext = createContext(undefined);

export const useTodoContext = () => {
  return useContext(TodoContext);
};

// using as a controller here
export const TodoProvider = ({ children }) => {
  const [initialTodos, setInitialTodos] = useState([]);

  const store = useMemo(() => {
    return new TodoItemsStore(initialTodos);
  }, [initialTodos]);

  const apiContext = useApiContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await apiContext.api.getTasks();

      setInitialTodos(todos);
    };

    fetchTodos();
  }, []);

  const addTodoItem = async (todoItem) => {
    const newTask = await apiContext.api.createTask(todoItem);

    store.addItem(newTask);
  };

  const updateTodoItem = async (todoItem) => {
    const updatedTask = await apiContext.api.updateTask(todoItem);

    store.updateItem(updatedTask);
  };

  const removeTodoItem = async (todoItem) => {
    await apiContext.api.deleteTask(todoItem);

    store.removeItem(todoItem);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: store.items,
        addTodoItem,
        removeTodoItem,
        updateTodoItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
