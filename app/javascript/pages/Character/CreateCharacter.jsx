import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const character_schema = yup.object().shape({
    characterName: yup.string().required("Character name required"),
});

const CharacterForm = ({onHide}) => {
    const onSubmit = (event) => {
        axios.post('/api/v1/characters', { character: {
            name: event.characterName
        } }, {withCredentials: true})
            .then((response) => {
                if(response.data?.status === 'created'){
                    onHide()
                }else{
                    alert("Character not created")
                }
            })
    }; 

    return (
    <Formik validationSchema={character_schema} onSubmit={onSubmit} initialValues={{characterName: ""}}>
        {({handleSubmit, handleChange, values, touched, errors}) => (
           <Form noValidate className="my-2" onSubmit={handleSubmit}>
               <Form.Group>
                   <Form.Text>Character Name</Form.Text>
                   <Form.Control 
                        name="characterName"
                        type="text"
                        value={values.characterName}
                        placeholder="Jar"
                        onChange={handleChange}
                        isInvalid={!!errors.characterName}
                        isValid={touched.characterName && !errors.characterName}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.characterName}</Form.Control.Feedback>
               </Form.Group>
               <Button className="my-2" variant="secondary" type='submit'>Submit</Button>
           </Form> 
        )}
    </Formik>
    )
}

export default CreateCharacter = ({ show, onHide }) => {

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Character</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CharacterForm onHide={onHide} />
            </Modal.Body>
        </Modal>
    )
}