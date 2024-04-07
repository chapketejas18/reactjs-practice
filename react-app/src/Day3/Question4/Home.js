import React from "react";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Main Page
      </button>
    </div>
  );
};

export default Home;