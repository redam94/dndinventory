import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header}  from "./pages/components";
import { Homepage, SignUp, Login, About} from "./pages";

const App = () => {
    return (
        <div className='bg-light'>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' exact element={<Homepage/>}/>
                <Route path='/about' exact element={<About/>}/>
                <Route path='/login' exact element={<Login/>}/>
                <Route path='/signup' exact element={<SignUp/>}/>
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