import React, { useContext } from 'react';
import { AuthContext } from './Parent';

const Child = () => {
  const { isLoggedIn, login, username } = useContext(AuthContext);

  const handleLogin = () => {
    login("User123"); 
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Child;
