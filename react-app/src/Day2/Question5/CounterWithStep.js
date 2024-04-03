import { useState } from "react";

export default function CounterWithStep(){
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h2>Conte with steps</h2>
      <p>Count: {count}</p>
      <input type="number" value={step} onChange={(event)=>setStep(event.target.value)} />
      <button onClick={()=>setCount(count + Number(step))}>+</button>
      <button onClick={()=>setCount(count - Number(step))}>-</button>
    </div>
  );
};

