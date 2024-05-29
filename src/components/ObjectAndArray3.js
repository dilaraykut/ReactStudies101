import React from 'react'

function ObjectAndArray3( {data: {name, surname, age}} ) {
    //Data altındaki almak istediğimiz ifadeler
    console.log({data: {name, surname, age}});
  return (
    <div>
      
      <div>İsim : {name} </div>
      <div>Soyisim : {surname} </div>
      <div>Yaş : {age} </div>

    </div>
  )
}

export default ObjectAndArray3
