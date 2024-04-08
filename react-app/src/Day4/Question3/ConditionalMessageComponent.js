import React, { useState } from 'react';

const MessageComponent = () => {
  return <div>This is the message component.</div>;
};

export const ConditionalMessageComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.toLowerCase() === 'show') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter 'show' to display message"
      />
      <button onClick={handleButtonClick}>Show Message</button>
      {showMessage && <MessageComponent />}
    </div>
  );
};
