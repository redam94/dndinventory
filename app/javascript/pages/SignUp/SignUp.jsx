import React, {useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';

const user_schema = yup.object().shape({
    userName: yup.string().min(5, "username must be at least 5 characters long.").required("username is required"),
    password: yup.string().min(5)
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/, 
            {message:"Password must contain a number and a letter.", excludeEmptyString:true})
        .required("Password required"),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match').required("Password required")
});

export default SignUp = ({ loggedIn, setLoggedIn }) => {
    
    let navigate = useNavigate();

    useEffect(() => {if(loggedIn){navigate('/')}}, [])
    
    const handleSubmit = (event) => {
        axios.post('/api/v1/users', 
            {user: {
                username: event.userName,
                password: event.password,
                password_confirmation: event.passwordConfirmation
            }},
            {withCredentials: true})
            .then((response) => {
                console.log(response);
                if(response.status === 200){
                    if(response.data.status === 500){
                        alert("username already exists");
                    }else if(response.data.status === "created"){
                        setLoggedIn(true);
                        navigate('/');
                    }
                }
            })
    }
  
    return (
        <>
        <h1 className="m-4">Sign Up</h1>
        <Formik validationSchema={user_schema} onSubmit={handleSubmit} 
            initialValues={{userName:"", password:"", passwordConfirmation:""}}>
            {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,    
            }) => (
        <Form noValidate className="m-4" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control 
                    type="text" 
                    name="userName"
                    value={values.userName} 
                    onChange={handleChange}
                    isValid={touched.userName && !errors.userName}
                    isInvalid={!!errors.userName}
                    placeholder="Username"/>
                <Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    name="password"
                    type="password" 
                    placeholder="Password"
                    value={values.password} 
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}/>
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    name="passwordConfirmation"
                    type="password" 
                    placeholder="Confirm Password"
                    value={values.passwordConfirmation} 
                    onChange={handleChange}
                    isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                    isInvalid={!!errors.passwordConfirmation}/>
                <Form.Control.Feedback type="invalid">{errors.passwordConfirmation}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
            )}
        </Formik>
        </>
    )
}