// Conditional Rendering

import Header from "./Header";
import Login from "./Login";

const isLoggedIn = false;
const fullName = "Murat Kısa";

function LoggedIn() {
    return(
        <div>
        { isLoggedIn ? "Hoşgeldin " + fullName : <a href="#">Giriş Yapın</a>}

        {/* Ya da aşağıdaki gibi div içerisinde kullanabiliriz. */}
        <div>
        {isLoggedIn ? <div>Hoşgeldin {fullName}</div> : "Giriş Yapın"}
        </div>

        <div> {isLoggedIn ? <div>Hoşgeldin {fullName}</div> : null }</div> {/* Eğer sadece "true" durumu için görünsün else için ifade olmasın istiyorsak */}

        {/* Eğer else durumunda bir "component" göstermek istiyorsak: */}
        <div> {isLoggedIn ? <div>Hoşgeldin Dilara</div> : <Header />}</div>
        
        {/* Diğer Alternatif de aşağıdaki gibi. */}

        <div>
            {isLoggedIn && <div>Hoşgeldiniz {fullName}</div>}  {/* Eğer isLoggedIn "true" ise görünür. */}

            {!isLoggedIn && <a href="#">Giriş Yapınız</a>}  {/* Eğer isLoggedIn "false" ise görünür. */}
        </div>


        <div> {isLoggedIn ? <div>Hoşgeldiniz Dilara Aykut</div> : <Login />} </div>

        </div>
    );
}
export default LoggedIn;