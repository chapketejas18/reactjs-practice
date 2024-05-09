import React from "react";
import { InputLabel } from "@mui/material";

export const UserProfile = (data) => {
  if (!data) {
    return <div>No data available for user profile.</div>;
  }
  return (
    <div>
      <h1>User Profile</h1>
      <InputLabel>Full Name:{data.name}</InputLabel>
      <InputLabel>Username:{data.username}</InputLabel>
      <InputLabel>Gender:{data.gender}</InputLabel>
      <InputLabel>Address:{data.address}</InputLabel>
      <InputLabel>Contact No:{data.contact}</InputLabel>
    </div>
  );
};
