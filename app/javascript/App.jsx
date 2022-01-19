import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header}  from "./pages/components";
import { Homepage } from "./pages";

const App = () => {
    return (
        <div className='bg-light'>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' exact element={<Homepage/>}/>
                <Route path='/about' exact element={<h1>About</h1>}/>
                <Route path='/login' exact element={<h1>Login</h1>}/>
                <Route path='/signup' exact element={<h1>Sign Up</h1>}/>
            </Routes>
        </Router>
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    render(
      <App/>,
      document.body.appendChild(document.createElement("div"))
    );
  });