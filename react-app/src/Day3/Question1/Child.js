import React, { useContext } from "react";
import { LoginProvider } from "./ParentNew";
export const Child = () => {
  const { val, state, setVal, setState } = useContext(LoginProvider);

  return (
    <div>
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
    </div>
  );
};
