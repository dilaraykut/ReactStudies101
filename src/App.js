import Header from "./components/Header";
import LoggedIn from "./components/LoggedIn";
import User from "./components/User";
import ObjectAndArray1 from "./components/ObjectAndArray1";
import ObjectAndArray2 from "./components/ObjectAndArray2";
import ObjectAndArray3 from "./components/ObjectAndArray3";
import Props1 from "./components/Props1";
import Props2 from "./components/Props2";
import Counter from "./components/Counter";
import UseStateObject from "./components/UseStateObject";
import Colors from "./components/Colors";
import Form from "./components/Form";
import FormState from "./components/FormState";
import UseEffect from "./components/UseEffect";
import ComponentUnmount from "./components/ComponentUnmount";
import { useState } from "react";



const name = "Dilara";         // Render İşlemi
const names = "Dilara , Murat";
const number = 12;
let surname = "Aykut";

const user = {
  name: "Dilara",
  surname: "Aykut",
  age: 26,
};

function App() {

  const [isVisible, setIsVisible] = useState(true);

  return (
    
    /*Mutlaka return içerisinde bir kapsayıcı bulunmalı. Fragment (<>  </>) (<React.Fragment>  </React.Fragment>) ikisi de aynıdır.
    Ya da <div>  </div> kullanılmalı.
    */
    <div className="test">
      {/*<div>
      Merhaba
      <Header />
      </div>
      
      <div>{name} {surname}</div>*/} {/* Render İşlemi*/}

      {/*<div>{names}</div>

      <div>{number}</div>

      <div>
        <LoggedIn />
      </div>

      <label htmlFor="test">Test</label>

      <div>
        <p>Test</p>
      </div>

      <hr/>

      <div> <User name="Dilara" surname="Aykut" age={26}/> </div>
      <hr/>
      <div> <User name="Murat" surname="Kısa" age={40}/> </div>
      <hr/>

      <div> <ObjectAndArray1 data={user}/></div>
      <hr/>
      <div> <ObjectAndArray2 title="Başlık" data={user} animals={["Arif", "Cat"]}/></div>
      <hr/>
      <div> <ObjectAndArray3 data={user}/></div>
      <hr/>
      <div> <Props1 data={user}/></div>
      <hr/>
      <div> <Props2 data={user}/></div>

      <Counter />
      <div>
        <UseStateObject />
        <hr/>
        <Colors />
        <hr/>
        <Form />
        <hr/>
        <FormState />
      </div>
      <hr/>
      <UseEffect />*/}
      <hr/>
      {isVisible && <ComponentUnmount />}
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>
      
    </div>
    
  );
}

export default App;
