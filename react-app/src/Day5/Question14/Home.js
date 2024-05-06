import React from "react";
import { withAuth } from "./withAuth";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <center>
        <h1>Home</h1>
      </center>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
  );
};

export default withAuth(Home);
