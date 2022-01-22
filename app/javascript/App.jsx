import { render } from "react-dom";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header}  from "./pages/components";
import { Homepage, SignUp, Login, About} from "./pages";
import axios from 'axios';

const App = () => {
    let [loggedIn, setLoggedIn] = useState(false);
    let [user, setUser] = useState(undefined);

    axios.get('/logged_in', {withCredentials: true})
        .then( responce => {
            setLoggedIn(true)
            setUser(responce.data?.user)

        })
        .catch(err => console.log(err))
    
    return (
        <div className='bg-light'>
        <Router>
            <Header loggedIn={loggedIn}/>
            <Routes>
                <Route path='/' exact element={<Homepage loggedIn={loggedIn}/>}/>
                <Route path='/about' exact element={<About/>}/>
                <Route path='/login' exact element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path='/signup' exact element={<SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path='/create_character' exact element={<h1>Create your character</h1>}/>
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