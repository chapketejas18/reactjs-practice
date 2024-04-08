import { TextField, Button } from "@mui/material";
import styles from "../assignment4.module.css";
import { useState } from "react";

export const TextFieldValidation = () => {
  const [click, setClick] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [match, setMatch] = useState(false);

  const validation = () => {
    setClick(true);
    if (password === "pass" && name === "tejas") {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={styles.div}>
        <TextField
          required
          label="UserName"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          type="password"
          label="Password"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <Button variant="contained" onClick={validation}>
        SUBMIT
      </Button>
      <h1>{click ? (click && match ? "valid" : "Invalid") : null}</h1>
    </form>
  );
};