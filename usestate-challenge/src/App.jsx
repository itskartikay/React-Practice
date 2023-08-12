import React, { useState } from "react";

const App = () =>{

    const [count, setCount]=useState(0);

    const updateCount = () =>{
        setCount(count+1);
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={updateCount}>
                Click Me
            </button>
        </>
    )

}

export default App;