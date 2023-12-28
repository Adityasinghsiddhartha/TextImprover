import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Aboout from './components/Aboout';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not 
  const [alert, setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      //document.title="TextImprover-App"+"dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      //document.title="TextImprover-App"+"Light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextImprover" aboutText ="About TextImprover" mode = {mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextImprover- Word Counter, Character Counter, Remove extra spaces " mode = {mode} />}/>
    <Route exact path="/about" element={<Aboout /> } mode = {mode} />
    </Routes>
    </div>
    </Router>
   </>

  );
}

export default App;
