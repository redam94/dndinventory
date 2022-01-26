import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default ItemForm = ({character, setWeight, setValue}) => {
    
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Item Weight</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

