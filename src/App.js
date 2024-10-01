import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import './App.css'


const App = () => {
  const [isOpen,setIsOpen] = useState([false, false]);
  //const text="React";
  const questions = [
    {answers: 'The Virtual DOM is a lightweight copy of the real DOM that React uses to optimize updates. It allows React to efficiently determine which parts of the UI need re-rendering by comparing the current and previous virtual DOM states.'},
    {answers: 'JSX (JavaScript XML) is a syntax extension in React that allows writing HTML-like code in JavaScript. It makes it easier to structure components, though its eventually transpiled into regular JavaScript.'},
    {answers: 'Hooks are functions introduced in React 16.8 that let you use state and other React features in functional components, like useState, useEffect, etc.'},
  ]

  const handleClick = (index) => {
    const nowOpen = [...isOpen];
    nowOpen[index] = !nowOpen[index];
    setIsOpen(nowOpen);
  }

  return (
    <div>
      <h2 className='header'>FAQ</h2>
      <h3>
      <p  className='title'>If you're diving into React, understanding its core 
      concepts will help you build dynamic and efficient web applications.</p>
      </h3>
      <div className='card1'>
          <div className='cards'>
            <h4 className='q1'>What is the Virtual DOM in React?</h4>
              <button onClick={() => handleClick(0)} className='btn-plus'>
                {isOpen[0] ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
              </button>
          </div>
            {isOpen[0] && (
              <div className='answers'><h3>{questions[0].answers}</h3></div>
            )}
      </div>
      <div className='card2'>
          <div className='cards'>
            <h4 className='q2'>What is JSX in React?</h4>
              <button onClick={() => handleClick(1)} className='btn-plus'>
                {isOpen[1] ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
              </button>
          </div>
            {isOpen[1] && (
              <div className='answers'><h3>{questions[1].answers}</h3></div>
            )}
      </div>
      <div className='card2'>
          <div className='cards'>
            <h4 className='q3'>What are hooks in React?</h4>
              <button onClick={() => handleClick(2)} className='btn-plus'>
                {isOpen[2] ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
              </button>
          </div>
            {isOpen[2] && (
              <div className='answers'><h3>{questions[2].answers}</h3></div>
            )}
      </div>
    </div>
  )
}

export default App
