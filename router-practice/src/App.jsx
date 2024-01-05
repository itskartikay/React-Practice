import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>

    {/* <About/>
    <Contact/> */}

    </>
  );
}

export default App;