import React from 'react'

function ObjectAndArray2( {title, data, animals} ) {
    //Obje altındaki datayı ayrı olarak alabiliriz.
    //Animals sadece bu şekilde kullanımda oluyor data props.
    console.log(data);
    console.log(animals);
  return (
    <div>
      <strong>{title}</strong>
      <div>İsim : {data.name} </div>
      <div>Soyisim : {data.surname} </div>
      <div>Yaş : {data.age} </div>
      <hr/>
      <div>* Animals *</div>
      {
        animals.map((animal, i) => (
          <div key={i}>{animal}</div>
        ))
      }
    </div>
  )
}

//Eğer title alanı gönderilmezse bu alana varsayılan bir değer gönderebiliriz.

ObjectAndArray2.defaultProps = {
  title : "Kişi",
};

export default ObjectAndArray2
