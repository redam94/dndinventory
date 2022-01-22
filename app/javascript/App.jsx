import { render } from "react-dom";
import React, {useState, useRef, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import {Header}  from "./pages/components";
import { Homepage, SignUp, Login, About} from "./pages";
import axios from 'axios';

function Test(){
    let params = useParams();
    return (
        <h1 className="m-4">{params.name}</h1>
    )
}
const App = () => {
    let [loggedIn, setLoggedIn] = useState(false);
    let [user, setUser] = useState(undefined);
    useEffect(() => {
    axios.get('/logged_in', {withCredentials: true})
        .then( responce => {
            //loggedIn.current = 
            setLoggedIn(responce.data?.logged_in)
            setUser(responce.data?.user)

        })
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div className='bg-light'>
        <Router>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <Routes>
                <Route path='/' exact element={<Homepage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path='/about' exact element={<About/>}/>
                <Route path='/login' exact element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
                <Route path='/signup' exact element={<SignUp loggedIn={loggedIn}  setUser={setUser}/>}/>
                {loggedIn && <Route path='/character/:name' exact element={<Test/>}/>}
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