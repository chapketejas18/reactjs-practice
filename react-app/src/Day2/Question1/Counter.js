import { useState } from "react";
import "./Counter.css";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
