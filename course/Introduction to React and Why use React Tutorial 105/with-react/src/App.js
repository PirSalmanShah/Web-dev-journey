
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // value is name of state which value us update on setValue and defualt value is 0
  const [value,setValue]=useState(0)
  return (
    <div className="App">
      <Navbar logoText="salman"/>
      <div className="counter">
        {value}
      </div>
      <button onClick={()=>{setValue(value+1)}}>Click on me</button>
      <Footer/>
    </div>
  );
}

export default App;
