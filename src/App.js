import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Screen from "./Screen";
import { useState } from "react";
function GalleryImage () {
  return <div>It works!
  </div>
}

function App() {
  const [CurrentlyActiveButton, setCurrentlyActiveButton] = useState ("home");
  function onClickButton(e) {
    setCurrentlyActiveButton(e.target.name);
  }
  return (
    <div className="App">
      <Header 
      CurrentlyActiveButton={CurrentlyActiveButton}
       onClickButton={onClickButton}
       />
      
      <Screen  title={CurrentlyActiveButton} />
      </div>
  );
}

export default App;
