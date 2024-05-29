import React from 'react'

function Props2( props ) {
    console.log(props);

    const {name, surname , age} = props.data;
  return (
    <div>
        User
      <div>İsim : {name} </div>
      <div>Soyisim : {surname} </div>
      <div>Yaş : {age} </div>
      <hr/>
      
    </div>
  )
}

export default Props2
