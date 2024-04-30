import React, { useState, useEffect } from "react";
import "./withAuth.css";
import TextField from "@mui/material/TextField";

export const withAuth = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ username: "", password: "" });

    useEffect(() => {
      const storedAuth = localStorage.getItem("isAuthenticated");
      if (storedAuth === "true") {
        setIsAuthenticated(true);
      }
    }, []);

    const handleToggleAuth = () => {
      if (isAuthenticated) {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
      } else {
        setShowModal(true);
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleLogin = () => {
      if (formData.username === "tejas" && formData.password === "pass") {
        setIsAuthenticated(true);
        setShowModal(false);
        localStorage.setItem("isAuthenticated", "true");
      } else {
        alert("Invalid username or password");
      }
    };

    return (
      <>
        <button onClick={handleToggleAuth}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
        {showModal && !isAuthenticated && (
          <div className="modal">
            <div className="modal-content">
              <center>
                <h2>Login</h2>
              </center>
              <center>
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </center>
              <br />
              <center>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </center>
              <br />
              <center>
                <button onClick={handleLogin}>Login</button>
              </center>
            </div>
          </div>
        )}
        {isAuthenticated && <WrappedComponent />}
      </>
    );
  };

  return EnhancedComponent;
};
