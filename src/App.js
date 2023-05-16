import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#495057';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      {/* <Navbar title="Fire" aboutText="About Us" /> */}
      {/* <Navbar/> */}

      <Navbar title="Fire" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm heading="Enter to analyze" mode={mode}/>

        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
