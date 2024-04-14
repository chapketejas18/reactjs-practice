import React, { useState, useEffect } from 'react';

const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    const [logMessages, setLogMessages] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
      setLogMessages((prevLogMessages) => [
        ...prevLogMessages,
        `Component ${WrappedComponent.name} mounted`
      ]);

      return () => {
        setLogMessages((prevLogMessages) => [
          ...prevLogMessages,
          `Component ${WrappedComponent.name} unmounted`
        ]);
      };
    }, []);

    useEffect(() => {
        setLogMessages((prevLogMessages) => [
          ...prevLogMessages,
          `Component ${WrappedComponent.name} updated`
        ]);
      }, [count]);

    const incrementCount = () => {
      setCount(count + 1);
    };

    const decrementCount = () => {
      setCount(count - 1);
    };

    return (
      <div>
        {logMessages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        <div>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
        </div>
        <div>Count: {count}</div>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return WithLogger;
};

const MyComponent = () => {
  return <div></div>;
};

export const MyComponentWithLogger = withLogger(MyComponent);
