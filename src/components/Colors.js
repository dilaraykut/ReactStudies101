import React, { useState } from 'react'

function Colors() {

    const[colors, setColors] = useState(['Red', 'Purple', 'Green', 'Blue', 'Yellow']);
    const handleClick = () => {
       //setColors( [...colors, 'Pink', Math.random()]) //Yukarıda state'i array verdiğimiz için  buradada değer olarak array girdik.
       setColors((prev) => [...prev, 'Pink', Math.random()]) //Previous State
    }
    
  return (
    <div>
      <h3>Colors</h3>

      {
        colors.map((color,i) => 
        <div key={i}>{color}</div>)
      }

      <button onClick={handleClick}>Add Color</button>
    </div>
  )
}

export default Colors;
