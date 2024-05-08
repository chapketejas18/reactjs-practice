import React, { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username and password are required.");
    } else {
      setLoggedin(true);
    }
  };

  return (
    <>
      {!loggedin && (
        <div>
          <h1>Login Form</h1>
          {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
          <input
            data-testid="username"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            data-testid="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      {loggedin && <p>Submitted successfully....</p>}
    </>
  );
};
