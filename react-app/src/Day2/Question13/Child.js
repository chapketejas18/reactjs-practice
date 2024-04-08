import React from 'react';

const Child = ({ count, resetCount }) => {
    return (
      <div>
        <h2>Child Component</h2>
        <p>Count: {count}</p>
        <button onClick={resetCount}>Reset Count</button>
      </div>
    );
  };

export default Child;
