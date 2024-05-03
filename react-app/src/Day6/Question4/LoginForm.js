import React, { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [loggedin, setLoggedin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedin(true);
  };
  return (
    <>
      {!loggedin && (
        <div>
          <h1>Login Form</h1>
          <input
            data-testid="username"
            type="text"
            placeholder="Enter Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <input
            data-testid="password"
            type="text"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      {loggedin && <p>Submitted sucessfully....</p>}
    </>
  );
};
