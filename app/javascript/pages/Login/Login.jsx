import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default Login = ({ loggedIn, setLoggedIn }) => {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault()
        navigate('/')
    }
    
    
    return(
    <>
    <h1 className="m-4">Login</h1>
    <Form className="mx-4" onSubmit={handleSubmit}>
        <Form.Group controlId="Username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" required/>
        </Form.Group>
        <Form.Group className="my-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required/>
        </Form.Group>
        <Button type="submit" variant='secondary'>Submit</Button>
    </Form>
    </>
    )
}