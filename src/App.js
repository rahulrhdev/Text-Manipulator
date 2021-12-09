import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Dark Mode has been enabled" , "success")
    }
  };
  return (
    <>
      <Router>
      <Navbar title="Text-Manipulator" mode={mode} toggleMode={toggleMode} />
      <div className = "container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter your text below" mode={mode} />
          </Route>
        </Switch>
        </div>
      </Router>
  
    </>
  );
}

export default App;
