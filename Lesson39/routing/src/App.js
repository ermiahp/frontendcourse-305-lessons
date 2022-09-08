import logo from './logo.svg';
import './App.css';

import {
	Routes,
	Route,
	Link,
  useNavigate,
} from 'react-router-dom';

import About from './Components/Aboutus';
import Home from './Components/Home';
import Contact from './Components/Contact';

// import { About, Home, Contact}  from './Components/';

 
function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <span onClick={() => navigate(-1)}>Back</span>
            </li>
          </ul>          
        </header>
        <Routes>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
