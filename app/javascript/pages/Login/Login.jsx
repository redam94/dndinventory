import React, {useState, useEffect} from 'react';
import {Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {Formik} from "formik";
import axios from "axios";


const login_schema = yup.object().shape({
    userName: yup.string().required("User name required"),
    password: yup.string().required("Password required")
})

export default Login = ({ loggedIn, setLoggedIn, setUser }) => {
    let navigate = useNavigate();
    
    useEffect(() => {if(loggedIn){
        navigate('/')
    }})
    const handleSubmit = (event) => {
        axios.post(
            '/login', 
            {
                user: {
                    username: event.userName, 
                    password: event.password}
            },
            {withCredentials: true}
            ).then((response) => {
                    if(response.status===200){
    
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
        
    }
    
    
    return(
    <>
    <h1 className="m-4">Login</h1>
    <Formik 
        onSubmit={handleSubmit} 
        initialValues={{userName: '', password:''}}
        validationSchema={login_schema}
    >
    {({handleSubmit, handleChange, values, errors, touched}) => (
    <Form noValidate className="mx-4" onSubmit={handleSubmit}>
        <Form.Group controlId="Username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="userName" value={values.userName} onChange={handleChange}
            isValid={touched.userName && !errors.userName}
            isInvalid={!!errors.userName}
            placeholder="User name"/>
            <Form.Control.Feedback type='invalid'>{errors.userName}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={values.password} onChange={handleChange}
            isValid={touched.password && !errors.password}
            isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant='secondary'>Submit</Button>
    </Form>
    )
    }
    </Formik>
    </>
    )
}