import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default ItemForm = ({ handleSubmit, handleChange, values, errors, touched })=>{
    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Item Name</Form.Label>
                <Form.Control 
                    name="name" 
                    type="text" 
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
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Item Weight</Form.Label>
                <Form.Control 
                    name="weight" 
                    type="text" 
                    value={values.weight}
                    onChange={handleChange}
                    isValid={touched.weight && !errors.weight}
                    isInvalid={!!errors.weight}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Item Value</Form.Label>
                <Form.Control
                    name="value"
                    type="text"
                    value={values.value}
                    onChange={handleChange}
                    isValid={touched.value && !errors.value}
                    isInvalid={!!errors.value}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control 
                    name="qty"
                    type="text"
                    value={values.qty}
                    onChange={handleChange}
                    isValid={touched.qty && !errors.qty}
                    isInvalid={!!errors.qty} 
                    />
            </Form.Group>
            <Button className="my-4" type="submit" variant="primary">Submit</Button>
        </Form>
    )
};