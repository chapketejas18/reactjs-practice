import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import AssignmentsPage from "./AssignmentsPage";
import About from "./Day3/Question3/About";
import Settings from "./Day3/Question5/Dashboard/Settings";
import ProductList from "./Day3/Question6/ProductList";
import ProductDetail from "./Day3/Question6/ProductDetail";
import { ProductProvider } from "./Day3/Question6/ProductContext";
import Profile from "./Day3/Question5/Dashboard/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const ProtectedRoute = ({ element, ...rest }) => {
    return isLoggedIn ? element : <Navigate to="/" replace />;
  };

  const AuthRoute = ({ element, ...rest }) => {
    return isLoggedIn ? <Navigate to="/assignments" replace /> : element;
  };

  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute
                element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
              />
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
          <Route
            path="/about"
            element={<ProtectedRoute element={<About />} />}
          />
          <Route
            path="/settings"
            element={<ProtectedRoute element={<Settings />} />}
          />
          <Route
            path="/products"
            element={<ProtectedRoute element={<ProductList />} />}
          />
          <Route
            path="/products/:id"
            element={<ProtectedRoute element={<ProductDetail />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </ProductProvider>
    </Router>
  );
};

export default App;
