import React, { useState } from "react";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loggedin, setLoggedin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username.trim() === "" || formData.password.trim() === "") {
      setErrorMessage("Username and password are required.");
    } else if (formData.username === "tejas" && formData.password === "pass") {
      setLoggedin(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setLoggedin(false);
    setFormData({
      username: "",
      password: "",
    });
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
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <input
            data-testid="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      {loggedin && (
        <div>
          <p>Submitted successfully....</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};
