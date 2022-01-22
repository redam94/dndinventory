import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export default SignUp = ({ loggedIn, setLoggedIn }) => {
    let navigate = useNavigate();
    
    const handleSubmit= (event) => {
        console.log(event)
        event.preventDefault();
        navigate('/')
    }
    return (
        <>
        <h1 className="m-4">Sign Up</h1>
        <Form className="m-4" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control required type="text" placeholder="User name"/>
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password"/>
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type="password" placeholder="Confirm Password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}