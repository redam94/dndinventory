import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default Items = ({ loggedIn }) => {
    const params = useParams();
    const navigate = useNavigate();
    let [items, setItems] = useState([{name:"gold"}]);

    useEffect(() => {
        loggedIn || navigate('/');
        loggedIn && axios.get("/api/v1/items", {useCredentials: true})
            .then((response) => {
                if(response.status === 200){
                    console.log(response)
                }
            });
    }, [loggedIn])
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