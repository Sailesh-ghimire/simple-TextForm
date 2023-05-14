import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
    }
    else {
      setMode('dark');
    }
  }
  return (
    <>
      {/* <Navbar title="Fire" aboutText="About Us" /> */}
      {/* <Navbar/> */}

      <Navbar title="Fire" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm heading="Enter to analyze" />

        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
