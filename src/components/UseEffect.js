import React, { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0); //Bu bir state. useState içerisindeki "0" ise başlangıç değeridir.
    const [amount, setAmount] = useState(1);

    useEffect (() => {
        console.log("Bir state değişti.")
    });

    useEffect (() => {
        console.log("Componenet mount edildi.")
    }, []);

    useEffect (() => {
        console.log("Count state değişti.")
    }, [count]);

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
export default UseEffect;