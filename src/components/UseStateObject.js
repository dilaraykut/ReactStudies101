import React, { useState } from 'react'

function UseStateObject() {
    const [user, setUser] = useState({name: "Dilara", surname: "Aykut"});
  return (
    <div>
      <h3>User</h3>
      {user.name} {user.surname}
      <br/>
      <br/>
      <div>
      {/*<button onClick={() => setUser({...user, name: 'Murat'})}>İsmi Değiştir</button>*/} {/*user içerisindeki verileri koruyarak yaptık. */}
      <button onClick={() => setUser((prev) => ({...prev, name: 'Murat'}))}>İsmi Değiştir</button> {/*Previous State */}
      <button onClick={() => setUser({...user, surname: 'Kısa'})}>Soyismi Değiştir</button>
      </div>
      
    </div>
  )
}

export default UseStateObject
