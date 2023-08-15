import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name='Kartikay Sharma'
ReactDOM.render(
  <React.Fragment>
    <h1>Hi my name is {name}</h1>
    <p>I am studying CS from Chitkara. My lucky number is {10+3}.
    Here is a random number - {Math.random()}. Here are me skills :- </p>
    <ol>
      <li>C++</li>
      <li>JavaScript</li>
      <li>Python</li>
    </ol>
  </React.Fragment>, document.getElementById("root")
)