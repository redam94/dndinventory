import React, {useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import {Formik} from 'formik';
import * as yup from 'yup';


const item_schema = yup.object().shape({
    name: yup.string().required("Name required"),
    description: yup.string(),
    value: yup.number().required().min(0).default(0),
    weight: yup.number().required().min(0).default(0),
});

const ItemForm = ({ handleSubmit, handleChange, values, errors, touched }) =>{
    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Item Name</Form.Label>
                <Form.Control 
                    name="name" 
                    type="text" 
                    placeholder="Hole"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                    isInvalid={!!errors.name}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Item Description</Form.Label>
                <Form.Control 
                    name="description" 
                    value={values.description}
                    onChange={handleChange}
                    isValid={touched.description && !errors.description}
                    isInvalid={!!errors.description}
                    type="textarea" 
                    placeholder="Enter a description here"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Item Weight</Form.Label>
                <Form.Control 
                    name="weight" 
                    type="text" 
                    placeholder={2}
                    value={values.weight}
                    onChange={handleChange}
                    isValid={touched.weight && !errors.weight}
                    isInvalid={!!errors.weight}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Item Value(gp)</Form.Label>
                <Form.Control 
                    name="value"
                    type="text"
                    value={values.value}
                    onChange={handleChange}
                    isValid={touched.value && !errors.value}
                    isInvalid={!!errors.value} 
                    placeholder={1}/>
            </Form.Group>
            <Button className="my-4" type="submit" variant="primary">Submit</Button>
        </Form>
    )
};

export default CreateItem = ({ loggedIn }) => {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {loggedIn || navigate('/')}, [loggedIn])
    return (
        <div className="m-4">
            <h1>Add a new item to {params.name}'s inventory</h1>
            <Formik validationSchema={item_schema} onSubmit={console.log} 
            initialValues={{name:"", weight:0, value:0, description:""}}>
                {ItemForm}
            </Formik>
        </div>
    )
}

