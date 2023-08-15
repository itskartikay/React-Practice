import React from 'react';
import * as cal from "./Calc";

function App() {
  return (
    <ol>
      <li>Add {cal.add(10,20)}</li>
      <li>Sub {cal.sub(10,20)}</li>
      <li>Div {cal.div(10,23)}</li>
      <li>Mul {cal.mul(10,20)}</li>
    </ol>
    
  );
}

export default App;
