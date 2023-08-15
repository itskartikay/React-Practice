import React from "react";

function add(a,b){
    let sum=a+b;
    return sum;
}
function sub(a,b){
    let sum=a-b;
    return sum;
}
function div(a,b){
    let sum=a/b;
    sum=sum.toFixed(2)
    return sum;
}
function mul(a,b){
    let sum=a*b;
    return sum;
}

export {add, sub, div, mul};