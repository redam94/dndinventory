import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CharacterForm } from './CharacterForm';
import { editCharacterById, deleteCharacterById } from '../../actions/api';

export default EditCharacter = ({ id, show, onHide, name }) => {
    const onSubmit = ({ characterName }) => {
        editCharacterById(id, characterName)
            .then(response => {
                if (response.data?.status === 'created') {
                    onHide();
                } else {
                    alert("Character not Editted")
                }
            })
    };
    const onClick = () => {
        deleteCharacterById(id)
            .then(response => response.data.status === 'deleted' ? onHide() : alert("Character not Deleted"));
    }
    return (
        <Modal show={show} onHide={onHide} size='lg' centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1>Edit {name}</h1>
                    <Button variant='danger' onClick={onClick}>Delete</Button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CharacterForm initialValues={{ characterName: name }} onSubmit={onSubmit} />
            </Modal.Body>
        </Modal>
    )
}