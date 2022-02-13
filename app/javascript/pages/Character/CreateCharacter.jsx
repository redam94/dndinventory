import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { CharacterForm } from './CharacterForm'
import { character_init } from '../../schema/characters';
import {createCharacter} from '../../actions/api';

export default CreateCharacter = ({ show, onHide }) => {
    
    const onSubmit = ({characterName}) => {

        createCharacter(characterName)
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