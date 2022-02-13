import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { getItemById } from '../../actions/api';
import { item_init, item_schema } from '../../schema/items';
import ItemForm from './ItemForm'
import {Formik} from 'formik';
import {Button} from 'react-bootstrap';
import {editItem, deleteItem} from '../../actions/api'

export default EditItem = ({loggedIn}) => {
    const params = useParams();
    const navigate = useNavigate();

    const [item, setItem] = useState(item_init);
    
    const handleSubmit = (data) => {
        editItem(data, params.id).then(res => {
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
            <div style={{display:"flex", flexDirection:'col'}}>
            <h1>Edit {item.name}</h1>
            <Button className="mx-4" style={{height: '3rem'}} variant="danger" onClick={() => {deleteItem(params.id); navigate('/character/'+params.name)}}>Delete</Button>
            </div>
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