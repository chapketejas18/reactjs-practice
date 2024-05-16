import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter</h1>
      <h1 data-testid="showCount">{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </>
  );
};
