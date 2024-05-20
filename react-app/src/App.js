import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AssignmentsPage from "./components/AssignmentsPage";
import About from "./Day3/Question3/About";
import Settings from "./Day3/Question5/Dashboard/Settings";
import ProductList from "./Day3/Question6/ProductList";
import ProductDetail from "./Day3/Question6/ProductDetail";
import { ProductProvider } from "./Day3/Question6/ProductContext";
import Profile from "./Day3/Question5/Dashboard/Profile";
import { Day1Component } from "./Day1";
import { Day2Component } from "./Day2";
import { Day3Component } from "./Day3";
import { Day4Component } from "./Day4";
import { Day5Component } from "./Day5";
import { Day6Component } from "./Day6";
import Layout from "./components/Layout";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? (
      <Layout setIsLoggedIn={setIsLoggedIn}>{element}</Layout>
    ) : (
      <Navigate to="/" replace />
    );
  };

  const AuthRoute = ({ element }) => {
    return isLoggedIn ? <Navigate to="/assignments" replace /> : element;
  };

  return (
    <BrowserRouter>
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
            element={<ProtectedRoute element={<AssignmentsPage />} />}
          />
          <Route
            path="/assignments/day1"
            element={<ProtectedRoute element={<Day1Component />} />}
          />
          <Route
            path="/assignments/day2"
            element={<ProtectedRoute element={<Day2Component />} />}
          />
          <Route
            path="/assignments/day3"
            element={<ProtectedRoute element={<Day3Component />} />}
          />
          <Route
            path="/assignments/day4"
            element={<ProtectedRoute element={<Day4Component />} />}
          />
          <Route
            path="/assignments/day5"
            element={<ProtectedRoute element={<Day5Component />} />}
          />
          <Route
            path="/assignments/day6"
            element={<ProtectedRoute element={<Day6Component />} />}
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
          <Route
            path="/assignments/*"
            element={<Navigate to="/assignments" replace />}
          />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
