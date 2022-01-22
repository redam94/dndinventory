import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default SignUp = ({ loggedIn, setLoggedIn }) => {
    
    let navigate = useNavigate();

    useEffect(() => {if(loggedIn){navigate('/')}}, [])
    
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConfirmation, setPasswordConfirmation] = useState('');
    let [validated, setValidated] = useState(false);

    const handleSubmit= (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            navigate('/signup')
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.preventDefault();
            axios.post('/api/v1/users', 
            {user:{username: userName, password: password, password_confirmation: passwordConfirmation}}, 
            {withCredentials: true})
            .then(responce => {
                if(responce.status === 200){
                    if(responce.data.status === 500){
                        console.log(password.length)
                        setUserName('')
                        setPassword('')
                        setPasswordConfirmation('')
                    }else if(responce.data.status === 'created'){
                        setLoggedIn(true)
                        console.log(responce)
                        navigate('/')
                    }
                    console.log("200",responce)
                }
            })
        } setValidated(true)
    }

    return (
        <>
        <h1 className="m-4">Sign Up</h1>
        <Form validated={validated} className="m-4" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control 
                    required type="text" value={userName} onChange={(event)=>{setUserName(event.target.value); setValidated(true)}}
                    placeholder="User name"/>
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    required isInvalid={validated && (password.length<5) && !(password === passwordConfirmation)} 
                    type="password" 
                    placeholder="Password"
                    value={password} onChange={(event)=>{setPassword(event.target.value); setValidated(true)}}/>
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    required 
                    type="password" placeholder="Confirm Password"
                    value={passwordConfirmation} onChange={(event)=>{setPasswordConfirmation(event.target.value); setValidated(true)}}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}