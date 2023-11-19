import "./App.css";
import { useCounter } from "./UseCounter.jsx";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <p>count is {count}</p>
      </div>
    </>
  );
}

export default App;
