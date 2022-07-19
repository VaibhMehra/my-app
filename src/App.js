// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      mess: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const greenTheme = () => {
    if (mode === 'dark' || mode === 'light') {
      setMode('success');
      document.body.style.backgroundColor = '#8be28b';
    }
  }

  const defaultTheme = () => {
    if (mode === 'dark' || mode === 'success') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'; //light
      showAlert("Light mode has been enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#3a3838'; //dark
      // document.body.style.Color = 'white'; 
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        {/* <Navbar title = 'TextUtils' home = 'Home page' about = 'About Us' />  */}
        <Navbar title='My App' mode={mode} toggleMode={toggleMode} defaultTheme={defaultTheme} greenTheme={greenTheme} />
        <Alert alert={alert} />
        <div className="container">
          {/* <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} /> */}
          <Routes>
            <Route path="/about" element={<About mode={mode} />}>
            </Route>
            <Route path="/" element={<TextForm heading="Try My App - Text Converter" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
