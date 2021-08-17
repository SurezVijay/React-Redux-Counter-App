import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { increment, decrement } from "./actions/index";

export default function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React Redux Counter App</h1>
      <h3> Counter : {count} </h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
