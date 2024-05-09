import React from 'react';

export const Button = ({ onClick, style, children }) => {
  const defaultStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const styles = {
    primary: {
      ...defaultStyle,
      backgroundColor: '#007bff',
      color: '#fff',
    },
    secondary: {
      ...defaultStyle,
      backgroundColor: '#6c757d',
      color: '#fff',
    },
    danger: {
      ...defaultStyle,
      backgroundColor: '#dc3545',
      color: '#fff',
    },
  };

  const chosenStyle = styles[style] || styles.primary;

  return (
    <button onClick={onClick} style={chosenStyle}>
      {children}
    </button>
  );
};
