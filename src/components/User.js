import React from "react";
import PropTypes from "prop-types";

/*Props = Property (Özellik)
Bir component'i ilk kez render ederken onun görünümünü sağlayacak olan bilgileri vermek.

rfce => r = React, f = Function, c = Component, e = Export */

function User(props) {
  console.log(props);
  return (
    <div>
      <div>İsim : {props.name} </div>
      <div>Soyisim : {props.surname} </div>
      <div>Yaş : {props.age} </div>
    </div>
  );
}

User.propTypes = {
    title : PropTypes.string.isRequired, //Zorunlu alan demektir.
    data : PropTypes.exact({
        name: PropTypes.string,
        surname: PropTypes.string,
        age: PropTypes.number,
    })
}
//PropTypes lar datanın istenilen türde olup olmadığını kontol eder. Eğer değilse console da error olarak değil warning olarak gösterir.


export default User;
