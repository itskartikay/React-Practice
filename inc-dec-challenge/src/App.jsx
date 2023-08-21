import React, { useState } from 'react';
import "./App.css"


// Material UI
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

const App = () => {

  const [num, setNum] = useState(0);

  const inc = () => {
    setNum(num+1)
  }

  const dec = () => {
    if(num>0){
      setNum(num-1)
    }
    else{
      alert("Already Reached Limit")
    }
  }

  return (
    <>
      <div className='main-div'>
        <h1>{num}</h1>
        <div className='buts'>
          <Button variant='contained' className='butt' onClick={inc}>
            <AddIcon/>
          </Button>
          <Button variant='contained' className='butt' onClick={dec}>
            <DeleteForeverIcon/>
          </Button>

        </div>
      </div>
    </>
  )
}

export default App;
