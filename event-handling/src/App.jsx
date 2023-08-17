import React, { useState } from "react";

const App = () => {

    const text="Click Me!";
    const color="#8e44ad";
    const [bg, setBg] = useState(color);
    const [name, setName] = useState(text);


    const bgChange = () =>{

        let newCol = "green";
        setBg(newCol);

    }

    const expName = () =>{

        let newName="Ouch";
        setName(newName);

    }

    const dbClick = () => {

        let newCol = "yellow";
        setBg(newCol);

        let dbName="Bas!";
        setName(dbName);

    }

    return (
        <>
            <div style={{backgroundColor:bg}}>
                <button
                onClick={()=>{
                    bgChange();
                    expName();
                }}
                onDoubleClick={dbClick}>
                    {name}
                </button>
            </div>
        </>
    )
}

export default App;
