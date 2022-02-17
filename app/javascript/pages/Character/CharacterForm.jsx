import React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { character_schema } from '../../schema/characters';

export const CharacterForm = ({ initialValues, onSubmit }) => {

    return (
        <Formik validationSchema={character_schema} onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit, handleChange, values, touched, errors }) => (
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