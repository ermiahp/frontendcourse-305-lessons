import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import ResponsiveAppBar from './Components/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes className="App">
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
