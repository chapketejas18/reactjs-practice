import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import About from "./About";
import Home from "./Home";

export const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homeapp" element={<Home />} />
        <Route path="/aboutapp" element={<About />} />
        <Route path="/profileapp" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
