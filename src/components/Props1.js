import React from 'react'

function Props1(props) {
    console.log(props);

    const {data} = props;
  return (
    <div>
      User
      <div>İsim : {data.name} </div>
      <div>Soyisim : {data.surname} </div>
      <div>Yaş : {data.age} </div>
    </div>
  )
}

export default Props1
