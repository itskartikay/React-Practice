import React, { useState } from "react";

const App = () => {

  const [fname, setName] = useState("");
  const [firstName, setFirstName] = useState();

  const [sname, setSname] = useState("");
  const [secondName, setSecondName] = useState();

  const onSubmit = (event) =>{
    event.preventDefault();
    setFirstName(fname)
    setSecondName(sname)
  }

  const inputEvent = (event) => {
    setName(event.target.value)
  }

  const inputEvent2 = (event) => {
    setSname(event.target.value)
  }

  return(
    <>
      <form onSubmit={onSubmit}>
          <h1>
              Hello {firstName} {secondName}
          </h1>

          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={inputEvent}>
          </input>

          <input
            type="text"
            placeholder="First Name"
            value={sname}
            onChange={inputEvent2}>
          </input>

          <button onClick={onSubmit}>Click Me</button>
      </form>
    </>
  )
}

export default App
