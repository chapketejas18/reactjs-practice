import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <button onClick={toggleTheme}>Dark Mode</button>
    </div>
  );
};

export default ThemedComponent;
