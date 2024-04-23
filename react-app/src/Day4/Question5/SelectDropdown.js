import React, { useState } from "react";

export const SelectDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const optionsObj = [
    { value: "Select an Option", text: "" },
    { value: "8 AM", text: "Good morning" },
    { value: "2 PM", text: "Good afternoon" },
    { value: "6 PM", text: "Good evening" },
    { value: "10 PM", text: "Good night" },
  ];

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        {optionsObj.map(({ value, text }) => (
          <option value={text}>{value}</option>
        ))}
      </select>
      {selectedOption && <p>Greet: {selectedOption}</p>}
    </div>
  );
};
