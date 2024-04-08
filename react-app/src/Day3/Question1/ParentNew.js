import React, { createContext, useState } from "react";
import {Child} from "./Child.js";
export const LoginProvider = createContext();
export const ParentNew = () => {
  const [val, setVal] = useState();
  const [state, setState] = useState(false);
  return (
    <div>
      <LoginProvider.Provider value={{ val, state, setVal, setState }}>
        <Child />
      </LoginProvider.Provider>
    </div>
  );
};
