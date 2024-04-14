import React, { useState } from 'react';
import {Button} from './Button';

export const ButtonsColor = () => {
  const [message, setMessage] = useState('');

  const handlePrimaryClick = () => {
    setMessage('Primary Button Clicked');
  };

  const handleSecondaryClick = () => {
    setMessage('Secondary Button Clicked');
  };

  const handleDangerClick = () => {
    setMessage('Danger Button Clicked');
  };

  return (
    <div>
      <Button style="primary" onClick={handlePrimaryClick}>
        Primary Button
      </Button>

      <Button style="secondary" onClick={handleSecondaryClick}>
        Secondary Button
      </Button>

      <Button style="danger" onClick={handleDangerClick}>
        Danger Button
      </Button>
      {message && <h2>{message}</h2>}
    </div>
  );
};
