import React from "react";
import { useNavigate, Outlet } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Main Page
      </button>
      <Outlet />
    </div>
  );
};

export default Home;