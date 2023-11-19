import { useEffect } from "react";
import "./App.css";
import UserProfile from "./UserProfile";
import { useUser } from "./UserContext";

function App() {
  const { loginUser } = useUser();

  useEffect(() => {
    loginUser({
      firstName: "John",
      lastName: "Doe",
      age: 25,
    });
  }, []);

  return (
    <>
      <h1>User Profile App</h1>
      <UserProfile />
    </>
  );
}

export default App;
