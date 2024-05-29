import React, { useState } from 'react'

function FormState() {
    const [form, setForm] = useState({name: "", surname: "", gender: ""});


    /*const handleChange = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    }*/
    const handleChange = (e) => {
        setForm((prev) => ({...prev,[e.target.name] : e.target.value}))
    }

  return (
    <div>
      <div>
        <div>Name</div>
        <input
          placeholder="Name"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        {/* Bu sayede Input'u değiştirebiliyoruz. */}
        <input
          placeholder="Surname"
          value={form.surname}
          name="surname"
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <div>Gender</div>
        <select value={form.gender} name="gender" onChange={handleChange}>
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
          {form.name} {form.surname}
        </strong>
      </div>
      <div>
      Gender:
        {/*<strong>{gender}</strong>*/}
        <strong>{form.gender === '0' ? 'Male' : 'Female'}</strong>
      </div>
    </div>
  );
}

export default FormState;
