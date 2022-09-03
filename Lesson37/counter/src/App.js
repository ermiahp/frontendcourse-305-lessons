import React, { useEffect, useState } from 'react';
import './App.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter+ 1);
    localStorage.setItem('counter', counter+ 1);
  }

  useEffect(() => {
    setCounter(parseInt(localStorage.getItem('counter')?? 0))
  }, []);

  const clearStorage = () => {
    localStorage.clear();
    setCounter(0);
  }

  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={add}> Add </button>
      <button onClick={() => clearStorage()}>Reset</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
    </div>
  );
}

export default App;
