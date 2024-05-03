import { useState } from "react";

export const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + (step ? Number(step) : 1));
  };

  const handleDecrement = () => {
    setCount(count - (step ? Number(step) : 1));
  };

  return (
    <div>
      <h2>Count with steps</h2>
      <p>Count: {count}</p>
      <input
        type="number"
        value={step}
        onChange={(event) => setStep(event.target.value)}
      />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};
