import React, { useEffect, useState } from "react";

export const Notification = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage("");
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [message]);

  return (
    <div>
      <h2>Notification</h2>
      <button onClick={() => setMessage((prev) => prev + "HelloWorld!!!!")}>
        Notification
      </button>
      {message}
    </div>
  );
};
