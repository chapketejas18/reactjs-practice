import { TextField, Button, FormControl } from "@mui/material";
import { useState } from "react";

export const TextFieldValidation = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [match, setMatch] = useState(false);
  const [click, setClick] = useState(false);

  const validation = () => {
    setClick(true);
    if (formData.password === "pass" && formData.name === "tejas") {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = formData.name !== "" && formData.password !== "";

  return (
    <FormControl component="form" onSubmit={(e) => e.preventDefault()}>
      <div>
        <TextField
          required
          name="name"
          label="UserName"
          variant="filled"
          onChange={handleInputChange}
        />
        <TextField
          required
          name="password"
          type="password"
          label="Password"
          variant="standard"
          onChange={handleInputChange}
        />
      </div>
      <br />
      <Button variant="contained" onClick={validation} disabled={!isFormValid}>
        SUBMIT
      </Button>
      <h1>{click ? (click && match ? "valid" : "Invalid") : null}</h1>
    </FormControl>
  );
};
