import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Name from "./Name";

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route exact path="/contact/name" element={<Name/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>

    {/* <About/>
    <Contact/> */}

    </>
  );
}

export default App;