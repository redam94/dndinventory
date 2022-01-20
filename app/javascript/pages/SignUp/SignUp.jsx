import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default SignUp = () => {
    const handleSubmit= (event) => {console.log(event)}
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