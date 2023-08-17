import React, { useState } from "react";

const App = () => {

  const [fullName, setFullName] = useState({
    fname:"",
    sname:"",
  });

  const onSubmit = (event) =>{
    event.preventDefault();
    alert("Form Submitted")
  }

  const inputEvent = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)

    const name = event.target.name
    const value = event.target.value

    setFullName((preValue)=>{
      if(name==='fname'){
        return{
          fname: value,
          sname: preValue.sname
        }
      }else if(name==='sname'){
        return{
          fname: preValue.fname,
          sname: value
        }
      }
    })

  }

  return(
    <>
      <form onSubmit={onSubmit}>
          <h1>
              Hello {fullName.fname} {fullName.sname}
          </h1>

          <input
            type="text"
            placeholder="First Name"
            name="fname"
            value={fullName.fname}
            onChange={inputEvent}>
          </input>

          <br/>

          <input
            type="text"
            placeholder="Second Name"
            name="sname"
            value={fullName.sname}
            onChange={inputEvent}>
          </input>

          <br/>

          <button onClick={onSubmit}>Click Me</button>
      </form>
    </>
  )
}

export default App;