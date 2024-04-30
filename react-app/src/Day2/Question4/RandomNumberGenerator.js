import { useState } from "react";

export const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleGenerateRandomNumber = () => {
    const newRandomNumber = generateRandomNumber();
    setRandomNumber(newRandomNumber);
  };

  return (
    <div>
      <h2>Random Number: {randomNumber}</h2>
      <button onClick={handleGenerateRandomNumber}>
        Generate New Random Number
      </button>
    </div>
  );
};
