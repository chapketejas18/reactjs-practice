import React from "react";
import { useNavigate } from "react-router";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>I am in Main Page</h1>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
    </div>
  );
};

export default MainPage;