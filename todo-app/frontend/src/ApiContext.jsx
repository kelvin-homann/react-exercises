import { useMemo } from "react";
import { createContext, useContext } from "react";
import { TodoApi } from "./todo-api";

const ApiContext = createContext(undefined);

export const useApiContext = () => {
  return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
  const api = useMemo(() => {
    return new TodoApi();
  }, []);

  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
};
