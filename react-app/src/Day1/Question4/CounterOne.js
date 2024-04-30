import { useState } from "react";
import "./Counter.css";
import { Weather } from "../Question3/Weather";
export const CounterOne = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <Weather count={count} />
    </div>
  );
};
