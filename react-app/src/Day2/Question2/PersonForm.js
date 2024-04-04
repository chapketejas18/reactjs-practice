import React, { useState } from "react";

export default function PersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <h2>Person Details form</h2>
      <form>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(event)=>setFirstName(event.target.value)}
        /><br /><br />
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(event)=>setLastName(event.target.value)}
        /><br /><br />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={age}
          onChange={(event)=>setAge(event.target.value)}
        /><br /><br />
      </form>
      <div>
        <h2>Entered Details:</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
