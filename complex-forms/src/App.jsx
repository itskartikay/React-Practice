import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [fullName, setFullName] = useState({
    fname:"",
    sname:"",
    email:"",
    phone:""
  });

  const onSubmit = (event) =>{
    event.preventDefault();
    alert("Form Submitted")
  }

  const inputEvent = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)

    // const name = event.target.name
    // const value = event.target.value

    const {name, value} = event.target

    setFullName((preValue)=>{
      return{
        ...preValue,
        [name] : value
      }
    })

    // setFullName((preValue)=>{


    //   if(name==='fname'){
    //     return{
    //       fname: value,
    //       sname: preValue.sname,
    //       email: preValue.sname

    //     }
    //   }else if(name==='sname'){
    //     return{
    //       fname: preValue.fname,
    //       sname: value,
    //       email: preValue.sname
    //     }
    //   }
    //   else if(name==='email'){
    //     return{
    //       fname: preValue.fname,
    //       sname: preValue.sname,
    //       email: value
    //     }
    //   }
    // }
    //)

  }

  return(
    <>
      <div>
        <form onSubmit={onSubmit}>
            <h1>
                Hello {fullName.fname} {fullName.sname}
            </h1>
            <p>
              Email ID - {fullName.email}
              <br/>
              <br/>
              Phone Number - {fullName.phone}
            </p>

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

            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={fullName.email}
              onChange={inputEvent}>
            </input>

            <br/>

            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={fullName.phone}
              onChange={inputEvent}>
            </input>

            <br/>
            <button onClick={onSubmit}>Click Me</button>
        </form>
      </div>
    </>
  )
}

export default App;