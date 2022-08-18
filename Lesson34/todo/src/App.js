import logo from './logo.svg';
import './App.css';
import Todo from './componets/Todo/Todo';
import TodoV2 from './componets/Todo/TodoV2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        <TodoV2/>
      </header>
    </div>
  );
}

export default App;
