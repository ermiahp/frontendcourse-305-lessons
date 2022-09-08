import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { completeTodo, clearStore } from './todoReducer';
import Temp from './components/temp';

function App() {
  const dispatch = useDispatch();

  const addTodoLocal = () => {
    dispatch(completeTodo())
  }

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
        <button onClick={() => addTodoLocal()}>Add me</button>
        <button onClick={() => dispatch(clearStore())}>Clear</button>
        <Temp />
      </header>
    </div>
  );
}

export default App;
