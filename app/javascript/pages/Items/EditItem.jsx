import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getItemById } from '../../actions/api';
import { item_init, item_schema } from '../../schema/items';
import ItemForm from './ItemForm'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { editItemById, deleteItemById } from '../../actions/api'

export default EditItem = ({ loggedIn }) => {
    const params = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(item_init);

    const handleSubmit = useCallback((data) => {
        editItemById(data, params.id).then(res => {
            if (res.data.status === "created") {
                navigate('/character/' + params.name)
            } else {
                alert("Something went wrong. Please try again")
                console.log(res)
            }
        })
    }, [params.id, params.name]);

    const handleDelete = useCallback(() => {
        deleteItemById(params.id);
        navigate('/character/' + params.name);
    }, [params.id, params.name]);

    useEffect(() => {
        getItemById(params.id, true)
            .then(item => {
                setItem(item);
                console.log('item', item);
            })
    }, [loggedIn]);

    return (
        <div className="m-4">
            <div style={{ display: "flex", flexDirection: 'col' }}>
                <h1>Edit {item.name}</h1>
                <Button
                    className="mx-4"
                    style={{ height: '3rem' }}
                    variant="danger"
                    onClick={handleDelete}>Delete</Button>
            </div>
            <Formik
                enableReinitialize
                validationSchema={item_schema}
                initialValues={{ name: item.name, weight: item.weight / 1000, qty: item.qty, description: item.description, value: item.value / 1000 || 0 }}
                onSubmit={handleSubmit}>
                {ItemForm}
            </Formik>
        </div>
    )
}