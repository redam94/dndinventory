import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default Items = () => {
    let params = useParams();
    let [items, setItems] = useState([{name:"gold"}]);

    useEffect(() => {
        axios.get("/api/v1/items", {useCredentials: true})
            .then((response) => {
                if(response.status === 200){
                    console.log(response)
                }
            })
    }, [])
    return (
        <div className="m-4">
        <h1>{params.name}'s Inventory</h1>
        <ul >
        {items.map((item, index) => {
            return (<li key={index}>{item?.name}</li>)
        })}
        </ul>
        <Button variant="primary" as={Link} to={"/createitem/"+params.name}>Add Item</Button>
        </div>
    )
}