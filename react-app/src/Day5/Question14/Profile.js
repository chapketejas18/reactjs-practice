import React from "react";
import { withAuth } from "./withAuth";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <center>
        <h1>Profile</h1>
      </center>
      <li>
        <Link to="/homeapp">Home</Link>
      </li>
    </div>
  );
};

export default withAuth(Profile);
