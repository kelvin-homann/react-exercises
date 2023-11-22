import "./App.css";
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
      <UserProfile firstName="John" lastName="Doe" age={25} />
    </>
  );
}

export default App;
