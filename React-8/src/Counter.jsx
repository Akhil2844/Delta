import React, { useState, useEffect } from "react";

export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    const incrementCounty = () => {
        setCounty((prevCount) => prevCount + 1);
    };

    const incrementCountx = () => {
        setCountx((prevCount) => prevCount + 1);
    };

   useEffect(function printSomething()
   {
    console.log("This is side effect")
   },[countx])
    return (
        <div>
            <h3>Counxt={countx}</h3>
            <button onClick={incrementCountx}>+1</button>
            <h3>Counyt={county}</h3>
            <button onClick={incrementCounty}>+1</button>
        </div>
    );
}
