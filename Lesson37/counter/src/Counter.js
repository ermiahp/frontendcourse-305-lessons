import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
  
    const add = () => {
      setCounter(counter+ 1);
    }
  
    return(
      <div>
        <h1>{counter}</h1>
        <button onClick={() => add()}> Add </button>
      </div>
    )
}

export default Counter;