import React, { useContext } from "react";
import { LoginProvider } from "./Parent2";
import { ThemeProvider } from "./Parent2";
import "./styles.css";
export const Child2 = () => {
  const { val, state, setVal, setState } = useContext(LoginProvider);
  const { theme, setTheme } = useContext(ThemeProvider);

  return (
    <div className={!theme ? "dark" : "light"}>
      <input
        type="text"
        placeholder="User Name"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => {
          setState(!state);
          if (state) {
            setVal("");
          }
        }}
      >
        {state ? "LogOut" : "LogIn"}
      </button>
      <h2>{state ? `Welcome,${val}` : "Please log in."}</h2>
      <button onClick={() => setTheme(!theme)}>
        {theme ? "Dark" : "Light"}
      </button>
    </div>
  );
};
