import React from "react";
import { useNavigate } from "react-router";
const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>I am in About</h1>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
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

export default About;