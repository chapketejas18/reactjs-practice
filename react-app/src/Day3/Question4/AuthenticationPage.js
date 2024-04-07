import React, { useState } from "react";
import { useNavigate } from "react-router";
export const AuthenticationPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const authentication = () => {
    if (name === "Tejas" && password === "pass18")
      navigate("/about");
    else {
      setStatus("Invalid Credentials");
      setPassword("");
      setName("");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <h2>{status}</h2>
      <button onClick={authentication}>Login</button>
      <br />
      <br />
      <br />
    </div>
  );
};