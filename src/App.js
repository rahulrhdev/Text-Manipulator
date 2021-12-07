// import logo from "./logo.svg";SS
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react'


function App() {

 const [mode, setMode] = useState('light');

 
 const toggleMode =() => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
}
  return (

  <>
  {/* <Navbar title = "TextUtils"/> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <div className="container my-3" >
    <TextForm heading ="Enter your text below" mode={mode}/>
    {/* <About/> */}
  </div>

  </>
  );
}


export default App;
