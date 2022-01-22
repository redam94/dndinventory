import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

export default CreateCharacter = ({ show, onHide }) => {
    let [characterName, setCharacterName] = useState('');
    let [isValid, setIsValid] = useState(false);
    let [validated, setValidated] = useState(false);
    const handleChange = (event) => {
        setCharacterName(event.target.value)
    } 
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        
        event.preventDefault();
        event.stopPropagation();
        axios.post('/api/v1/characters', { character: {
            name: characterName
        } }, {withCredentials: true})
            .then((response) => {
                console.log(response);
                if(response.data?.status === 'created'){
                    setIsValid(false);
                    setValidated(true);
                    onHide()
                    alert("Character Created")
                }else{
                    setIsValid(true);
                    setValidated(false)
                    console.log(isValid);
                }
            })
            form.checkValidated();
        
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Character</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="my-2" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group>
                    <Form.Label>Character Name</Form.Label>
                    <Form.Control type="text" isInvalid={isValid} value={characterName} onChange={handleChange}/>
                    <Form.Control.Feedback type="invalid">Invalid Name</Form.Control.Feedback>
                    </Form.Group>
                
                <Button className="my-2" variant="secondary" type='submit'>Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}