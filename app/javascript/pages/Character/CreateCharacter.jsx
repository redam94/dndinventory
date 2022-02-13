import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { CharacterForm } from './CharacterForm'
import { character_init } from '../../schema/characters';
import axios from 'axios';

export default CreateCharacter = ({ show, onHide }) => {
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
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Character</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CharacterForm initialValues={character_init} onSubmit={onSubmit}/>
            </Modal.Body>
        </Modal>
    )
}