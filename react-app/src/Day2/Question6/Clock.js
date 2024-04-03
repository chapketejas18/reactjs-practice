import { useState, useEffect } from 'react';

export default function Clock(){
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Clock</h2>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

