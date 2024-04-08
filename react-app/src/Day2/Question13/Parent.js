import React, { useState, useCallback } from 'react';
import Child from './Child';

export const Parent = () => {
    const [count, setCount] = useState(0);
  
    const incrementCount = useCallback(() => {
      setCount(prevCount => prevCount + 1);
    }, []);
  
    const resetCount = useCallback(() => {
      setCount(0);
    }, []);
  
    return (
      <div>
        <h1>Parent Component</h1>
        <p>Count: {count}</p>
        <Child count={count} resetCount={resetCount} />
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    );
  };
  
