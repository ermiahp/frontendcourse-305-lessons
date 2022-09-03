import logo from './logo.svg';
import './App.css';
import Search from './componets/Search';
import MyImageList from './componets/MyImageList';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const getImage = (images) => {
    console.log('Line 8');
    console.log(images);
    setImages(images);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search getImags={(temp) => getImage(temp)}/>
        <MyImageList images={images}/>
      </header>
    </div>
  );
}

export default App;
