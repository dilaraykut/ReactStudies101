import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0); //Bu bir state. useState içerisindeki "0" ise başlangıç değeridir.
    const [amount, setAmount] = useState(1);

    return (
        <div>
            <span>Counter</span>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + amount)}>Arttır</button> {/*Arrow function yazdık. */}
            {/*<button onClick={() => setCount(count - amount)}>Azalt</button>*/}
            <button onClick={() => setCount((prev) => prev - amount)}>Azalt</button> {/*Previous State */}
            <hr/>
            <div>Arttırma: +{amount}</div>
            <button onClick={() => setAmount(3)}>+3</button>
            <button onClick={() => setAmount(5)}>+5</button>
            <button onClick={() => setAmount(10)}>+10</button>
        </div>
    );
}
export default Counter;