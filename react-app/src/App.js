import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import LoginPage from "./LoginPage";
import AssignmentsPage from "./AssignmentsPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isLoggedIn:", isLoggedIn);
    if (isLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const ProtectedRoute = ({ element, ...rest }) => {
    return isLoggedIn ? element : <Navigate to="/" replace />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/assignments" replace />
            )
          }
        />
        <Route
          path="/assignments"
          element={
            <ProtectedRoute
              element={<AssignmentsPage setIsLoggedIn={setIsLoggedIn} />}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
