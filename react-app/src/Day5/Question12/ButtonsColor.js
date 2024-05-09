import React, { useState } from "react";
import { Button } from "./Button";

export const ButtonsColor = () => {
  const [message, setMessage] = useState("");

  const onButtonClick = (buttonType) => {
    setMessage(`${buttonType} Clicked`);
  };

  const buttonTypes = [
    { value: "primary", label: "Primary Button" },
    { value: "secondary", label: "Secondary Button" },
    { value: "danger", label: "Danger Button" },
  ];

  return (
    <>
      {buttonTypes.map(({ value, label }) => (
        <Button style={value} onClick={() => onButtonClick(label)}>
          {label}
        </Button>
      ))}
      {message && <h2>{message}</h2>}
    </>
  );
};
