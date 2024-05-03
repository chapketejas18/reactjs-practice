import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    textInput: "",
    checkboxInput: false,
    radioInput: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      formData.textInput,
      formData.checkboxInput,
      formData.radioInput
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Text Input:
          <input
            type="text"
            name="textInput"
            value={formData.textInput}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Checkbox Input:
          <input
            type="checkbox"
            name="checkboxInput"
            checked={formData.checkboxInput}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Radio Input Option 1:
          <input
            type="radio"
            name="radioInput"
            value="option1"
            checked={formData.radioInput === "option1"}
            onChange={handleChange}
          />
        </label>
        <label>
          Radio Input Option 2:
          <input
            type="radio"
            name="radioInput"
            value="option2"
            checked={formData.radioInput === "option2"}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
