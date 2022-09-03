import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=4&category=11&difficulty=easy&type=boolean')
        .then(res => {
            // console.log(res);
            if(res.status === 200){
                console.log(res.data);
                setQuestions(res.data.results);
            }
        })
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {questions.map(question => <Question title={question.question}/>)}
      </header>
    </div>
  );
}

export default App;
