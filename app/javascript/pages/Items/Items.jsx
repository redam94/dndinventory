import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import axios from 'axios';

export default Items = () => {
    let params = useParams();
    let [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("/api/v1/items/"+params.name, {useCredentials: true})
            .then()
    })
    
}