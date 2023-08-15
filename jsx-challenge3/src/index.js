import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate= new Date();
curDate=curDate.getHours()
var greetings =""
var cssStyle={}

if (curDate>=1 && curDate<12){
  greetings="Good Morning"
  cssStyle.color="green"

}else if(curDate>=12 && curDate<20){
  greetings="Good Afternoon"
  cssStyle.color="orange"
}else{
  greetings="Good Night"
  cssStyle.color="black"
}

ReactDOM.render(
  <>
  <div>
    <h1>Hi, <span style={cssStyle}>{greetings}</span></h1>
  </div>  
  </>
  ,
  document.getElementById('root')
)