import React, {useEffect, useLayoutEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Formik} from 'formik';
import { item_schema } from '../../schema/items';
import axios from 'axios';
import ItemForm from './ItemForm';

export default CreateItem = ({ loggedIn }) => {
    const params = useParams();
    const navigate = useNavigate();
    const handleSubmit = (data) => {
        axios.post('/api/v1/items/'+params.name, { item: {
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
    }
    useLayoutEffect(() => {loggedIn || navigate('/')}, [loggedIn])
    return (
        <div className="m-4">
            <h1>Add a new item to {params.name}'s inventory</h1>
            <Formik validationSchema={item_schema} onSubmit={handleSubmit} 
            initialValues={{name:"", weight:0, qty:1, description:"", value:0}}>
                {ItemForm}
            </Formik>
        </div>
    )
}

