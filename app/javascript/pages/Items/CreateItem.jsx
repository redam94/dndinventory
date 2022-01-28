import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {Formik} from 'formik';
import * as yup from 'yup';


export default ItemForm = ({ character }) => {
    let params = useParams();
    return (
        <div className="m-4">
            <h1>Add a new item to {params.name}'s inventory</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" placeholder="hole"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Item Description</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter a description here"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Item Weight</Form.Label>
                    <Form.Control type="text" placeholder={2}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Item Value(gp)</Form.Label>
                    <Form.Control type="text" placeholder={1}/>
                </Form.Group>
                <Button className="my-4" type="submit" variant="primary">Submit</Button>
            </Form>
        </div>
    )
}

