import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var fname ="Kartikay"
var lname ="Sharma"
const currentDate=new Date().toLocaleDateString()
const currentTime=new Date().toLocaleTimeString()
ReactDOM.render(
  <>
  <h1>{`My name is ${fname} ${lname}`}</h1>
  <p>Current Date is :- {currentDate}</p>
  <p>Current Time is :- {currentTime}</p>
  </>,
  document.getElementById("root")
)