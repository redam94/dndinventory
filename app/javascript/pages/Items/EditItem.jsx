import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { getItemById } from '../../actions/api';
import { item_init, item_schema } from '../../schema/items';
import ItemForm from './ItemForm'
import {Formik} from 'formik';
import axios from 'axios';

export default EditItem = ({loggedIn}) => {
    const params = useParams();
    const navigate = useNavigate();

    const [item, setItem] = useState(item_init);

    const handleSubmit = (data) => {
        axios.put(`/api/v1/items/${params.id}`, { item: {
            "name": data.name,
            "qty": data.qty,
            "weight": data.weight,
            "description": data.description,
            "value": data.value,
        }}, {useCredentials: true}).then(res => {
            if(res.data.status === "created"){
                navigate('/character/'+params.name)
            }else{
                alert("Something went wrong. Please try again")
                console.log(res)
            }
        })
    };
    useEffect(() => getItemById(params.id, true).then(item => {setItem(item); console.log('item', item)}), [loggedIn]);

    return (
        <div className="m-4">
            <h1>Edit {item.name}</h1>
        <Formik 
            enableReinitialize
            validationSchema={item_schema} 
            initialValues={{name:item.name, weight:item.weight, qty:item.qty, description:item.description, value:item.value || 0}} 
            onSubmit={handleSubmit}>
            {ItemForm}
        </Formik>
        </div>
    )
}