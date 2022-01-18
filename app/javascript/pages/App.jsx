import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <div className='bg-light'>
        <Router>
            <Routes>
                <Route path='/' exact element={<h1>Hello, DnD!</h1>}/>
                <Route path='/about' exact element={<h1>About</h1>}/>
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