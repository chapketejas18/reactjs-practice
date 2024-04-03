import React, { useState } from "react";

export default function PersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
  };

  return (
    <div>
      <h2>Person Details form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        ></input><br></br><br></br>
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        ></input><br></br><br></br>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={age}
          onChange={handleAgeChange}
        ></input><br></br><br></br>
        <input type="submit" value="Submit"></input>
      </form>
      {submittedData && (
        <div>
          <h2>Entered Details:</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}
