import React, { useState } from "react";

export const SelectDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="Good Morning">8 AM</option>
        <option value="Good afternoon">2 PM</option>
        <option value="Good evening">6 PM</option>
        <option value="Good Night">10 PM</option>
      </select>
      {selectedOption && <p>Greet: {selectedOption}</p>}
    </div>
  );
};
