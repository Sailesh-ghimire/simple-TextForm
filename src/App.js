import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(0 37 92)';
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");

    }
  }
  return (
    <>
      {/* <Navbar title="Fire" aboutText="About Us" /> */}
      {/* <Navbar/> */}

      <Router>
        <Navbar title="Fire" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}>

            </Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading=" UpperCase, LowerCase" mode={mode} />}>
            
          </Route>
        </Routes>
      </div>
    </Router >
      {/* <About/> */ }


    </>
  );
}

export default App;
