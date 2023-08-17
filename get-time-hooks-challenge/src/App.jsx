import React, { useState } from "react";

const App = () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const updatedTime = setInterval(() => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    },1000)

    return(
        <>
            <h1>{ctime}</h1>
            {/* <button onClick={updatedTime}>Get Time</button> */}
        </>
    )
}

export default App;