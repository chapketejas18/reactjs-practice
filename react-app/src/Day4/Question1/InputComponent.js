import React, { useState } from 'react';

function InputComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} 
        placeholder="Enter text"
      />
      <p>Typed Value is : {inputValue}</p>
    </div>
  );
}

export default InputComponent;
