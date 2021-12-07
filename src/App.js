// import logo from "./logo.svg";SS
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import React, { useState } from 'react'


function App() {

 const [mode, setstate] = useState(initialState)
  return (

  <>
  <Navbar title="TextUtils" />
  <div className="container my-3" >
    <TextForm heading ="Enter the text below"/>
    {/* <About/> */}
  </div>

  </>
  );
}


export default App;
