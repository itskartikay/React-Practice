import React, { useEffect, useState } from "react";

const App = () => {


    const [num, setNum] = useState(0)

    const click = () => {
        setNum(num+1)
    }

    useEffect (()=>{
        document.title = `Click Me Value = ${num}`
    })

    return (
        <button onClick={click}>Click Me {num}</button>
    )
}

export default App;