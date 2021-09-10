import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea"
import { useState } from "react";
import Alert from './components/Alert'
// import About from "./components/About"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import React from 'react'


export default function App() {
  const [mode, setmode] = useState('light') 
  const [alert, setalert] = useState(null)
  
  
  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#848C7A'
      showalert('darkmode has been enabled', 'success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert('Lightmode has been enabled', 'success')

    }
  }

  const showalert=(message, type)=>{
      setalert({
        message :  message,
        type : type,
      })
      setTimeout(() => {
        setalert(null)
      }, 2000);
  }
  return (
    // <Router>
    <>
    <Navbar togglemode={togglemode} mode={mode}/>
    <Alert alert={alert}/>

    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route>
          
          
          <Route exact path="/"> */}

    <Textarea mode={mode} showalert={showalert} />
          {/* </Route>
        </Switch> */}


    </>
    // </Router>
  )
}

