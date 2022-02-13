import { render } from "react-dom";
import React, {useState, useRef, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import {Header}  from "./pages/components";
import { Homepage, SignUp, Login, About, CreateItem, Items } from "./pages";
import axios from 'axios';
import image from './assets/portable-hole.png';
import EditItem from './pages/Items/EditItem';

const mystyle = {
    display: "flex",
    height: '100%',
    minHeight: '100vh', 
    backgroundSize:'cover', 
    backgroundPosition: 'center', 
    backgroundImage:`url(${image})`, 
    backgroundRepeat: 'no-repeat',
    flexDirection: 'column',
    backgroundAttachment: 'local'}

const Test = () => {
    params = useParams();
    return(
        <div>
            <h1>Editing item {params.id}</h1>
        </div>
    )
}

const App = () => {
    let [loggedIn, setLoggedIn] = useState(false);
    let [user, setUser] = useState(undefined);
    useEffect(() => {
    axios.get('/api/v1/logged_in', {withCredentials: true})
        .then( responce => {
            //loggedIn.current = 
            setLoggedIn(responce.data?.logged_in)
            setUser(responce.data?.user)

        })
        .catch(err => console.log(err))
    }, [loggedIn])
    
    return (
        <div className='bg-light' style={{height: '100%'}}>
        <Router>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <Routes>
                <Route path='/' exact element={<Homepage loggedIn={loggedIn} setLoggedIn={setLoggedIn} style={mystyle}/>}/>
                <Route path='/about' exact element={<About style={mystyle}/>}/>
                <Route path='/login' exact element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
                <Route path='/signup' exact element={<SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
                <Route path='/character/:name' exact element={<Items loggedIn={loggedIn} style={mystyle}/>}/>
                <Route path='/item/:name/:id/edit' exact element={<EditItem loggedIn={loggedIn}/>}/>
                <Route path='/createitem/:name' exact element={<CreateItem loggedIn={loggedIn}/>}/>
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