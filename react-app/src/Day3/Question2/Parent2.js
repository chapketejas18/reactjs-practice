import React, { createContext, useState } from "react";
import {Child2} from "./Child2";
export const LoginProvider = createContext();
export const ThemeProvider = createContext();

export const Parent2 = () => {
  const [val, setVal] = useState();
  const [state, setState] = useState(false);
  const [theme, setTheme] = useState(false);
  return (
    <div>
      <LoginProvider.Provider value={{ val, state, setVal, setState }}>
        <ThemeProvider.Provider value={{ theme, setTheme }}>
          <Child2 />
        </ThemeProvider.Provider>
      </LoginProvider.Provider>
    </div>
  );
};