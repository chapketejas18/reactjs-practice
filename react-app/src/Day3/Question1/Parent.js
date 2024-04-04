import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const Parent = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Parent;
