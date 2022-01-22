import React, {useState, useEffect} from 'react';
import {Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default Login = ({ loggedIn, setLoggedIn, setUser }) => {
    let navigate = useNavigate();
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    useEffect(() => {if(loggedIn){
        navigate('/')
    }})
    const handleSubmit = (event) => {
        axios.post(
            '/login', 
            {
                user: {
                    username: userName, 
                    password: password}
            },
            {withCredentials: true}
            ).then((response) => {
                    if(response.status===200){
                        console.log(response.data)
                        if(response.data?.status === 401){
                            alert(response.data.errors[0])
                            setUserName('')
                            setPassword('')
                        }else{
                            setLoggedIn(response.data?.logged_in || false)
                            navigate('/')
                        }
                    }
                })
            .catch((error) => {console.log(error)})
        event.preventDefault()
        
    }
    
    
    return(
    <>
    <h1 className="m-4">Login</h1>
    <Form className="mx-4" onSubmit={handleSubmit}>
        <Form.Group controlId="Username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" required value={userName} onChange={event=>setUserName(event.target.value)}/>
        </Form.Group>
        <Form.Group className="my-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required value={password} onChange={event=>(setPassword(event.target.value))}/>
        </Form.Group>
        <Button type="submit" variant='secondary'>Submit</Button>
    </Form>
    </>
    )
}