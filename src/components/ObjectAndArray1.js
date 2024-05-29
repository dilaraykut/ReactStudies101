import React from 'react'

function ObjectAndArray1(props) {
    console.log(props);
  return (
    <div>
      
      <div>İsim : {props.data.name} </div>
      <div>Soyisim : {props.data.surname} </div>
      <div>Yaş : {props.data.age} </div>

    </div>
  )
}

export default ObjectAndArray1
