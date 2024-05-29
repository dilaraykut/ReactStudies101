import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  //const [gender, setGender] = useState("Male");
  const [gender, setGender] = useState("0");

  return (
    <div>
      <div>
        <div>Name</div>
        <input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />{" "}
        {/* Bu sayede Input'u değiştirebiliyoruz. */}
        <input
          placeholder="Surname"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
      </div>

      <br />

      <div>
        <div>Gender</div>
        <select value={gender} onChange={(event) => setGender(event.target.value)}>
          {/*<option value="Male">Male</option>
          <option value="Female">Female</option>*/}
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>
      </div>

      <hr />

      <div>
        Name:
        <strong>
          {name} {surname}
        </strong>
      </div>
      <div>
      Gender:
        {/*<strong>{gender}</strong>*/}
        <strong>{gender === '0' ? 'Male' : 'Female'}</strong>
      </div>
    </div>
  );
}

export default Form;
